import React from "react";
import { View } from "react-native";
import BuyButton from "./buyButton";
import DepositeButton from "./depositeButton";

const ButtonCard = () => {
  return (
    <View className=" flex justify-center items-center px-4 mt-1 gap-3 mx-1">
      <BuyButton />
      <DepositeButton />
    </View>
  );
};

export default ButtonCard;