import { Pressable, Text, TouchableOpacity, View, Image, TextBase } from "react-native";
import { styles } from "/home/time/tutorialApp/styles/auth.styles";
import { Link } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function Index() {
  const {signOut} = useAuth();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()}>
      <Text style={{color:"white:"}}>Signout</Text>
      </TouchableOpacity>
      <Text>Hello World!</Text>
      </View>
  );
}