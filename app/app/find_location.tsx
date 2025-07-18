import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, StyleSheet, Platform } from "react-native";
import { useRouter } from 'expo-router';
import Ionicons from "@react-native-vector-icons/ionicons";

function FindLocation() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center w-screen bg-gray-50 pb-10">
                    <ImageBackground className="h-96 w-full" source={require('../assets/images/gps-map.jpg')} />
                    <View className="rounded-t-xl bg-white w-full px-6 py-6 gap-10">
                        <View className="flex-row justify-between items-center">
                            <View className="flex-row gap-4">
                                <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-14 h-14 rounded-[50%] overflow-hidden"></ImageBackground>
                                <View className="flex-col gap-1">
                                    <Text className="text-lg font-bold">Shadhin Labiu</Text>
                                    <View className="flex-row gap-1 items-center">
                                        <Ionicons name="star" color={"#FFBB00"} size={12} />
                                        <Ionicons name="star" color={"#FFBB00"} size={12} />
                                        <Ionicons name="star" color={"#FFBB00"} size={12} />
                                        <Ionicons name="star" color={"#FFBB00"} size={12} />
                                        <Ionicons name="star" color={"grey"} size={12} />
                                        <Text className="text-sm font-medium text-slate-600">(4.5)</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity className="bg-[#87BC3E] w-10 h-10 items-center justify-center rounded-[50%]">
                                <Ionicons name="call" color={"white"} size={18} />
                            </TouchableOpacity>
                        </View>

                        <View className="flex-row justify-between items-center">
                            <View className="flex-row gap-4">
                                <TouchableOpacity className="bg-[#FFBB00] w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="fast-food" color={"white"} size={18} />
                                </TouchableOpacity>
                                <View className="flex-col gap-1">
                                    <Text className="text-lg font-bold">Hungry Puppets</Text>
                                    <View className="flex-row gap-1 items-center">
                                        <Text className="text-sm font-medium text-slate-600">Restaurant</Text>
                                        <Ionicons name="caret-forward-circle-outline" color={"grey"} size={14} />
                                        <Text className="text-sm font-medium text-slate-600">(4.5)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className="flex-row justify-between items-center">
                            <View className="flex-row gap-4">
                                <TouchableOpacity className="bg-[#87BC3E] w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="fast-food" color={"white"} size={18} />
                                </TouchableOpacity>
                                <View className="flex-col gap-1">
                                    <Text className="text-lg font-bold">On the way</Text>
                                    <View className="flex-row gap-1 items-center">
                                        <Text className="text-sm font-medium text-slate-600">Delivery</Text>
                                        <Ionicons name="caret-forward-circle-outline" color={"grey"} size={14} />
                                        <Text className="text-sm font-medium text-slate-600">(4.5)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className="flex-row justify-between items-center">
                            <View className="flex-row gap-4">
                                <TouchableOpacity className="bg-[#FFBB00] w-10 h-10 items-center justify-center rounded-[50%]">
                                    <Ionicons name="fast-food" color={"white"} size={18} />
                                </TouchableOpacity>
                                <View className="flex-col gap-1">
                                    <Text className="text-lg font-bold">76A Eight Avenue, New York City</Text>
                                    <View className="flex-row gap-1 items-center">
                                        <Text className="text-sm font-medium text-slate-600">Office</Text>
                                        <Ionicons name="caret-forward-circle-outline" color={"grey"} size={14} />
                                        <Text className="text-sm font-medium text-slate-600">(4.5)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => router.navigate('/order_received')} className='rounded-xl w-full bg-[#FFBB00] py-4 items-center justify-center'>
                            <Text className='text-lg font-bold text-white'>
                                Finish Delivery
                            </Text>
                        </TouchableOpacity>
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

export default FindLocation;