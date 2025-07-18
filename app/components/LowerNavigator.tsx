import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@react-native-vector-icons/ionicons";

function LowerNavigator() {
    return (
        <View>
            <View className="bg-[#FFBB00] w-screen py-6">
                <View className="flex-row justify-center gap-4">
                    <TouchableOpacity className="w-14 text-col gap-1 items-center justify-center">
                        <Ionicons name="home-outline" size={24} />
                        <Text className="font-medium">Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-14 text-col gap-1 items-center justify-center">
                        <Ionicons name="heart-outline" size={24} />
                        <Text className="font-medium">Saved</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-14 text-col gap-1 items-center justify-center bg-slate-800 rounded-full px-4 py-8">
                        <Ionicons name="heart-outline" size={24} color={"white"} />
                    </TouchableOpacity>

                    <TouchableOpacity className="w-14 text-col gap-1 items-center justify-center">
                        <Ionicons name="location-outline" size={24} />
                        <Text className="font-medium">Places</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-14 text-col gap-1 items-center justify-center">
                        <Ionicons name="person-outline" size={24} />
                        <Text className="font-medium">Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LowerNavigator;