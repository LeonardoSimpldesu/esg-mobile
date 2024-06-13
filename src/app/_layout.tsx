import '@/styles/global.css'
import { Slot } from 'expo-router'

// import { useFonts, Inter_700Bold, Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter'
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto'
import { Loading } from '@/components/loading'

export default function Layout() {
    // const [fontsLoaded] = useFonts({
    //     Inter_700Bold,
    //     Inter_500Medium,
    //     Inter_400Regular
    // })
    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_500Medium,
        Roboto_400Regular
    })

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <Slot />
    )
}