import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import LowerNavigator from '@/components/LowerNavigator';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useEffect, useState } from 'react';

function UserProfile() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 w-screen flex-col bg-[#FFBB00] h-screen gap-8 pb-10 px-6 items-center justify-center">
                    <View className='absolute top-0 px-4 pt-28 pb-4 bg-[#c8a136] rounded-b-full'>
                        <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-20 h-20 rounded-[50%] overflow-hidden"></ImageBackground>
                    </View>

                    <View className='flex-row w-full items-center justify-between'>
                        <View className='items-start gap-3 mt-20'>
                            <View className="flex-row gap-2 items-center justify-center">
                                <TouchableOpacity className="bg-white w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="person" color={"black"} size={18} />
                                </TouchableOpacity>
                                <Text className="text-lg font-bold">My Profile</Text>
                            </View>

                            <View className="flex-row gap-2 items-center justify-center">
                                <TouchableOpacity className="bg-white w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="cart" color={"black"} size={18} />
                                </TouchableOpacity>
                                <Text className="text-lg font-bold">My Cart</Text>
                            </View>


                            <View className="flex-row gap-2 items-center justify-center">
                                <TouchableOpacity className="bg-white w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="time" color={"black"} size={18} />
                                </TouchableOpacity>
                                <Text className="text-lg font-bold">Time</Text>
                            </View>

                            <View className="flex-row gap-2 items-center justify-center">
                                <TouchableOpacity className="bg-white w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="time" color={"black"} size={18} />
                                </TouchableOpacity>
                                <Text className="text-lg font-bold">Support & Help</Text>
                            </View>

                            <View className="flex-row gap-2 items-center justify-center">
                                <TouchableOpacity className="bg-white w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="time" color={"black"} size={18} />
                                </TouchableOpacity>
                                <Text className="text-lg font-bold">Privacy Policy</Text>
                            </View>

                            <View className="flex-row gap-2 items-center justify-center">
                                <TouchableOpacity className="bg-white w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="time" color={"black"} size={18} />
                                </TouchableOpacity>
                                <Text className="text-lg font-bold">Terms of Use</Text>
                            </View>

                            <View className="flex-row gap-2 items-center justify-center">
                                <TouchableOpacity className="bg-white w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="time" color={"black"} size={18} />
                                </TouchableOpacity>
                                <Text className="text-lg font-bold">Logout</Text>
                            </View>

                            <Text className="text-base font-medium">App Version 1.0</Text>
                        </View>

                        <ImageBackground source={require('../assets/images/screen.jpeg')} className='h-[550px] w-[300px] rotate-12 absolute ml-60 rounded-3xl border-[10px] border-[#94782b] '></ImageBackground>
                    </View>
                    <View className='absolute bottom-0 border border-white rounded-t-3xl'>
                        <LowerNavigator />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default UserProfile;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 25 : 20,
        paddingBottom: 50,
    },

    scroll: {
        paddingHorizontal: 0,
        paddingVertical: 0,
        width: "auto",
    }
});