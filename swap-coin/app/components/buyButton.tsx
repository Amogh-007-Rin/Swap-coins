import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const BuyButton = () => {
    return (
        <TouchableOpacity
            onPress={() => alert("Buy SOL with Cash")}
            className="w-full h-12 rounded-2xl bg-[#7f89ff] items-center justify-center active:opacity-80 my-4"
        >
            <View className="flex-row items-center justify-center gap-2">
                <Text className="text-[#04050d] text-[15px]" style={{ fontFamily: "SpaceMono" }}>
                    Buy SOL with Cash
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default BuyButton;