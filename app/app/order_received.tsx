import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';

function OrderReceived() {
    const router = useRouter();
    const [suitableBtn, setSuitableBtn] = useState("lovers");
    const [experience, setExperience] = useState("good");


    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 w-screen flex-col bg-white gap-4 pb-10 px-6 items-center justify-center">
                    <Image source={require('../assets/images/burgercombo.png')} className='w-72 h-56' />

                    <View className='items-center justify-center gap-1'>
                        <Text className='text-2xl font-bold text-slate-900'>Jumbo Burger Italien</Text>
                        <Text className='text-lg font-medium text-slate-500 text-center'>Cheezy Mozzarella.</Text>
                    </View>

                    <View className='items-center justify-center gap-1 flex-row'>
                        <Text className='text-2xl font-bold text-slate-900'>Price</Text>
                        <Text className='text-lg font-medium text-slate-500 text-center'>$6.17</Text>
                    </View>

                    <View className='w-full'>
                        <View className='flex-col gap-4'>
                            <TouchableOpacity onPress={() => setSuitableBtn("business")} className='py-4 w-full rounded-xl self-start items-center justify-center mr-3' style={suitableBtn === "business" ? { backgroundColor: "#87BC3E" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#87BC3E" }}>
                                <Text className='text-black text-base font-medium'>
                                    The food was good!
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSuitableBtn("lovers")} className='py-4 w-full rounded-xl self-start items-center justify-center mr-3' style={suitableBtn === "lovers" ? { backgroundColor: "#87BC3E" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#87BC3E" }}>
                                <Text className='text-black text-base font-medium'>
                                    The delivery was on point.
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSuitableBtn("agent")} className='py-4 w-full rounded-xl self-start items-center justify-center mr-3' style={suitableBtn === "agent" ? { backgroundColor: "#87BC3E" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#87BC3E" }}>
                                <Text className='text-black text-base font-medium'>
                                    Agent was very kind.
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className='gap-3 w-full items-center justify-center'>
                        <View className='flex-row gap-4'>
                            <TouchableOpacity onPress={() => setExperience("bad")} className='w-20 h-20 rounded-[50%] self-start items-center justify-center' style={experience === "bad" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "#ECF0F6" }}>
                                <Image source={require('../assets/images/thumbsdown.webp')} className='w-8 h-8'></Image>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setExperience("good")} className='w-20 h-20 rounded-[50%] self-start items-center justify-center' style={experience === "good" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "#ECF0F6" }}>
                                <Image source={require('../assets/images/happy.webp')} className='w-8 h-8'></Image>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setExperience("medium")} className='w-20 h-20 rounded-[50%] self-start items-center justify-center' style={experience === "medium" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "#ECF0F6" }}>
                                <Image source={require('../assets/images/blushed.webp')} className='w-8 h-8'></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className='w-full flex-col gap-6'>
                        <TouchableOpacity onPress={() => router.navigate('/track_order')} className='rounded-xl w-full bg-[#FFBB00] py-4 items-center justify-center'>
                            <Text className='text-lg font-bold'>
                                Sumbit your experience
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default OrderReceived;

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