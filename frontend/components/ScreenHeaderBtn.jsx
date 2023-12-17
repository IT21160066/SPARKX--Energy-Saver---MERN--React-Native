import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import backArrow from "../assets/arrow_white.png";

const ScreenHeaderBtn = ({ handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={backArrow}
        resizeMode="cover"
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
