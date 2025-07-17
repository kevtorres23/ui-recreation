import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import DishCard from '@/components/DishCard';

function SuccessfulOrder() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 w-screen flex-col bg-white gap-8 pb-10 px-6 items-center justify-center">
                    <Image source={require('../assets/images/delivery-3d.png')} className='w-80 h-80' />

                    <View className='items-center justify-center gap-1'>
                        <Text className='text-2xl font-bold text-slate-900'>Order Sent Successfully!</Text>
                        <Text className='text-lg font-medium text-slate-500 text-center'>Your payment was successful! Just wait for the food to arrive home.</Text>
                    </View>

                    <View className='w-full flex-col gap-6'>
                        <TouchableOpacity onPress={() => router.navigate('/checkout')} className='rounded-xl w-full bg-[#FFBB00] py-4 items-center justify-center'>
                            <Text className='text-lg font-bold'>
                                Track Order
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('/home')} className='rounded-xl w-full border-2 border-[#FFBB00] py-4 items-center justify-center'>
                            <Text className='text-lg font-bold'>
                                Back to Home
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SuccessfulOrder;

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