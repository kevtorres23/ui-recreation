import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import NearByOffer from '@/components/NearByOffer';
import DishCard from '@/components/DishCard';
import Ionicons from '@react-native-vector-icons/ionicons';

function FastFood() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center w-screen bg-gray-50 gap-8 pb-10">
                    <ImageBackground className='w-full h-64 rounded-b-3xl overflow-hidden' resizeMode='cover' source={require('../assets/images/fastfood-bg.jpg')}></ImageBackground>

                    <View className="content gap-8 flex-col w-full">
                        <View className='nearbyoffer-section gap-3'>
                            <Text className='text-xl font-bold px-6'>
                                Near By Offer
                            </Text>
                            <ScrollView className='ml-6' horizontal={true}>
                                <NearByOffer image={require('../assets/images/food-bg1.jpg')} percentage={30} name='Restaurant 1' />
                                <NearByOffer image={require('../assets/images/restaurant2.jpg')} percentage={30} name='Restaurant 2' />
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