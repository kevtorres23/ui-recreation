import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';

function Categories() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className='w-full items-center justify-center gap-10'>
                    <Text className='text-2xl text-center font-bold px-16'>
                        What do you want your food to be like?
                    </Text>

                    <View className='w-full flex-1 gap-6'>
                        <View className='flex-1 flex-row gap-4 justify-between px-6'>
                            <ImageBackground source={require('../assets/images/fastfood-bg.jpg')} className='flex-1 h-40 rounded-xl overflow-hidden'>
                                <View className='px-4 py-4 flex-row justify-between h-full items-end' style={{ backgroundColor: "rgba(0,0,0, 0.1)" }}>
                                    <Text className='text-white font-bold text-lg'>Fast Food</Text>
                                    <View className='w-8 h-8 bg-[#87BC3E] items-center justify-center rounded-[50%]'>
                                        <Ionicons name='checkmark-circle' color={"white"} size={20}></Ionicons>
                                    </View>
                                </View>
                            </ImageBackground>

                            <ImageBackground source={require('../assets/images/dish1.jpg')} className='flex-1 h-40 rounded-xl overflow-hidden'>
                                <View className='px-4 py-4 items-end flex-row justify-between h-full' style={{ backgroundColor: "rgba(0,0,0, 0.25)" }}>
                                    <Text className='text-white font-bold text-lg'>Home-Made</Text>
                                    <View className='w-8 h-8 bg-[#87BC3E] items-center justify-center rounded-[50%]'>
                                        <Ionicons name='checkmark-circle' color={"white"} size={20}></Ionicons>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View className='flex-1 flex-row gap-4 justify-between px-6'>
                            <ImageBackground source={require('../assets/images/pasta.jpg')} className='flex-1 h-40 rounded-xl overflow-hidden'>
                                <View className='px-4 py-4 flex-row justify-between h-full items-end' style={{ backgroundColor: "rgba(0,0,0, 0.1)" }}>
                                    <Text className='text-white font-bold text-lg'>Pasta</Text>
                                    <View className='w-8 h-8 bg-[#87BC3E] items-center justify-center rounded-[50%]'>
                                        <Ionicons name='checkmark-circle' color={"white"} size={20}></Ionicons>
                                    </View>
                                </View>
                            </ImageBackground>

                            <ImageBackground source={require('../assets/images/italian.webp')} className='flex-1 h-40 rounded-xl overflow-hidden'>
                                <View className='px-4 py-4 items-end flex-row justify-between h-full' style={{ backgroundColor: "rgba(0,0,0, 0.1)" }}>
                                    <Text className='text-white font-bold text-lg'>Italian</Text>
                                    <View className='w-8 h-8 bg-[#87BC3E] items-center justify-center rounded-[50%]'>
                                        <Ionicons name='checkmark-circle' color={"white"} size={20}></Ionicons>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View className='flex-1 flex-row gap-4 justify-between px-6'>
                            <ImageBackground source={require('../assets/images/vegetables.webp')} className='flex-1 h-40 rounded-xl overflow-hidden'>
                                <View className='px-4 py-4 flex-row justify-between h-full items-end' style={{ backgroundColor: "rgba(0,0,0, 0.2)" }}>
                                    <Text className='text-white font-bold text-lg'>Vegetables</Text>
                                    <View className='w-8 h-8 bg-[#87BC3E] items-center justify-center rounded-[50%]'>
                                        <Ionicons name='checkmark-circle' color={"white"} size={20}></Ionicons>
                                    </View>
                                </View>
                            </ImageBackground>

                            <ImageBackground source={require('../assets/images/salad.webp')} className='flex-1 h-40 rounded-xl overflow-hidden'>
                                <View className='px-4 py-4 items-end flex-row justify-between h-full' style={{ backgroundColor: "rgba(0,0,0, 0.3)" }}>
                                    <Text className='text-white font-bold text-lg'>Salads</Text>
                                    <View className='w-8 h-8 bg-[#87BC3E] items-center justify-center rounded-[50%]'>
                                        <Ionicons name='checkmark-circle' color={"white"} size={20}></Ionicons>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>

                    <View className='w-full px-4 gap-6'>
                        <TouchableOpacity onPress={() => router.navigate('/home')} className='rounded-xl w-full bg-[#FFBB00] py-4 items-center justify-center'>
                            <Text className='text-lg font-bold'>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Categories;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 25 : 20,
        paddingBottom: 50,
    },

    scroll: {
        paddingHorizontal: 0,
        paddingBottom: 20,
        width: "auto",
    }
});