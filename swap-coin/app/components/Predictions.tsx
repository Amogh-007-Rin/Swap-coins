import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import PredictionCard from './PredictionCard'
import Ionicons from "@expo/vector-icons/Ionicons";


const DATA = [{ id: "1", ImageUrl: "https://assets.coingecko.com/coins/images/4128/large/solana.png", Activity: true, Headline: "Solana On Bull Run", Title: "Solana Price Increase..." }, { id: "2", ImageUrl: "https://assets.coingecko.com/coins/images/279/large/ethereum.png", Activity: false, Headline: "Ethereum Short !", Title: "Rapid Down In Price..." }, { id: "3", ImageUrl: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png", Activity: true, Headline: "Bitcoin On Liquid Pool", Title: "New Raise Of Bitcoin..." }, { id: "4", ImageUrl: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png", Activity: true, Headline: "Price Estimates For XRP", Title: "XRP price will shoot upto 10%.." }, { id: "6", ImageUrl: "https://assets.coingecko.com/coins/images/4128/large/solana.png", Activity: true, Headline: "Solana Funded Phantom", Title: "Phantom Raised 200M.." }]

const Predictions = () => {
    return (
        <View className='w-full h-56 flex justify-center'>
            <View className='flex-row items-center'>
                <Text className='text-white text-xl mx-4'>Predictions</Text>
                <View className='flex justify-center items-center -mx-4'><Ionicons name="chevron-forward" size={18} color='white'></Ionicons></View>
            </View>
            <FlatList
                data={DATA}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PredictionCard id={item.id} ImageUrl={item.ImageUrl} Activity={item.Activity} Headline={item.Headline} Title={item.Title}></PredictionCard>
                )}
                contentContainerStyle={{ padding: 20 }}
            />
        </View>
    )
}

export default Predictions;