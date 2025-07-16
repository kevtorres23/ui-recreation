import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useRouter } from 'expo-router';

type categoryProps = {
    name: string,
    image: any
    btnColor: string,
}

function CategoryCard(props: categoryProps) {
    const router = useRouter();
    let triangleImg;

    if (props.btnColor === "#FFBB00") {
        triangleImg = require('../assets/images/green-triangle.png');
    } else if (props.btnColor === "#87BC3E") {
        triangleImg = require('../assets/images/yellow-triangle.png');
    }

    return (
        <View className="flex-col gap-3 px-6 py-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] items-center justify-center mr-4 bg-white">
            <Image source={triangleImg} className="absolute top-0 right-0 max-w-28 max-h-28"></Image>

            <View className='px-2 py-2 rounded-[50%] items-center justify-center'>
                <Image source={props.image} className="max-w-[72px] max-h-[72px]"></Image>
            </View>

            <Text className="font-bold text-lg">
                {props.name}
            </Text>
            <TouchableOpacity onPress={() => router.navigate('/fastfood')} className="py-2 px-2 rounded-[50%]" style={{ backgroundColor: props.btnColor }}>
                <Text className="font-semibold">
                    <Ionicons name="chevron-forward-outline" color="black" size={21} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryCard;