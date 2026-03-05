import { Text, TouchableOpacity, View } from "react-native";
import "../global.css";
import WelcomeCard from "./components/welcomeCard"
import ButtonCard from "./components/buttonCard";

export default function Index() {
  return (
    <View className="h-full w-full bg-[#151515]">
        <WelcomeCard/>
        <ButtonCard/>
        
    </View>
  );
}
