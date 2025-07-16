import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useRouter } from 'expo-router';

type props = {
    placeName: string,
    desc: string,
    score: number,
    image: any,
    spent?: number,
    bgColor: string,
}

function LastTimeCard(props: props) {
    return (
        <View className="bg-white px-4 rounded-3xl max-h-32 items-center justify-center flex-row gap-3 mr-4">
            <View className="px-1 py-1 rounded-2xl" style={{ backgroundColor: props.bgColor }}>
                <Image source={props.image} className="max-w-20 max-h-20" />
            </View>
            <View className="info flex-col gap-2">
                <View className="gap-0">
                    <Text className="text-lg font-bold text-slate-800">
                        {props.placeName}
                    </Text>
                    <Text className="text-base font-semibold text-slate-500">
                        {props.desc}
                    </Text>
                    <View className="flex-row gap-1 items-center ">
                        <Ionicons name="star" color="#F6C901" size={16} />
                        <Text className="text-base font-bold text-slate-900">
                            {props.score}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LastTimeCard;