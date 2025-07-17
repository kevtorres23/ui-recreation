import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useRouter } from 'expo-router';

type categoryProps = {
    name: string,
    image: any,
    bgColor: string,
}

function FoodCategory(props: categoryProps) {
    const router = useRouter();
    let coloredSquare;

    if (props.bgColor === "#FFBB00") {
        coloredSquare = require('../assets/images/green-triangle.png');
    } else if (props.bgColor === "#87BC3E") {
        coloredSquare = require('../assets/images/yellow-triangle.png');
    }

    return (
        <View className="flex-col gap-3 rounded-3xl shadow-xl items-center justify-center mr-4 bg-white w-24">
            <View className="w-full h-24 items-center justify-center rounded-3xl" style={{ backgroundColor: props.bgColor }}>
                <Image source={props.image} className="max-w-[64px] max-h-[64px]"></Image>

            </View>

            <View className="pb-4 items-center justify-center gap-2">
                <Text className="font-bold text-base">
                    {props.name}
                </Text>
                <TouchableOpacity onPress={() => router.navigate('/fastfood')} className="h-8 w-8 items-center justify-center rounded-[50%] bg-[#87BC3E]">
                    <Ionicons name="chevron-forward-outline" color="white" size={18} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FoodCategory;