import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import NearByOffer from '@/components/NearByOffer';
import { useState, useEffect } from 'react';
import DishCard from '@/components/DishCard';
import Ionicons from '@react-native-vector-icons/ionicons';

function FastFood() {
    const router = useRouter();
    const [image, setImage] = useState("");

    const getImages = async () => {
        const response = await fetch("https://foodish-api.com/api/");
        const data = await response.json();
        setImage(data.image);
    }

    useEffect(() => {
        getImages();
    }, [])

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center w-screen bg-gray-50 gap-8 pb-10">
                    <ImageBackground className='w-full h-64 rounded-b-3xl overflow-hidden' resizeMode='cover' source={{uri: image}}></ImageBackground>

                    <View className="content gap-8 flex-col w-full">
                        <View className='nearbyoffer-section gap-3'>
                            <Text className='text-xl font-bold px-6'>
                                Near By Offer
                            </Text>
                            <ScrollView className='ml-6' horizontal={true}>
                                <TouchableOpacity onPress={() => router.navigate('/confirm_reservation')}>
                                    <NearByOffer image={require('../assets/images/food-bg1.jpg')} percentage={30} name='Restaurant 1' />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.navigate('/reservation')}>
                                    <NearByOffer image={require('../assets/images/restaurant2.jpg')} percentage={30} name='Restaurant 2' />
                                </TouchableOpacity>
                                <NearByOffer image={require('../assets/images/restaurant3.jpeg')} percentage={30} name='Restaurant 3' />
                            </ScrollView>
                        </View>

                        <View className='fastfood-section gap-3 px-6'>
                            <Text className='text-xl font-bold'>
                                Fast Food
                            </Text>
                            <View className='flex-col gap-4'>
                                <DishCard image={require('../assets/images/dish1.jpg')} name='Tomato Rice' time={30} price={39} />
                                <DishCard image={require('../assets/images/dish2.jpg')} name='Onion Dip' time={30} price={39} />
                                <DishCard image={require('../assets/images/dish3.jpg')} name='Spaghetti' time={30} price={39} />
                            </View>
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

export default FastFood;