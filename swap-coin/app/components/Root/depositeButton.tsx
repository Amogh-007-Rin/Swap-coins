import React from "react";
import { Text, TouchableOpacity } from "react-native";

const DepositeButton = () => {
  return (
        <TouchableOpacity
            onPress={() => alert("Deposit Crypto")}
            className="w-full h-12 rounded-2xl bg-[#15151f] border border-[#26263a] items-center justify-center active:opacity-80"
        >
            <Text className="text-[#dde0ff] text-[15px]" style={{ fontFamily: "SpaceMono" }}>
                Deposit Crypto
            </Text>
        </TouchableOpacity>
    );
};

export default DepositeButton;