import { colors } from "@/styles/colors";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { completedTasks, ranking, reward } from '@/json/historic'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

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
                <Text className="text-xl font-boldw text-black_olive">Pontos na {completedTasks.title}</Text>
                <View className="mb-6">
                    <View className="bg-silver gap-[0.5px]">
                        {completedTasks.completedTasks.map((task, i) => {
                            if (i > 2) {
                                return
                            }
                            return (
                                <View key={task.id} className="w-full flex-row items-center justify-between py-6 bg-white">
                                    <View className="">
                                        <Text className="font-medium text-black_olive">{task.title}</Text>
                                        <Text className="text-sm font-thin text-battleship_gray">{dayjs().to(task.date)}</Text>
                                    </View>
                                    <View className="flex-row items-center gap-1">
                                        <Text className="font-medium text-forest_green">{task.points}</Text>
                                        <Feather name="chevron-up" color={colors.forest_green} />
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                    <View className="w-full justify-center items-center mt-3"><Text className="underline font-medium text-base text-silver">Ver todas as tarefas</Text></View>
                </View>
                <Text className="text-xl font-boldw text-black_olive">Rankings Passados</Text>
                <View className="mb-6">
                    <View className="bg-silver gap-[0.5px]">
                        {ranking.map((season, i) => {
                            if (i > 2) {
                                return
                            }
                            const prevRanking = ranking[i + 1]?.position

                            return (
                                <View className="w-full flex-row items-center justify-between py-6 bg-white">
                                    <View className="">
                                        <Text className="font-medium text-black_olive">{season.title}</Text>
                                        <Text className="text-sm font-thin text-battleship_gray">{dayjs(season.initalDate).format('DD/MM/YYYY')} - {dayjs(season.endDate).format('DD/MM/YYYY')}</Text>
                                    </View>
                                    {prevRanking > season.position
                                        ? <View className="flex-row items-center gap-1">
                                            <Text className="font-medium text-forest_green">{season.position}°</Text>
                                            <Feather name="chevron-up" color={colors.forest_green} />
                                        </View>
                                        : <View className="flex-row items-center gap-1">
                                            <Text className="font-medium text-chill_red">{season.position}°</Text>
                                            <Feather name="chevron-down" color={colors.chill_red} />
                                        </View>
                                    }
                                </View>
                            )
                        })}
                    </View>
                    <View className="w-full justify-center items-center"><Text className="underline font-medium text-base text-silver">Ver todos os rankings passados</Text></View>
                </View>
                <Text className="text-xl font-boldw text-black_olive">Recompensas</Text>
                <View className="mb-6">
                    <View className="bg-silver gap-[0.5px]">
                        {reward.map((reward, i) => {
                            if (i > 2) {
                                return
                            }
                            return (
                                <View className="w-full flex-row items-center justify-between py-6 bg-white">
                                    <View className="">
                                        <Text className="font-medium text-black_olive">{reward.title}</Text>
                                        <Text className="text-sm font-thin text-battleship_gray">{
                                            dayjs().to(reward.collectedAt)}</Text>
                                    </View>
                                    <View className="flex-row items-center gap-1">
                                        <Text className="font-medium text-honolulu_blue">{reward.price}</Text>
                                        <FontAwesome6 name="ticket" color={colors.honolulu_blue} />
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                    <View className="w-full justify-center items-center bg-white"><Text className="underline font-medium text-base text-silver">Ver todas as recompensas coletadas</Text></View>
                </View>

            </ScrollView>
        </View>
    )
}