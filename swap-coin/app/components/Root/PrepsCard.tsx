import { View, Text, Image, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { Coin, getCoinData } from '@/scripts/getCoinData';


const PrepsCard = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchList = async () => {
            const data = await getCoinData();
            setCoins(data);
            setLoading(false);
        };
        fetchList();
    }, []);

    const visibleCoins = useMemo(() => {
        if (!coins.length) {
            return [];
        }

        const priority = ["solana", "ethereum", "bitcoin", "ripple"];
        const sorted = [...coins].sort(
            (a, b) => priority.indexOf(a.id) - priority.indexOf(b.id)
        );
        return sorted.slice(0, 35);
    }, [coins]);

    if (loading) {
        return (
            <View className="h-40 items-center justify-center">
                <ActivityIndicator size="large" color="#7f89ff" />
            </View>
        );
    }

    return (
        <FlatList
            data={visibleCoins}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="h-2" />}
            contentContainerStyle={{ padding: 10, marginTop: 0 }}
            renderItem={({ item }) => (
                <View className='w-40 h-32 mx-1 my-8 rounded-2xl p-2 flex justify-center bg-[#11111a]'>
                    <View className='h-3/4 flex justify-center p-1'>
                        <Image source={{ uri: item.image }} className='w-12 h-12 rounded-full bg-black mx-1'></Image>
                        <View className='flex-row w-full h-[30px] items-center'>
                            <View className='w-auto h-full flex justify-center mx-3'><Text className='text-white text-sm font-bold text-center' style={{ fontFamily: "Space-Mono" }}>{item.symbol.toUpperCase()}</Text></View>
                            <View className='w-[40px] h-[20px] flex justify-center bg-[#1a1a26] rounded-md'><Text className='text-[#ffffff96] text-center text-sm font-bold'>{Number(item.price_change_percentage_24h).toFixed(1)}x</Text></View>
                        </View>
                    </View>
                    <View className='h-1/4 w-ful flex justify-center'>
                        <View className="w-1/2 rounded-lg px-2 py-1 flex justify-center items-center">
                            <Text
                                className={`text-sm font-bold text-center ${item.price_change_percentage_24h >= 0 ? "text-[#6affbc]" : "text-[#ff7d99cf]"
                                    }`}
                            >
                                {item.price_change_percentage_24h >= 0 ? "+" : ""}
                                {Number(item.price_change_percentage_24h).toFixed(2)}%
                            </Text>
                        </View>
                    </View>
                </View>
            )}
            ListEmptyComponent={
                <View className="h-20 rounded-2xl border border-[#222236] bg-[#11111a] items-center justify-center">
                    <Text className="text-[#8f90a2]">No token data available</Text>
                </View>
            }
        />
    )
}

export default PrepsCard;