import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useRouter } from 'expo-router';

type props = {
    name: string,
    percentage: number,
    image: any
}

function NearByOffer(props: props) {
    return (
        <View className="bg-white shadow-xl max-h-40 rounded-2xl gap-3 mr-4">
            <Image className="w-full max-h-24 rounded-2xl" source={props.image} />
            <View className="px-3 flex-row gap-2 items-center justify-center">
                <Text className="text-slate-950 text-lg font-bold">
                    {props.percentage}%
                </Text>
                <Text className="text-slate-600 text-m font-semibold">
                    {props.name}
                </Text>
                <View className="bg-[#87BC3E] w-6 h-6 rounded-[50%] items-center justify-center">
                    <Ionicons name="star" color="white" size={12} />
                </View>
            </View>
        </View>
    )
}

export default NearByOffer;