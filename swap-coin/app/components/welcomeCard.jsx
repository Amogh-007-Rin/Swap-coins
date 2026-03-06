import React from "react";
import { Image, Text, View } from "react-native";

const xrpImage = require("../../assets/images/xrp.png");
const solanaImage = require("../../assets/images/solana.png");
const ethImage = require("../../assets/images/eth.png");

export default function WelcomeCard() {
    return (
        <View className="px-4 pt-2 pb-3">
            <View className="rounded-3xl border border-[#242438] bg-[#11111a] px-5 py-5">
                <View className="flex-row items-center justify-between">
                    <Text className="text-[#8e90a7] text-xs tracking-[0.8px]">TOTAL BALANCE</Text>
                    <View className="rounded-full bg-[#1d1b2c] px-2 py-1 border border-[#2f2d44]">
                        <Text className="text-[#6affbc] text-[11px]">+2.24%</Text>
                    </View>
                </View>

                <Text
                    className="text-white text-4xl mt-3"
                    style={{ fontFamily: "SpaceMono" }}
                >
                    $12,487.91
                </Text>
                <Text className="text-[#7f89ff] mt-2">+$273.82 today</Text>

                <View className="mt-5 flex-row items-center justify-between">
                    <View className="flex-row">
                        <Image source={solanaImage} className="h-8 w-8 rounded-full border border-[#242438]" />
                        <Image source={ethImage} className="h-8 w-8 rounded-full border border-[#242438] -ml-2" />
                        <Image source={xrpImage} className="h-8 w-8 rounded-full border border-[#242438] -ml-2" />
                    </View>

                    <View className="px-3 py-2 rounded-xl bg-[#161626] border border-[#23233a]">
                        <Text className="text-[#c8cae6] text-xs">3 assets active</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
