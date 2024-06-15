import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function Home(){
    return(
        <View className="flex-1 justify-center items-center">
            <StatusBar barStyle='dark-content'/>
            <Link href='/profile'>
            <Text className="text-3xl font-bold">Hello World!</Text>
            </Link>
        </View>
    )
}