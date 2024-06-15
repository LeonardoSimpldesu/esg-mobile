import '@/styles/global.css'
import { Slot } from 'expo-router'

import { useFonts, WorkSans_700Bold, WorkSans_500Medium, WorkSans_400Regular, WorkSans_300Light } from '@expo-google-fonts/work-sans'
import { Loading } from '@/components/loading'

export default function Layout() {
    const [fontsLoaded] = useFonts({
        WorkSans_700Bold,
        WorkSans_500Medium,
        WorkSans_400Regular,
        WorkSans_300Light
    })

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <Slot />
    )
}