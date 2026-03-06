import { Text, TouchableOpacity, View } from "react-native";
import "../global.css";
import WelcomeCard from "./components/welcomeCard"
import ButtonCard from "./components/buttonCard";
import SwapButtons from "./components/swapButtons";
import TokenCard from "./components/TokenCard";
import CoinCard from "./components/CoinCard";

export default function Index() {
  return (
    <View className="h-full w-full bg-[#131313]">
        <WelcomeCard/>
        <ButtonCard/>
        <View className="w-full h-24 flex justify-evenly items-center flex-row">
          <SwapButtons lable="Send" name="paper-plane-outline" iconColor="#9590ec"></SwapButtons>
          <SwapButtons lable="Swap" name="swap-vertical" iconColor="#9590ec"></SwapButtons>
          <SwapButtons lable="Recieve" name="qr-code" iconColor="#9590ec"></SwapButtons>
          <SwapButtons lable="Buy" name="card-outline" iconColor="#9590ec"></SwapButtons>
        </View>
        <TokenCard></TokenCard>
        <View className="flex justify-center items-center">
        <CoinCard></CoinCard>
        </View>        
    </View>
  );
}
