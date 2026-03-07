import React from "react";
import { Text, View } from "react-native";

const TokenCard = () => {
  return (
    <View className="w-full px-4 mt-6 mb-2 flex-row items-center justify-between">
      <View className="flex-row items-center gap-2">
        <Text className="text-[22px] text-white" style={{ fontFamily: "SpaceMono" }}>
          Tokens
        </Text>
        <View className="rounded-full bg-[#171722] border border-[#252538] px-2 py-1">
          <Text className="text-[#8d8fba] text-[10px] flex justify-center items-center text-center">Live</Text>
        </View>
      </View>

      <View className="rounded-2xl bg-[#141420] border border-[#232337] px-2 py-1">
        <Text className="text-[#c7c8db] text-xs text-center">NFTs</Text>
      </View>
    </View>
  );
};

export default TokenCard;