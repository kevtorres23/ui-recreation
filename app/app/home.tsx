import { Platform, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View className="bg-white h-full items-center flex-col gap-24">
        <Text>
          Home
        </Text>
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
