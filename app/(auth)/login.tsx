import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "@/styles/auth.styles";
import { COLORS } from "@/constants/themes"; 
import { useSSO } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';


export default function login() {

  const { startSSOFlow } = useSSO();
  const router = useRouter();


const handleGoogleSignIn = async () => {

  try {
    const { createdSessionId, setActive} = await startSSOFlow({ strategy: "oauth_google"});

    if (setActive && createdSessionId) {
      setActive({ session: createdSessionId });
      router.replace("/(tabs)");
    }
  } catch (error) {
    console.error("OAuth error:",error);
  }
};

  return (
    <View style = {styles.container}>
        
        {/*Brand Section*/}
        <View style={styles.brandSection}>
            <View style ={styles.logoContainer}>
                <Ionicons name="infinite-outline" size={32} color={COLORS.red} />
            </View>
            <Text style = {styles.rowdyText}>The map says were fucked</Text>
            <Text style = {styles.rowdyText}></Text>
        </View>

      {/*ILLUSTRATION*/}
      <View style ={styles.illustrationContainer}>
        <Image
          source={require("../../assets/images/auth-bg-1.png")}
          style={styles.illustration}
          resizeMode="contain"
          />

      </View>

    {/*LOGIN SCREEN*/}
    <View style ={styles.loginSection}>
    <TouchableOpacity
    style = {styles.googleButton}
    onPress={handleGoogleSignIn}
    activeOpacity={0.9}
    >
        <View style = {styles.googleIconContainer}>
          <Ionicons name="logo-google" size={20} color = {COLORS.surface}/>
        </View>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>

    <Text style ={styles.termsText}>
      By continuing, you agree to our Terms and Privacy Policy
    </Text>
    </View>

    </View>
  );
}