import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import CategoryCard from '@/components/CategoryCard';
import LastTimeCard from '@/components/LastTimeCard';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View className="flex-1 items-center justify-center w-screen bg-slate-50 gap-8 pb-10">
          <View className='absolute bg-[#FFBB00] h-[350px] mt-[-120px] w-[600px] rounded-[50%] top-0'>
          </View>

          <HomeHeader />

          <View className='w-full items-center justify-between flex-row px-6'>
            <View className='items-start'>
              <Text className='font-normal text-2xl'>
                Hi Shadin!
              </Text>
              <Text className='font-bold text-2xl'>
                Hungry? Order & Eat.
              </Text>
            </View>

            <TouchableOpacity className='bg-white w-12 h-12 rounded-[50%] items-center justify-center'>
              <Ionicons name="search-outline" color="black" size={26} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} className='w-full px-6'>
            <View className="w-64 h-32 mr-4 rounded-xl overflow-hidden items-center justify-center bg-[#87BC3E]">
              <Image source={require('../assets/images/burger.webp')} className='max-w-[100px] max-h-[100px]' />
            </View>
            <View className="w-64 h-32 mr-10 rounded-xl overflow-hidden bg-[#CB8F48]"></View>
          </ScrollView>

          <View className='w-full flex-col gap-3'>
            <View className='px-6 gap-1'>
              <Text className='font-bold text-xl'>
                Main Categories
              </Text>

              <Text className='font-medium text-slate-600 text-base'>
                Food delivery services in over the world.
              </Text>
            </View>

            <ScrollView horizontal={true} className='flex-row gap-4 ml-6 box-border'>
              <CategoryCard image={require('../assets/images/restaurant-3d.webp')} name='Restaurant' btnColor='#FFBB00' />
              <CategoryCard image={require('../assets/images/cooking-3d.webp')} name='Hand Made' btnColor='#87BC3E' />
              <CategoryCard image={require('../assets/images/dry-food-3d.webp')} name='Dry Food' btnColor='#87BC3E'/>
            </ScrollView>
          </View>

          <View className='w-full flex-col gap-4'>
            <Text className='font-bold text-xl px-6'>
              Last Time Visited
            </Text>

            <ScrollView horizontal={true} className='px-6'>
              <LastTimeCard image={require('../assets/images/pizza1.webp')} placeName='Pizza King' desc='A good place to eat pizza.' score={4.8} bgColor='#87BC3E'/>
              <LastTimeCard image={require('../assets/images/pizza1.webp')} placeName='Pizza King' desc='A good place to eat pizza.' score={4.8} bgColor='#FFBB00'/>
            </ScrollView>
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
