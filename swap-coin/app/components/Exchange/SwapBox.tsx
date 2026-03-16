import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SwapCard from './SwapCard';
import { Coin, getCoinData } from '@/scripts/getCoinData';

useEffect(() => {
    const fetchList = async () => {
        const data = await getCoinData();
        setCoins(data);
        setLoading(false);
    };
    fetchList();
}, []);


const SwapBox = () => {

    return (
        <View>
            <SwapCard
                name='You Pay'
                coinImageUrl=''
                currencyName=''
                myBalance={20}
                verifiedImage=''
            />
        </View>
    )
}

export default SwapBox;

function setCoins(data: Coin[]) {
    throw new Error('Function not implemented.');
}
function setLoading(arg0: boolean) {
    throw new Error('Function not implemented.');
}

