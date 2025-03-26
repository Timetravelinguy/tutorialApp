import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from "@/components/InitialLayout";
import ClerkandConvexProvider from "@/providers/ClerkandConvexProvider";
import { SplashScreen } from "expo-router";
import {useFonts} from "expo-font"
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
const [fontsLoaded] = useFonts({
  "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf")
})

const onLayoutRootView = useCallback(async()=>{
  if(fontsLoaded) SplashScreen.hideAsync()
},[fontsLoaded]);



  return( 
    <ClerkandConvexProvider>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor: "#000  "}} onLayout={onLayoutRootView}>
        <InitialLayout/>
     </SafeAreaView>
  </SafeAreaProvider>
  </ClerkandConvexProvider>

  );
} 

