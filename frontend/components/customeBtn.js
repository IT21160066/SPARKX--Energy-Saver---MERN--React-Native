import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants/theme";

const CustomeBtn = ({ iconUrl, dimension }) => {
  return (
    <TouchableOpacity style={style.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={style.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
  btnContainer: {
    width: 48,
    height: 48,
    marginLeft: 5,
    backgroundColor: "#3E92CC",
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomeBtn;
