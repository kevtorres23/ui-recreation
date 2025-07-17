import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import NearByOffer from '@/components/NearByOffer';
import DishCard from '@/components/DishCard';
import Ionicons from '@react-native-vector-icons/ionicons';
import FoodCategory from '@/components/FoodCategory';
import ConferenceCard from '@/components/ConferenceCard';

function MediumSearch() {
    const router = useRouter();
    const [sortBtn, setSortBtn] = useState("recommended");

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center w-screen bg-gray-50 gap-8 pb-10">
                    <View className='w-full h-36 rounded-b-3xl overflow-hidden bg-yellow-500'></View>

                    <View className="content gap-8 flex-col w-full">
                        <View className='w-full flex-col gap-4'>
                            <Text className='px-6 font-bold text-xl'>
                                Categories
                            </Text>

                            <ScrollView horizontal={true} className='flex-row gap-4 ml-6 box-border'>
                                <FoodCategory image={require('../assets/images/fastfood-3d.webp')} name='Fast Food' bgColor='#FFBB00' />
                                <FoodCategory image={require('../assets/images/lunch-3d.webp')} name='Lunch' bgColor='#87BC3E' />
                                <FoodCategory image={require('../assets/images/dinner-3d.webp')} name='Dinner' bgColor='#d97706' />
                                <FoodCategory image={require('../assets/images/meat-3d.webp')} name='Meat' bgColor='#0f766e' />
                            </ScrollView>
                        </View>

                        <View className='fastfood-section gap-3'>
                            <Text className='text-xl font-bold px-6'>
                                Show by
                            </Text>
                            <ScrollView horizontal={true} className='flex-row ml-6'>
                                <TouchableOpacity onPress={() => setSortBtn("recommended")} className='flex-row py-3 w-36 gap-1 rounded-full self-start items-center justify-center mr-3' style={sortBtn === "recommended" ? { borderWidth: 2, borderColor: "#FFBB00" } : { borderWidth: 1, borderColor: "#c7cdd6" }}>
                                    <Ionicons name="star" color="#FFBB00" size={14} style={sortBtn === "recommended" ? { display: "flex" } : { display: "none" }} />
                                    <Text className='text-black text-sm font-bold'>
                                        Recommended
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSortBtn("free-delivery")} className='flex-row py-3 w-36 gap-1 rounded-full self-start items-center justify-center mr-3' style={sortBtn === "free-delivery" ? { borderWidth: 2, borderColor: "#FFBB00" } : { borderWidth: 1, borderColor: "#c7cdd6" }}>
                                    <Ionicons name="star" color="#FFBB00" size={14} style={sortBtn === "free-delivery" ? { display: "flex" } : { display: "none" }} />
                                    <Text className='text-black text-sm font-semibold'>
                                        Free Delivery
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setSortBtn("discount")} className='flex-row py-3 w-36 gap-1 rounded-full self-start items-center justify-center mr-3' style={sortBtn === "discount" ? { borderWidth: 2, borderColor: "#FFBB00" } : { borderWidth: 1, borderColor: "#c7cdd6" }}>
                                    <Ionicons name="star" color="#FFBB00" size={14} style={sortBtn === "discount" ? { display: "flex" } : { display: "none" }} />
                                    <Text className='text-black text-sm font-semibold'>
                                        30% Discount
                                    </Text>
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
        paddingTop: Platform.OS === "android" ? 30 : 15,
        paddingBottom: 50,
    },

    scroll: {
        paddingHorizontal: 0,
        paddingBottom: 20,
        width: "auto",
    }
});

export default MediumSearch;