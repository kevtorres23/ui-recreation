import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import NearByOffer from '@/components/NearByOffer';
import DishCard from '@/components/DishCard';
import Ionicons from '@react-native-vector-icons/ionicons';
import ConferenceCard from '@/components/ConferenceCard';

function ConfirmReservation() {
    const router = useRouter();
    const [dateBtn, setDateBtn] = useState("today");
    const [timeBtn, setTimeBtn] = useState("now");
    const [suitableBtn, setSuitableBtn] = useState("lovers");
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
                <View className="flex-1 items-center justify-center w-screen bg-gray-50 pb-10">
                    <ImageBackground className='w-full h-64 overflow-hidden' resizeMode='cover' source={require('../assets/images/restaurant6.jpg')}></ImageBackground>

                    <View className="content gap-8 flex-col w-full rounded-t-full py-6">
                        <View className='nearbyoffer-section gap-3 px-6'>
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
                        </View>

                        <View className='gap-3'>
                            <Text className='text-xl font-bold px-6'>
                                Date
                            </Text>
                            <ScrollView horizontal={true} className='flex-row ml-6'>
                                <TouchableOpacity onPress={() => setDateBtn("today")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={dateBtn === "today" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={dateBtn === "today" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        Today
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setDateBtn("tomorrow")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={dateBtn === "tomorrow" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={dateBtn === "tomorrow" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        Tomorrow
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setDateBtn("saturday")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={dateBtn === "saturday" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={dateBtn === "saturday" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        Saturday 18
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setDateBtn("sunday")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={dateBtn === "sunday" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={dateBtn === "sunday" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        Sunday 19
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View className='gap-3'>
                            <Text className='text-xl font-bold px-6'>
                                Time
                            </Text>
                            <ScrollView horizontal={true} className='flex-row ml-6'>
                                <TouchableOpacity onPress={() => setTimeBtn("now")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={timeBtn === "now" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={timeBtn === "now" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        Now
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTimeBtn("setTime")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={timeBtn === "setTime" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={timeBtn === "setTime" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        Set time
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTimeBtn("nine-thirty")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={timeBtn === "nine-thirty" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={timeBtn === "nine-thirty" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        09:30
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setTimeBtn("ten-thirty")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={timeBtn === "ten-thirty" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={timeBtn === "ten-thirty" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        10:30
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View className='gap-3'>
                            <Text className='text-xl font-bold px-6'>
                                Number of people
                            </Text>
                            <View className='flex-row gap-2 items-center justify-center px-6'>
                                <View>
                                    <Text className='text-base font-bold text-slate-700'>Select the number:</Text>
                                </View>
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
                            </View>
                        </View>

                        <View className='gap-3'>
                            <Text className='text-xl font-bold px-6'>
                                Suitable for
                            </Text>
                            <ScrollView horizontal={true} className='flex-row ml-6'>
                                <TouchableOpacity onPress={() => setSuitableBtn("business")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={suitableBtn === "business" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={suitableBtn === "business" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        Business
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSuitableBtn("lovers")} className='py-3 w-32 rounded-full self-start items-center justify-center mr-3' style={suitableBtn === "lovers" ? { backgroundColor: "#FFBB00" } : { backgroundColor: "white", borderWidth: 1, borderColor: "#FFBB00" }}>
                                    <Text className='text-black text-sm' style={suitableBtn === "lovers" ? { fontWeight: "bold" } : { fontWeight: "semibold" }}>
                                        Lovers
                                    </Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <View className='px-6 mt-4'>
                            <TouchableOpacity className='rounded-xl w-full bg-[#FFBB00] py-4 items-center justify-center'>
                                <Text className='text-lg font-bold'>
                                    Book Reservation
                                </Text>
                            </TouchableOpacity>
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

export default ConfirmReservation;