import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground, StyleSheet, Platform } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

function TrackOrder() {
    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.scroll}>
                <View className="flex-1 items-center justify-center w-screen bg-gray-50 pb-10">
                    <ImageBackground className="h-96 w-full" source={require('../assets/images/gps-map.jpg')} />
                    <View className="rounded-t-xl bg-white w-full px-6 py-6">
                        <View className="w-full flex-row">
                            <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-14 h-14 rounded-[50%] overflow-hidden"></ImageBackground>
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

export default TrackOrder;