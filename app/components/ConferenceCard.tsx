import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useState } from "react";
import { useRouter } from 'expo-router';

type props = {
    name: string,
    desc: string,
    score: number,
    locations: string,
    image: any,
}

function ConferenceCard(props: props) {

    return (
        <View className="bg-white flex-row rounded-2xl items-center w-full gap-4 justify-cneter">
            <Image source={props.image} className="w-full max-w-28 h-full rounded-l-xl" />

            <View className="w-full flex-col py-4">
                <View className="flex-col gap-1">
                    <Text className="text-lg font-bold text-slate-900">
                        {props.name}
                    </Text>
                    <View className="items-center justify-start gap-1 flex-row">
                        <View className="bg-[#FFBB00] w-5 h-5 rounded-[50%] items-center justify-center">
                            <Ionicons name="ribbon" color="white" size={12} />
                        </View>
                        <Text className="text-base font-semibold text-slate-700">
                            {props.desc}
                        </Text>
                    </View>
                </View>

                <View className="flex-row gap-2 items-center mt-6">
                    <Ionicons name="star" color="#FFBB00" size={12} />
                    <Text className="text-base font-bold text-slate-900">
                        {props.score}
                    </Text>
                    <Text className="text-sm font-medium text-slate-500">
                        {props.locations}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ConferenceCard;