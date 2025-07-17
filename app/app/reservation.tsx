import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import NearByOffer from '@/components/NearByOffer';
import Ionicons from '@react-native-vector-icons/ionicons';

function Reservation() {
    const router = useRouter();
    const [number, setNumber] = useState(1);

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center w-screen bg-gray-50 pb-10">
                    <ImageBackground className='w-full h-64 overflow-hidden' resizeMode='cover' source={require('../assets/images/restaurant6.jpg')}></ImageBackground>

                    <View className="content gap-8 flex-col w-full rounded-t-full py-6">
                        <View className='gap-3 px-6'>
                            <View className='w-full items-center justify-between flex-row'>
                                <TouchableOpacity className='px-4 py-2 bg-[#87BC3E] rounded-xl'>
                                    <Text className='text-white font-medium'>
                                        Positive
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity className='w-12 h-12 bg-[#FFBB00] rounded-[50%] items-center justify-center'>
                                    <Ionicons name='heart' color="white" size={18} />
                                </TouchableOpacity>
                            </View>
                            <Text className='text-2xl font-bold'>
                                Wizo Bar and Restaurant
                            </Text>
                            <View className='flex-row gap-2'>
                                <View className='flex-row gap-1 items-center justify-center'>
                                    <Ionicons name="time" color="#FFBB00" size={16} />
                                    <Text className='text-lg font-medium text-slate-900'>
                                        19 KM
                                    </Text>
                                </View>
                                <View className='flex-row gap-1 items-center justify-center'>
                                    <Ionicons name="star" color="#FFBB00" size={16} />
                                    <Text className='text-lg font-bold text-slate-900'>
                                        4.9
                                    </Text>
                                    <Text>
                                        out of 5
                                    </Text>
                                </View>
                            </View>
                            <Text className='text-base font-medium text-slate-800'>
                                Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough flipped with tomato, cheese, and often...
                            </Text>

                            <View className='w-full flex-1 flex-row gap-4'>
                                <TouchableOpacity className='w-full flex-1 gap-2 px-4 py-4 items-center justify-center rounded-2xl border border-gray-200 bg-white'>
                                    <View className='gap-2'>
                                        <View className='flex-row gap-1 items-center'>
                                            <Ionicons name="arrow-redo" color="#FFBB00" size={21} />
                                            <Text className='font-medium text-slate-900 text-base'>
                                                Get directions
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity className='w-full flex-1 gap-2 items-center justify-center px-4 py-4 rounded-2xl border border-gray-200 bg-white'>
                                    <View className='gap-2'>
                                        <View className='flex-row gap-1 items-center'>
                                            <Ionicons name="call" color="#87BC3E" size={21} />
                                            <Text className='font-medium text-slate-900 text-base'>
                                                Call for info
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>

                        <View className='gap-3'>
                            <Text className='text-xl px-6 font-bold'>Popular Menu</Text>
                            <ScrollView className='ml-6' horizontal={true}>
                                <NearByOffer image={require('../assets/images/food-bg1.jpg')} percentage={30} name='Restaurant 1' />
                                <NearByOffer image={require('../assets/images/restaurant2.jpg')} percentage={30} name='Restaurant 2' />
                                <NearByOffer image={require('../assets/images/restaurant3.jpeg')} percentage={30} name='Restaurant 3' />
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
        paddingTop: Platform.OS === "android" ? 30 : 15,
        paddingBottom: 50,
    },

    scroll: {
        paddingHorizontal: 0,
        paddingBottom: 20,
        width: "auto",
    }
});

export default Reservation;