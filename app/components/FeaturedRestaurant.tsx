import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useRouter } from 'expo-router';

type categoryProps = {
    name: string,
    image: any
    btnColor: string,
}

function FeaturedRestaurant(props: categoryProps) {
    const router = useRouter();

    return (
        <View className="flex-col gap-3 rounded-3xl shadow-xl items-center justify-center mr-4 w-64 bg-white">
            <Image source={props.image} className="w-full h-40 rounded-3xl"></Image>

            <View className="flex-1 pb-4 px-2 flex-col gap-2 items-center justify-center">
                <Text className="font-bold text-lg">
                    {props.name}
                </Text>
                <TouchableOpacity onPress={() => router.navigate('/fastfood')} className="w-full py-2 px-10 items-center justify-center rounded-xl" style={{ backgroundColor: props.btnColor }}>
                    <Text className="font-semibold">
                        Visit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FeaturedRestaurant;