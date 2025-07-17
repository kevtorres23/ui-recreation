import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import DishCard from '@/components/DishCard';

function Checkout() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 w-screen bg-white gap-8 pb-10 px-6">
                    <View className='flex-col gap-2'>
                        <Text className='text-xl font-bold'>
                            Estimated Delivery
                        </Text>
                        <View className='flex-row gap-2 w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white'>
                            <Image source={require('../assets/images/delivery-man.webp')} className="w-full max-w-28 h-full rounded-l-xl mr-4" />
                            <View className='gap-2'>
                                <Text className='font-medium text-slate-600'>
                                    Estimated Delivery
                                </Text>
                                <Text className='font-bold text-xl'>
                                    ASAP (35 mins)
                                </Text>
                                <Text className='font-medium text-red-500'>
                                    Change
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className='flex-col gap-2'>
                        <Text className='text-xl font-bold'>
                            Delivery to
                        </Text>

                        <View className='flex-row gap-2 w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white'>
                            <View className='gap-2'>
                                <View className='flex-row gap-1 items-center'>
                                    <Ionicons name="checkmark-circle" color="green" size={21} />
                                    <Text className='font-medium text-slate-900 text-lg'>
                                        Home
                                    </Text>
                                </View>
                                <Text className='font-medium text-slate-500'>
                                    Calle La Soldadita #122, Fraccionamiento Valle del Mezquital 1
                                </Text>
                            </View>
                        </View>

                        <View className='flex-row gap-2 w-full px-4 py-4 rounded-2xl border border-gray-200 bg-white'>
                            <View className='gap-2'>
                                <View className='flex-row gap-1 items-center'>
                                    <Ionicons name="arrow-redo" color="#FFBB00" size={21} />
                                    <Text className='font-medium text-slate-900 text-lg'>
                                        Add directions
                                    </Text>
                                </View>
                                <Text className='font-medium text-slate-500'>
                                    Calle La Soldadita #122, Fraccionamiento Valle del Mezquital 1
                                </Text>
                            </View>
                        </View>
                    </View>

                    <DishCard image={require('../assets/images/beefburger.jpg')} name='Beef Burger' time={30} price={39} />

                    <View className='w-full h-0.5 bg-gray-200'></View>

                    <View className='w-full flex-col gap-1'>
                        <View className='w-full flex-row justify-between items-center'>
                            <Text className='font-bold text-lg'>
                                Subtotal
                            </Text>
                            <Text className='font-bold text-lg'>
                                $24
                            </Text>
                        </View>

                        <View className='w-full flex-row justify-between items-center'>
                            <Text className='font-bold text-base text-slate-600'>
                                Discount
                            </Text>
                            <View className='px-3 py-0.5 bg-[#FFBB00] rounded-full'>
                                <Text className='font-medium text-lg'>
                                    -10%
                                </Text>
                            </View>
                        </View>

                        <View className='w-full flex-row justify-between items-center'>
                            <Text className='font-bold text-base text-slate-600'>
                                Delivery Time
                            </Text>
                            <Text className='font-medium text-lg'>
                                -10%
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => router.navigate('/checkout')} className='rounded-xl w-full bg-transparent border-2 border-dashed border-[#87BC3E] py-4 flex-row gap-2 items-center justify-center'>
                        <Ionicons name="add-circle" color="#87BC3E" size={21} />
                        <Text className='text-lg font-bold text-[#87BC3E]'>
                            Add a ticket here
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.navigate('/order_successful')} className='rounded-xl w-full bg-[#FFBB00] py-4 items-center justify-center'>
                        <Text className='text-lg font-bold'>
                            Place Order
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Checkout;

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