import { View, Text, Image, ImageBackground } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

function HomeHeader() {
    return (
        <View className="w-full items-center justify-between flex-row">
            <ImageBackground source={require('../assets/images/avatar.jpg')} resizeMode="cover" className="w-10 h-10 rounded-[50%] overflow-hidden"></ImageBackground>

            <View className='flex-row gap-1 items-center'>
                <Ionicons name="location" color="black" size={24} />
                <Text className='text-black font-semibold'>California, US.</Text>
            </View>

            <View className='flex-row gap-2'>
                <Ionicons name="notifications-outline" color="black" size={28}/>
                <Ionicons name="cart-outline" color="black" size={28} />
            </View>
        </View>
    )
}

export default HomeHeader;