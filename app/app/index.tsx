import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View className="bg-yellow-500 h-full items-center flex-col gap-24">
        <View className='mt-14'>
          <Image source={require('../assets/images/delivery-man.webp')} className="max-w-[300px] max-h-[300px]"></Image>
        </View>

        <View className='absolute bg-white items-center pt-24 w-[700px] h-[600px] mt-[370px] rounded-[50%] gap-3'>
        </View>

        <View className='items-col w-screen items-center justify-center gap-6'>
          <View className='flex-row gap-0.5'>
            <Text className='text-2xl font-bold text-yellow-500'>
              Delivery
            </Text>
            <Text className='text-2xl font-bold text-slate-800'>
              App
            </Text>
          </View>

          <View className='flex-col gap-2'>
            <Text className='font-bold text-3xl max-w-72 text-center'>
              Quick delivery at your home address
            </Text>

            <Text className='max-w-72 text-center text-base font-medium text-gray-600'>
              Our mission is to provide you with the best delivery service.
            </Text>
          </View>

          <TouchableOpacity onPress={() => router.navigate('/home')} className='bg-yellow-500 py-3 px-24 rounded-xl items-center'>
            <Text className='font-bold text-black text-lg'>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 20,
  }
});
