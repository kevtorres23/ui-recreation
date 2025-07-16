import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import NearByOffer from '@/components/NearByOffer';
import DishCard from '@/components/DishCard';
import Ionicons from '@react-native-vector-icons/ionicons';
import ConferenceCard from '@/components/ConferenceCard';

function FastFood() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center w-screen bg-gray-50 gap-8 pb-10">
                    <ImageBackground className='w-full h-64 rounded-b-3xl overflow-hidden' resizeMode='cover' source={require('../assets/images/conference.jpg')}></ImageBackground>

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
                                All Conference
                            </Text>
                            <View className='flex-col gap-4'>
                                <ConferenceCard image={require('../assets/images/restaurant4.webp')} name='Happy Party Center' desc='A beautiful place to eat.' score={4.5} locations="Location 1 | Location 2" />
                                <ConferenceCard image={require('../assets/images/restaurant5.jpg')} name='Shadhin Conference' desc='A beautiful place to eat.' score={4.5} locations="Location 1 | Location 2" />
                                <ConferenceCard image={require('../assets/images/restaurant6.jpg')} name='Community Center' desc='A beautiful place to eat.' score={4.5} locations="Location 1 | Location 2" />
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