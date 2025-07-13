import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';

function FastFood() {
    const router = useRouter();
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center w-screen bg-slate-50 gap-8 pb-10">
                    <ImageBackground className='w-full h-56' source={require('../assets/images/fastfood-bg.jpg')}></ImageBackground>

                    <View className="content gap-8 flex-col w-full px-8">
                        <View className='fastfood-section gap-3'>
                            <Text className='text-xl font-bold'>
                                Near By Offer
                            </Text>
                            <View>
                                <Text>
                                    Placeholder content.
                                </Text>
                            </View>
                        </View>

                        <View className='fastfood-section gap-3'>
                            <Text className='text-xl font-bold'>
                                Fast Food
                            </Text>
                            <View>
                                <Text>
                                    Placeholder content.
                                </Text>
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
        paddingTop: Platform.OS === "android" ? 25 : 20,
        paddingBottom: 50,
    },

    scroll: {
        paddingHorizontal: 0,
        paddingVertical: 20,
        width: "auto",
    }
});

export default FastFood;