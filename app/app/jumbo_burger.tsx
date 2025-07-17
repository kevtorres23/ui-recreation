import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput, Touchable } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import CategoryCard from '@/components/CategoryCard';
import NearByOffer from '@/components/NearByOffer';
import FeaturedRestaurant from '@/components/FeaturedRestaurant';
import FoodCategory from '@/components/FoodCategory';

export default function JumboBurger() {
    const router = useRouter();
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
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center w-screen bg-slate-50 gap-8 pb-10">
                    <View className='absolute bg-[#FFBB00] h-[350px] mt-[-120px] w-[600px] rounded-[50%] top-0'>
                    </View>

                    <View className='flex-col w-full gap-6 mt-20 items-center justify-center'>
                        <Image source={require('../assets/images/burgercombo.png')} className='w-80 h-60' />

                        <View className='w-full flex-col gap-8'>
                            <View className='flex-row gap-2 items-center justify-between px-6'>
                                <View className="flex-row justify-center">
                                    <TouchableOpacity onPress={decrement} className="plus-btn w-10 bg-white items-center border border-slate-300 justify-center rounded-l-lg px-1">
                                        <Text className="text-white font-bold">
                                            <Ionicons name="remove" size={20} color="black" />
                                        </Text>
                                    </TouchableOpacity>
                                    <View className="items-center justify-center px-3 bg-[#87BC3E]">
                                        <Text className="w-full h-auto py-4 px-2 flex text-center text-white font-bold text-xl">
                                            {number}
                                        </Text>
                                    </View>
                                    <TouchableOpacity onPress={increment} className="minus-btn w-10 bg-white items-center border border-slate-300 justify-center rounded-r-lg px-1 h-auto">
                                        <Text className="text-white font-bold">
                                            <Ionicons name="add" size={20} color="black" />
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View className='flex-row gap-2 items-center justify-center'>
                                    <Text className='text-4xl font-bold'>
                                        $6.59
                                    </Text>
                                    <Text className='text-base line-through font-medium text-slate-600'>
                                        $33.49
                                    </Text>
                                </View>
                            </View>
                            <View className='flex-col gap-3 px-6'>
                                <Text className='font-bold text-3xl'>Beef Burger</Text>
                                <View className='flex-row gap-2'>
                                    <Text className='font-medium text-base text-slate-500'>
                                        Cheezy Mozzarella
                                    </Text>
                                    <View className='flex-row gap-0.5'>
                                        <Ionicons name="star" size={16} color="#FFBB00" />
                                        <Text className='font-bold'>4.9</Text>
                                    </View>
                                </View>
                                <Text className='font-medium text-slate-900 text-base'>
                                    A hamburguer is a food consisting of fillings usually a patty of ground meet, typically beef placed inside a sliced bun or bread roll.
                                </Text>
                                <Text className='text-xl font-bold text-slate-950'>
                                    Reviews
                                </Text>
                                <View className='flex-row gap-3'>
                                    <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-14 h-14 rounded-[50%] overflow-hidden"></ImageBackground>
                                    <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-14 h-14 rounded-[50%] overflow-hidden"></ImageBackground>
                                    <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-14 h-14 rounded-[50%] overflow-hidden"></ImageBackground>
                                    <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-14 h-14 rounded-[50%] overflow-hidden"></ImageBackground>
                                    <TouchableOpacity className='w-14 h-14 bg-transparent border-2 border-[#FFBB00] rounded-[50%] items-center justify-center'>
                                        <Ionicons name='add-outline' color={"#FFBB00"} size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <ScrollView horizontal={true} className='mr-6 w-full'>
                                <TouchableOpacity className='ml-6 items-center rounded-xl mr-4 justify-center w-24 bg-emerald-300'>
                                    <Image source={require('../assets/images/coke.png')} className='w-24 h-24' />
                                </TouchableOpacity>
                                <TouchableOpacity className='items-center rounded-xl mr-4 justify-center w-24 bg-yellow-200'>
                                    <Image source={require('../assets/images/fries.png')} className='w-24 h-24' />
                                </TouchableOpacity>
                                <TouchableOpacity className='items-center rounded-xl mr-4 justify-center w-24 bg-blue-200'>
                                    <Image source={require('../assets/images/onion-dip.png')} className='w-20 h-20' />
                                </TouchableOpacity>
                                <TouchableOpacity className='items-center rounded-xl mr-4 justify-center w-24 bg-pink-200'>
                                    <Image source={require('../assets/images/nuggets.webp')} className='w-20 h-12' />
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 25 : 20,
        paddingBottom: 50,
    },

    scroll: {
        paddingHorizontal: 0,
        paddingVertical: 20,
        width: "auto",
    }
});