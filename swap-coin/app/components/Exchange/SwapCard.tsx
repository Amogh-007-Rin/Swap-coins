import { View, Text, TextInput, Pressable } from 'react-native';
import { Image } from 'expo-image';
import React, {useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

type SwapBoxParams = {
    name: string,
    coinImageUrl : string,
    currencyName : string,
    myBalance : number
    verifiedImage: string | null | undefined | ImageBitmap

}

// const verifiedImage = require("../../../assets/images/verifiedImage.png");

const SwapCard = ({name, coinImageUrl, currencyName, myBalance, verifiedImage}: SwapBoxParams) => {

    const [payAmount, setPayAmount] = useState("");
    const [recieveAmount, setRecieveAmount] = useState("");
    return (
        <View>
            <View className='w-[90%] h-32 my-4 bg-[#11111a] rounded-2xl border border-gray-400 p-3'>
                <View className='w-full h-1/3 my-1 bg-blue-300'><Text className='text-white'>{name}</Text></View>
                <View className='flex-row w-full justify-between bg-red-400'>
                    <TextInput className='w-1/2 bg-[#11111a] text-white ' placeholder='0' placeholderTextColor='gray' onChangeText={setPayAmount} value={payAmount} keyboardType='numeric' />
                    <View className='w-1/2 flex items-center justify-center p-1'>
                        <Pressable className='w-2/3 bg-orange-800 justify-center items-center p-2 rounded-2xl'>
                            <Image className='rounded-full' source={coinImageUrl}></Image>
                            <Text className='text-white text-center'>{currencyName}</Text>
                            <Image className='rounded-full'source={verifiedImage}></Image>
                        </Pressable>
                    </View>
                </View>
                <View className='flex-row w-full justify-between bg-yellow-400'>
                    <Pressable className='rounded-full bg-slate-400'>
                        <Ionicons name='sync-sharp' size={12} color='FFFFFF'></Ionicons>
                    </Pressable>
                    <Text className='text-white'>{myBalance} {currencyName}</Text>
                </View>
            </View>
        </View>
    )
}

export default SwapCard