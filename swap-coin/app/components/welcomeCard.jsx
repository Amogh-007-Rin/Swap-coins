import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const xrpImage = require("../../assets/images/xrp.png");
const solanaImage = require("../../assets/images/solana.png");
const ethImage = require("../../assets/images/eth.png");

export default function home() {
    return (
        <View className='w-full h-52 bg-[#151515] flex justify-center items-center'>
            <View className='flex flex-row my-2'>
                <Image source={xrpImage} className='h-20 w-20' />
                <Image source={ethImage} className='h-20 w-20' />
                <Image source={solanaImage} className='h-20 w-20' />
            </View>
            <Text className='text-white'>Your wallet is ready</Text>
            <View className='flex justify-center items-center my-2 w-2/3'>
                <Text className='text-white'>Fund your wallet with cash or crypto and</Text>
                <Text className='text-white'>you'll be set to start trading</Text>
            </View>
        </View>
    )
}
