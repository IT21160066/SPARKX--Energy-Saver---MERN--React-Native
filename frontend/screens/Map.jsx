import {
    StyleSheet, Text, TextInput, View, ScrollView, Animated, Image,
    TouchableOpacity, Dimensions, Platform,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { markers } from "../model/mapData"
import axios from "axios";
import Ip from "../Ip/Ip"

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 200;
const CARD_WIDTH = width * 0.7;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const DeliveryScreen = () => {

    const navigation = useNavigation();
    const { params } = useRoute()

    const [outageAreas,setOutageAreas] = useState([]);
    // console.log(outageAreas); //fetched

    // const fetchOutageList = async () => {
    //     try {
    //       const res = await axios.get(`http://${Ip}:5000/outage/`);
    //       const data = res.data;
    //       return data;
    //     } catch (error) {
    //       console.error("Error fetching Outage list:", error);
    //       throw error;
    //     }
    //   };

    //   useEffect(() => {
    //     fetchOutageList().then((data) => setOutageAreas(data));
    //   }, []);

    const initialMapState = {
        markers,
        categories: [
            {
                name: 'Awissawella',

            },
            {
                name: 'Maharagama',

            },
            {
                name: 'Homagama',

            },
            {
                name: 'Gampha',

            },
            {
                name: 'Nuwara Eliya',

            },
        ],
        region: {
            latitude: 6.8408,
            longitude: 80.0139,
            latitudeDelta: 2.556,
            longitudeDelta: 2.5559
        },
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredLocations, setFilteredLocations] = useState([]);

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filtered = markers.filter(marker =>
            marker.title.toLowerCase().includes(query)
        );
        setFilteredLocations(filtered);

        if (filtered.length > 0) {
            const { coordinate } = filtered[0];

            // Focus on the current location and use the existing latitudeDelta and longitudeDelta from the state.
            _map.current.animateToRegion(
                {
                    ...coordinate,
                    latitudeDelta: state.region.latitudeDelta,
                    longitudeDelta: state.region.longitudeDelta,
                },

            );
        }

    };

    const [state, setState] = React.useState(initialMapState);


    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);


    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= state.markers.length) {
                index = state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    const { coordinate } = state.markers[index];
                    _map.current.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: state.region.latitudeDelta,
                            longitudeDelta: state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    });



    const interpolations = state.markers.map((marker, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            ((index + 1) * CARD_WIDTH),
        ];

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.6, 1],
            extrapolate: "clamp"
        });

        return { scale };
    });


    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;

        let x = (markerID * CARD_WIDTH) + (markerID * 20);
        if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET;
        }

        _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
    }

    const _map = React.useRef(null);
    const _scrollView = React.useRef(null);


    return (

        <View style={styles.container}>
            <MapView
                ref={_map}
                initialRegion={state.region}
                style={styles.container}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
            >
                {state.markers.map((marker, index) => {
                    const scaleStyle = {
                        transform: [
                            {
                                scale: interpolations[index].scale,
                            },
                        ],
                    }
                    return (
                        <Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
                            <Animated.View style={[styles.markerWrap]}>
                                <Animated.Image
                                    source={require('../assets/map_marker.png')}
                                    style={[styles.marker, scaleStyle]}
                                    resizeMode="cover"
                                />
                            </Animated.View>
                        </Marker>
                    );
                })}
            </MapView>
            <View style={styles.searchBox}>
                <TextInput
                    placeholder="Search areas here"
                    autoCapitalize="none"
                    style={[styles.searchArea, { borderColor: '#3E92CC', marginBottom:12,marginTop:13,borderWidth: 2,paddingLeft:10,
                    backgroundColor:'white',}]}
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                />
                <View>
                <Ionicons name="ios-search" style={[styles.hdSearch]} size={38} color='white'  onPress={handleSearch} />
                </View>
                {/* <MyButton iconUrl={searchIcon} onPress={handleSearch} dimension="70%" /> */}
            </View>
                 
            <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                height={50}
                style={styles.chipsScrollView}
                contentInset={{ // iOS only
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 20,
                }}
                contentContainerStyle={{
                    paddingRight: Platform.OS === 'android' ? 20 : 0
                }}
            >
                {state.categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.chipsItem}>
                        {category.icon}
                        <Text>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Animated.ScrollView
                ref={_scrollView}
                horizontal
                pagingEnabled
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment="center"
                style={styles.scrollView}
                contentContainerStyle={{
                    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
                }}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag" 
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation,
                                }
                            },
                        },
                    ],
                    { useNativeDriver: true }
                )}
            >
                {
                    state.markers.map((marker, index) => (
                        <View style={{ paddingBottom: 45 }} key={index}>
                            <View style={styles.card} key={index}>
                                <Image
                                    source={marker.image}
                                    style={styles.cardImage}
                                    resizeMode="cover"
                                />
                                <View style={styles.textContent}>
                                    <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                                    <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>

                                    <View style={styles.button}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Outage', { marker })}
                                            style={[styles.signIn, {
                                                borderColor: '#FF6347',
                                                borderWidth: 1
                                            }]}
                                        >
                                            <Text style={[styles.textSign, {
                                                color: '#FF6347'
                                            }]}>View details</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>
                        </View>
                    ))
                }
            </Animated.ScrollView>

        </View>
    )
}

export default DeliveryScreen



const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 8,
        flexDirection: "row",
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        padding: 4,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    bubble: {
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
    },
    hdSearch:{
        marginTop:15,
        marginBottom:15,
        marginLeft:10,
        backgroundColor:'#3E92CC',
        borderRadius:4,
        
    },
    searchArea: {
        flex: 1,
        padding: 0,
        marginLeft:8,
        backgroundColor: '#fff',
        borderRadius:10,
        
    },
    chipsScrollView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 90 : 78,
        paddingHorizontal: 10
    },
    chipsIcon: {
        marginRight: 5,
    },
    chipsItem: {
        flexDirection: "row",
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        height: 35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        borderCurve: 25,
        shadowRadius: 5,
        bottom: 10,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    marker: {
        width: 30,
        height: 30,
    },
    button: {
        alignItems: 'center',
        marginTop: 5
    },
    signIn: {
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});