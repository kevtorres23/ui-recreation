import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import CategoryCard from '@/components/CategoryCard';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View className="flex-1 items-center justify-center w-screen bg-slate-100 px-8 gap-8 pb-10">
          <View className='absolute bg-yellow-500 h-[350px] mt-[-120px] w-[600px] rounded-[50%] top-0'>
          </View>

          <HomeHeader />

          <View className='w-full items-center justify-between flex-row'>
            <View className='items-start'>
              <Text className='font-normal text-2xl'>
                Hi Shadin!
              </Text>
              <Text className='font-bold text-2xl'>
                Hungry? Order & Eat.
              </Text>
            </View>

            <View className='bg-white w-12 h-12 rounded-[50%] items-center justify-center'>
              <Ionicons name="search-outline" color="black" size={26} />
            </View>
          </View>

          <View className='w-full flex-row gap-6 overflow-x-scroll'>
            <View className="w-64 h-32 rounded-xl overflow-hidden bg-green-500"></View>
            <View className="w-64 h-32 rounded-xl overflow-hidden bg-yellow-700"></View>
          </View>

          <View className='w-full flex-col gap-1'>
            <Text className='font-bold text-2xl'>
              Main Categories
            </Text>
            <Text className='font-medium text-slate-600 text-base'>
              Food delivery services in over the world.
            </Text>

            <View className='flex-row gap-4'>
              <CategoryCard image='../assets/images/restaurant-3d.webp' name='Restaurant' btnColor='#eab308' shapeColor='#eab308' />
              <CategoryCard image='../assets/images/restaurant-3d.webp' name='Restaurant' btnColor='#eab308' shapeColor='#eab308' />
              <CategoryCard image='../assets/images/restaurant-3d.webp' name='Restaurant' btnColor='#eab308' shapeColor='#eab308' />
            </View>
          </View>

          <View className='w-full flex-col gap-1'>
            <Text className='font-bold text-2xl'>
              Last Time Visited
            </Text>

            <View className='flex-row gap-4'>
              <CategoryCard image='../assets/images/restaurant-3d.webp' name='Restaurant' btnColor='#eab308' shapeColor='#eab308' />
              <CategoryCard image='../assets/images/restaurant-3d.webp' name='Restaurant' btnColor='#eab308' shapeColor='#eab308' />
              <CategoryCard image='../assets/images/restaurant-3d.webp' name='Restaurant' btnColor='#eab308' shapeColor='#eab308' />
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
