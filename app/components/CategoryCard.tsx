import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

type categoryProps = {
    name: string,
    image: any
    shapeColor: string,
    btnColor: string,
}

const image = require('../assets/images/restaurant-3d.webp')

function CategoryCard(props: categoryProps) {
    return (
        <View className="flex-col gap-3 px-6 py-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] items-center justify-center bg-white">
            <View className='px-2 py-2 rounded-[50%] items-center justify-center'>
                <Image source={require('../assets/images/restaurant-3d.webp')} className="max-w-[72px] max-h-[72px]"></Image>
            </View>

            <Text className="font-bold text-lg">
                {props.name}
            </Text>
            <TouchableOpacity className="py-2 px-2 rounded-[50%]" style={{ backgroundColor: props.btnColor }}>
                <Text className="font-semibold">
                    <Ionicons name="chevron-forward-outline" color="black" size={21} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryCard;