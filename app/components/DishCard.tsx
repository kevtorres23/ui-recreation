import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useState } from "react";
import { useRouter } from 'expo-router';

type props = {
    name: string,
    time: number,
    price: number,
    image: any,
}

function DishCard(props: props) {
    const [number, setNumber] = useState(1);

    function decrement() {
        if (number > 1) {
            setNumber((prevNum) => prevNum - 1)
        } else {
            return;
        }
    }

    function increment() {
        setNumber((prevNum) => prevNum + 1)
    }

    return (
        <View className="bg-white flex-row rounded-2xl items-center w-full">
            <Image source={props.image} className="w-full max-w-28 h-full rounded-l-xl mr-4" />
            <View className="flex-1 w-full flex-row justify-between items-center">
                <View className="info flex-col gap-2">
                    <View className="gap-1 py-4">
                        <Text className="text-lg font-bold text-slate-800">
                            {props.name}
                        </Text>
                        <View className="items-center justify-center gap-1 flex-row">
                            <Ionicons name="time-outline" color="grey" size={18} />
                            <Text className="text-base font-semibold text-slate-500">
                                {props.time} minutes
                            </Text>
                        </View>
                        <View className="flex-row gap-1 items-center ">
                            <Text className="text-xl font-bold text-slate-900">
                                ${props.price}
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="flex-row">
                    <TouchableOpacity onPress={decrement} className="plus-btn w-auto bg-white items-center border border-slate-300 justify-center rounded-l-lg px-1">
                        <Text className="text-white font-bold">
                            <Ionicons name="remove" size={20} color="black" />
                        </Text>
                    </TouchableOpacity>
                    <View className="items-center justify-center px-3 bg-[#87BC3E]">
                        <Text className="w-full h-auto py-1 flex text-center text-white font-bold text-base">
                            {number}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={increment} className="minus-btn bg-white items-center border border-slate-300 justify-center rounded-r-lg px-1 h-auto">
                        <Text className="text-white font-bold">
                            <Ionicons name="add" size={20} color="black" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DishCard;