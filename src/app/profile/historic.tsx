import { colors } from "@/styles/colors";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, StatusBar, Text, View } from "react-native";

export default function Historic() {
    return (
        <View className="flex-1 p-8">
            <StatusBar barStyle='dark-content' />
            <View className="w-full flex-row items-center justify-between py-8">
                <Link href='/profile' asChild>
                    <FontAwesome6 name="chevron-left" size={18} color={colors.black_olive} />
                </Link>
                <Text className="text-xl text-black_olive font-boldw">Histótico</Text>
                <FontAwesome6 name="check" size={18} color={colors.white} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className="text-xl font-boldw text-black_olive">Pontos na Temporada de Outono</Text>
                <View className="mb-6">
                    <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                        <View className="">
                            <Text className="font-medium text-black_olive">Cada um no seu quadrado!</Text>
                            <Text className="text-sm font-thin text-battleship_gray">01/05/2024</Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                            <Text className="font-medium text-forest_green">23</Text>
                            <Feather name="chevron-up" color={colors.forest_green} />
                        </View>
                    </View>
                    <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                        <View className="">
                            <Text className="font-medium text-black_olive">Rápido e saudável!</Text>
                            <Text className="text-sm font-thin text-battleship_gray">01/05/2024</Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                            <Text className="font-medium text-forest_green">19</Text>
                            <Feather name="chevron-up" color={colors.forest_green} />
                        </View>
                    </View>
                    <View className="w-full flex-row items-center justify-between py-6">
                        <View className="">
                            <Text className="font-medium text-black_olive">Seu primeiro feijão da temporada</Text>
                            <Text className="text-sm font-thin text-battleship_gray">01/05/2024</Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                            <Text className="font-medium text-forest_green">21</Text>
                            <Feather name="chevron-up" color={colors.forest_green} />
                        </View>
                    </View>
                </View>
                <Text className="text-xl font-boldw text-black_olive">Rankings Passados</Text>
                <View className="mb-6">
                    <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                        <View className="">
                            <Text className="font-medium text-black_olive">Temporada de Verão</Text>
                            <Text className="text-sm font-thin text-battleship_gray">21/12/2023 - 20/03/2024</Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                            <Text className="font-medium text-forest_green">8</Text>
                            <Feather name="chevron-up" color={colors.forest_green} />
                        </View>
                    </View>
                    <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                        <View className="">
                            <Text className="font-medium text-black_olive">Rápido e saudável!</Text>
                            <Text className="text-sm font-thin text-battleship_gray">22/09/2023 - 20/12/2023</Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                            <Text className="font-medium text-chill_red">12</Text>
                            <Feather name="chevron-down" color={colors.chill_red} />
                        </View>
                    </View>
                    <View className="w-full flex-row items-center justify-between py-6">
                        <View className="">
                            <Text className="font-medium text-black_olive">Seu primeiro feijão da temporada</Text>
                            <Text className="text-sm font-thin text-battleship_gray">20/06/2023 - 21/09/2023</Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                            <Text className="font-medium text-forest_green">4</Text>
                            <Feather name="chevron-up" color={colors.forest_green} />
                        </View>
                    </View>
                </View>
                <Text className="text-xl font-boldw text-black_olive">Recompensas</Text>
                <View className="mb-6">
                    <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                        <View className="">
                            <Text className="font-medium text-black_olive">DayOFF!</Text>
                            <Text className="text-sm font-thin text-battleship_gray">22/09/2023</Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                            <Text className="font-medium text-honolulu_blue">12</Text>
                            <FontAwesome6 name="ticket" color={colors.honolulu_blue} />
                        </View>
                    </View>
                    <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                        <View className="">
                            <Text className="font-medium text-black_olive">Garrafa Térmica</Text>
                            <Text className="text-sm font-thin text-battleship_gray">22/09/2023</Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                            <Text className="font-medium text-honolulu_blue">19</Text>
                            <FontAwesome6 name="ticket" color={colors.honolulu_blue} />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}