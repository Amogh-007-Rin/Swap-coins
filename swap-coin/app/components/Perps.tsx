import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import PrepsCard from './PrepsCard';
import Ionicons from "@expo/vector-icons/Ionicons";



const Preps = () => {
    
    return (
        <View className='w-full h-[170px] flex justify-center'>
            <View className='flex-row items-center -my-4 w-full'>
                <Text className='text-white text-xl mx-5 -my-4 w-full justify-center '>
                    Preps <Ionicons name="chevron-forward" size={18} color='white'></Ionicons>
                </Text>
            </View>
            <PrepsCard></PrepsCard>
        </View>
    )
}

export default Preps;