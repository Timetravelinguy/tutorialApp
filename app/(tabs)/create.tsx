import { View, Text } from 'react-native'
import React from 'react'
import {useRouter} from "expo-router";
import {useUser} from "@clerk/clerk-expo"

export default function CreateScreen() {
  const router = useRouter();
  const {user} = useUser();
const [caption, setCaption] = useState("");
const [selectedImage, setSelectedImage] = useState<string | null>(null);



  return (
    <View>
      <Text>create</Text>
    </View>
  )
}