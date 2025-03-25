import { Pressable, Text, TouchableOpacity, View, Image, TextBase } from "react-native";
import { styles } from "/home/time/tutorialApp/styles/auth.styles";
import { Link } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const {signOut} = useAuth();

  
  return (
    <View style={styles.container}>
      {/*HEADER*/}
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Spotlight</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Ionicons name="log-out-outline" size = {24} color={COLORS.white}/>
      </TouchableOpacity>
    </View>


      </View>
  );
}