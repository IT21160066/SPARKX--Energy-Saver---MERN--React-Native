import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { SIZES, COLORS } from "../constants/theme";
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ElectricianReg( ) {

  const navigation = useNavigation();
  // const electricianData = route.params?.electricianData;

  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [image, setImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const selectImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      console.error('Permission to access image library was denied.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleRegistration = () => {
    console.log('Registration Data:', {
      fullName,
      contactNumber,
      address,
      age,
      qualifications,
      image,
    });

    toggleModal();

    setTimeout(() => {
      toggleModal();
      navigation.navigate('Tabs');
    }, 4000); 

  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView style={styles.container}>
        <View >

          <View style={styles.behindImage}>
            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.imageUploadButton} onPress={selectImage}>
                {image ? (
                  <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                ) : (
                  <Text>Add Photo</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Enter Full Name *"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter Contact Number *"
            keyboardType="phone-pad"
            value={contactNumber}
            onChangeText={(text) => setContactNumber(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Enter Address *"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />

          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            placeholder="Enter Age *"
            value={age}
            onChangeText={(text) => setAge(text)}
          />

          <TextInput
            style={styles.inputLarger}
            placeholder="Enter qualifications and experience *"
            value={qualifications}
            onChangeText={(text) => setQualifications(text)}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleRegistration}>
            <Text  style={styles.buttonText}>Submit Details</Text>
          </TouchableOpacity>
        </View>

      <Modal isVisible={isModalVisible}>
          <View style={styles.modalContent}>
            <View style={styles.iconContainer}>
              <Icon name="check-circle" size={60} color="#096FCC" />
            </View>
            <Text style={styles.modalTitle}>Success!</Text>
            <Text style={styles.modalDescription}>
              Registered successfully.
            </Text>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
      </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  behindImage:{
    backgroundColor: '#122B5C',
    borderRadius: 15, 
    marginBottom: 30
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 10
  },
  imageUploadButton: {
    width: 150, 
    height: 150, 
    backgroundColor: '#e0e0e0', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageUploadText: {
    fontSize: 16,
    color: 'blue', 
  },
  input: {
    height: 50,
    marginBottom: 10,
    paddingLeft: 10,
    fontSize: SIZES.medium,
    borderWidth: 0.4,
    borderColor: '#096FCC',
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 9,
  },
    inputLarger: {
      fontSize: 16,
      borderWidth: 0.4,
      borderColor: '#096FCC',
      borderRadius: 15,
      paddingVertical: 25,
      paddingHorizontal: 10,
      marginTop: 10,
      backgroundColor: "#fff",
      elevation: 10
  },
  submitButton:{
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      height: 40, 
      backgroundColor: "#096FCC",
      borderRadius: SIZES.small,
      marginTop: 50
  },
  buttonText:{
      color: "white",
      fontSize: SIZES.medium,
      textAlign: "center",
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#096FCC',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#096FCC', // Customize title color
    textAlign: 'center', // Center-align the text
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center', // Center-align the text
    color: '#333', // Customize description color
  },
});