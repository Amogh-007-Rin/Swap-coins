import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const buyButton = () => {
    return (
        <View className='flex justify-center items-center w-full h-10'>
            <View className='flex justify-center items-center w-3/4 h-10 bg-[#9590ec] rounded-xl'>
                <TouchableOpacity onPress={alert} className='w-full h-full flex justify-center items-center'><Text className='text-white'>Buy SOL with Cash</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default buyButton;