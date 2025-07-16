import { View, Text, Image, ImageBackground } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

function HomeHeader() {
    return (
        <View className="w-full items-center justify-between flex-row px-6">
            <View className="w-20">
                <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-12 h-12 rounded-[50%] overflow-hidden"></ImageBackground>
            </View>

            <View className='flex-row gap-1 items-center'>
                <Ionicons name="location" color="black" size={25} />
                <Text className='text-black font-semibold'>California, US.</Text>
            </View>

            <View className='flex-row gap-2'>
                <Ionicons name="notifications" color="black" size={25} />
                <Ionicons name="cart" color="black" size={25} />
            </View>
        </View>
    )
}

export default HomeHeader;