import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import sparkX from "../assets/SparkX.png"

export default function ReportOutage() {

  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const [outageData, setOutageData] = useState({
    id: null,
    coordinate: { latitude: null, longitude: null },
    areas: [],
    title: '',
    description: '',
    image: '',
    rating: '',
    tobe: false,
    reason: '',
    status: '',
  });

  const handleInputChange = (field, value) => {
    if (field === 'coordinate') {
      // Split the input value into latitude and longitude
      const [latitude, longitude] = value.split(',');
      setOutageData({ ...outageData, coordinate: { latitude, longitude } });
    } else {
      setOutageData({ ...outageData, [field]: value });
    }
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const handleAddOutage = () => {
    toggleModal();
    setTimeout(() => {
      toggleModal();
      navigation.navigate('Tabs');
    }, 1200);
  };


  return (
    <View style={styles.container} >
      <Text style={styles.areaText}>Add a outage area</Text>

      <View style={styles.form}>
        <Text style={styles.txt}>Area</Text>
        <TextInput style={styles.filed} placeholder="Area" />
        <Text style={styles.txt}>Status</Text>
        <TextInput style={styles.filed} placeholder="Description" />
        <Text style={styles.txt}>District</Text>
        <TextInput style={styles.filed} placeholder="District" />
        <Text style={styles.txt}>Coordinates</Text>
        <TextInput style={styles.filed} placeholder="Coordinates" />
        <Text style={styles.txt}>Reason</Text>
        <TextInput style={styles.filed} placeholder="Reason" />
        <Text style={styles.txt}>Description</Text>
        <TextInput style={styles.filed1} placeholder="Description" />

        <TouchableOpacity style={styles.loginBtn} onPress={handleAddOutage}>
          <Text style={styles.loginText}>Add</Text>
        </TouchableOpacity>

      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.iconContainer}>
            <Icon name="check-circle" size={60} color="#096FCC" />
          </View>
          <Text style={styles.modalTitle}>Success!</Text>
          <Text style={styles.modalDescription}>
            You added a new Outage area successfully.
          </Text>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  areaText: {
    fontSize: 22,
    fontWeight:'bold'
  },
  form: {
    gap: 3,
    marginTop: 30,
  },
  cardImage:{
    position:'absolute',
    marginTop:160,
    right:-160
  },
  filed: {
    borderWidth: 1,
    width: 280,
    height: 45,
    borderColor: '#3E92CC',
    padding: 5,
    borderRadius: 8
  },
  txt: {
    fontSize: 15,
    top: 3
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  iconContainer: {
    marginBottom: 20,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center', // Center-align the text
    color: '#333', // Customize description color
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#096FCC', // Customize title color
    textAlign: 'center', // Center-align the text
  },
  filed1: {
    borderWidth: 1,
    width: 280,
    height: 60,
    borderColor: '#3E92CC',
    padding: 5,
    borderRadius: 8
  },
  loginText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "#16324F",
    padding: 12,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
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
})