import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';

export type PredictionCardData = {
    id: string,
    ImageUrl: string,
    Activity: boolean,
    Headline: string,
    Title: string
}



const PredictionCard = ({ id, ImageUrl, Activity, Headline, Title }: PredictionCardData) => {
    return (
        <View className="flex items-center py-2 bg-[#11111a] mr-4 border border-[#212132] w-64 h-[170px] gap-2 rounded-xl">
            <View className='flex-row w-[90%] px-1 py-1'>
                <Image source={{ uri: ImageUrl }} className='h-14 w-14 rounded-xl bg-black'></Image>
                <View className="rounded-lg px-2 py-1 flex justify-center items-center bg-[#1a1a26] absolute right-0">
                    <Text className={Activity ? 'text-green-500 text-xs text-center' : 'text-red-500 text-xs text-center'}>{Activity ? "• LIVE" : "OFFLINE"}</Text>
                </View>

            </View>
            <View className='flex items-start w-[90%] h-14 justify-center'>
                <Text className="text-white font-bold text-xl">{Headline}</Text>
                <Text className='text-[#767575] my-2 font-medium text-base'>{Title}</Text>
            </View>
        </View>
    )
}

export default PredictionCard;