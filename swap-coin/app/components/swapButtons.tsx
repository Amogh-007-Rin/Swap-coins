import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";
import type { OpaqueColorValue } from "react-native";

type SwapButtonsProps = {
  lable: string;
  name: keyof typeof Ionicons.glyphMap;
  iconColor: string | OpaqueColorValue | undefined;
};

const SwapButtons = ({ lable, name, iconColor }: SwapButtonsProps) => {
  return (
    <View className="items-center">
      <Pressable
        className="w-[86px] h-[76px] rounded-3xl bg-[#13131d] border border-[#232336] items-center justify-center active:opacity-75"
        onPress={() => alert(lable)}
      >
        <Ionicons name={name} size={24} color={iconColor} />
        <Text className="text-[#cfd0df] text-xs mt-2 text-center">{lable}</Text>
      </Pressable>

    </View>
  );
};

export default SwapButtons;
