import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ImageBackground, ScrollView, TextInput } from 'react-native';
import HomeHeader from '@/components/HomeHeader';
import { useRouter } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import CategoryCard from '@/components/CategoryCard';
import NearByOffer from '@/components/NearByOffer';
import FeaturedRestaurant from '@/components/FeaturedRestaurant';
import FoodCategory from '@/components/FoodCategory';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View className="flex-1 items-center justify-center w-screen bg-slate-50 gap-8 pb-10">
          <View className='absolute bg-[#FFBB00] h-[350px] mt-[-120px] w-[600px] rounded-[50%] top-0'>
          </View>

          <View className='flex-col w-full gap-6 mt-20'>
            <View className='flex-1 px-6  w-full items-center justify-between flex-row gap-3'>
              <View className='flex-1 flex-row'>
                <TextInput placeholder='Find food or restaurant' className="shadow-xl flex-1 w-full bg-white p-4 rounded-l-xl">
                </TextInput>
                <TouchableOpacity className="flex-1 max-w-14 bg-[#87BC3E] items-center justify-center rounded-r-xl">
                  <Ionicons name="search" color="white" size={24} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity className='shadow-xl bg-white p-3 rounded-xl items-center justify-center'>
                <Ionicons name="heart" color="#FFBB00" size={26} />
              </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} className='w-full'>
              <ImageBackground source={require('../assets/images/fastfood-bg.jpg')} className="w-64 h-32 mx-6 rounded-xl overflow-hidden" />
              <ImageBackground source={require('../assets/images/food-bg1.jpg')} className="w-64 h-32 mr-6 rounded-xl overflow-hidden" />
            </ScrollView>

            <View className='w-full flex-col gap-4'>
              <Text className='px-6 font-bold text-xl'>
                Categories
              </Text>

              <ScrollView horizontal={true} className='flex-row gap-4 ml-6 box-border'>
                <FoodCategory image={require('../assets/images/fastfood-3d.webp')} name='Fast Food' bgColor='#FFBB00' />
                <FoodCategory image={require('../assets/images/lunch-3d.webp')} name='Lunch' bgColor='#87BC3E' />
                <FoodCategory image={require('../assets/images/dinner-3d.webp')} name='Dinner' bgColor='#d97706' />
                <FoodCategory image={require('../assets/images/meat-3d.webp')} name='Meat' bgColor='#0f766e' />
              </ScrollView>
            </View>

            <View className='w-full flex-col gap-4'>
              <View className='nearbyoffer-section gap-3'>
                <Text className='text-xl font-bold px-6'>
                  Near By Offer
                </Text>
                <ScrollView className='ml-6' horizontal={true}>
                  <NearByOffer image={require('../assets/images/food-bg1.jpg')} percentage={30} name='Restaurant 1' />
                  <NearByOffer image={require('../assets/images/restaurant2.jpg')} percentage={30} name='Restaurant 2' />
                  <NearByOffer image={require('../assets/images/restaurant3.jpeg')} percentage={30} name='Restaurant 3' />
                </ScrollView>
              </View>
            </View>

            <View className='w-full flex-col gap-4'>
              <View className='nearbyoffer-section gap-3'>
                <Text className='text-xl font-bold px-6'>
                  Featured Restaurants
                </Text>
                <ScrollView className='ml-6' horizontal={true}>
                  <FeaturedRestaurant image={require('../assets/images/food-bg1.jpg')} btnColor="#FFBB00" name='Restaurant 1' />
                  <FeaturedRestaurant image={require('../assets/images/restaurant2.jpg')} btnColor="#FFBB00" name='Restaurant 2' />
                  <FeaturedRestaurant image={require('../assets/images/restaurant3.jpeg')} btnColor="#FFBB00" name='Restaurant 3' />
                </ScrollView>
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
