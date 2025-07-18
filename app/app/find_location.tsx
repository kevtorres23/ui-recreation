import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, StyleSheet, Platform, TextInput, Image } from "react-native";
import { useRouter } from 'expo-router';
import Ionicons from "@react-native-vector-icons/ionicons";
import LowerNavigator from "@/components/LowerNavigator";

function FindLocation() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center bg-gray-50 pb-10">
                    <ImageBackground className="h-[400px] w-full items-center px-6 py-16 gap-4" source={require('../assets/images/gps-map.jpg')}>
                        <View className='flex-row'>
                            <TextInput placeholder='Find food or restaurant' className="shadow-xl flex-1 w-full bg-white p-4 rounded-l-xl">
                            </TextInput>
                            <TouchableOpacity onPress={() => router.navigate('/find_location')} className="flex-1 max-w-14 bg-[#87BC3E] items-center justify-center rounded-r-xl">
                                <Ionicons name="search" color="white" size={24} />
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} className='mr-6 w-full'>
                            <TouchableOpacity className='h-16 items-center rounded-xl mr-4 justify-center w-16 bg-[#FFBB00]'>
                                <Image source={require('../assets/images/coke.png')} className='w-14 h-14' />
                            </TouchableOpacity>
                            <TouchableOpacity className='h-16 items-center rounded-xl mr-4 justify-center w-16 bg-[#87BC3E]'>
                                <Image source={require('../assets/images/fries.png')} className='w-14 h-14' />
                            </TouchableOpacity>
                            <TouchableOpacity className='h-16 items-center rounded-xl mr-4 justify-center w-16 bg-[#FFBB00]'>
                                <Image source={require('../assets/images/onion-dip.png')} className='w-14 h-14' />
                            </TouchableOpacity>
                            <TouchableOpacity className='h-16 items-center rounded-xl mr-4 justify-center w-16 bg-orange-600'>
                                <Image source={require('../assets/images/fries.png')} className='w-14 h-14' />
                            </TouchableOpacity>
                        </ScrollView>
                    </ImageBackground>
                    <View className="rounded-t-xl bg-white w-full px-6 py-6 gap-6">
                        <View className="flex-row justify-between items-center">
                            <View className="flex-row gap-4 items-center justify-center">
                                <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-14 h-14 rounded-[50%] overflow-hidden"></ImageBackground>
                                <View className="flex-col gap-0">
                                    <Text className="text-2xl font-bold">Hungry Puppets</Text>
                                    <View className="flex-row gap-1 items-center">
                                        <Ionicons name="star" color={"#FFBB00"} size={12} />
                                        <Text className="text-sm font-medium text-slate-600">An amazing restaurant. | New York</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity className="bg-[#FFBB00] w-10 h-10 items-center justify-center rounded-[50%]">
                                <Ionicons name="star" color={"white"} size={18} />
                            </TouchableOpacity>
                        </View>

                        <View className="flex-row gap-6 items-center">
                            <View className="flex-row gap-2 items-center justify-center">
                                <TouchableOpacity className="bg-[#87BC3E] w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="fast-food" color={"white"} size={18} />
                                </TouchableOpacity>
                                <Text className="text-lg font-bold">Free Delivery</Text>
                            </View>

                            <View className="flex-row gap-2 items-center justify-center">
                                <TouchableOpacity className="bg-orange-600 w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="time" color={"white"} size={18} />
                                </TouchableOpacity>
                                <Text className="text-lg font-bold">10 - 15 mins</Text>
                            </View>
                        </View>

                        <View className="flex-row justify-between items-center">
                            <View className="flex-row gap-4">
                                <TouchableOpacity className="bg-[#FFBB00] w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="star" color={"white"} size={18} />
                                </TouchableOpacity>
                                <View className="flex-col gap-1">
                                    <Text className="text-lg font-bold">4.9 out of 5</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <LowerNavigator />
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
        paddingBottom: 0,
    },

    scroll: {
        paddingHorizontal: 0,
        paddingBottom: 0,
        width: "auto",
    }
});

export default FindLocation;