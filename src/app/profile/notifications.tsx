import { colors } from "@/styles/colors";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Alert, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function Notifications() {

    function handleSilenceNotifications() {
        return (
            Alert.alert("Silenciar", "Deseja silenciar todas as notificações?", [
                {
                    text: 'Sim'
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ], { cancelable: true })
        )
    }

    return (
        <View className="flex-1 p-8">
            <StatusBar barStyle='dark-content' />
            <View className="w-full flex-row items-center justify-between py-8">
                <Link href='/profile' asChild>
                    <FontAwesome6 name="chevron-left" size={18} color={colors.black_olive} />
                </Link>
                <Text className="text-xl text-black_olive font-boldw">Notificações</Text>
                <FontAwesome6 name="check" size={18} color={colors.white} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} className="w-full">
                <View className="mt-6">
                    <Text className="text-xl font-boldw">Tarefas e Ranking</Text>
                    <View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação há criação de uma nova tarefa</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors.forest_green} name="mail" size={28} />
                                <Feather color={colors.black_olive} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação ao fim de uma tarefa</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors.forest_green} name="mail" size={28} />
                                <Feather color={colors.black_olive} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação ao receber pontos de uma tarefa</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors.black_olive} name="mail" size={28} />
                                <Feather color={colors.forest_green} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação ao atualizar a sua posição no ranking</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors.black_olive} name="mail" size={28} />
                                <Feather color={colors.black_olive} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação sobre as atividades de seus colegas</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors.black_olive} name="mail" size={28} />
                                <Feather color={colors.forest_green} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6">
                            <Text className="w-9/12 text-base font-regular">Receba notificação sobre o seu progresso mensal</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors.black_olive} name="mail" size={28} />
                                <Feather color={colors.forest_green} name="smartphone" size={28} />
                            </View>
                        </View>
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-xl font-boldw">Segurança</Text>
                    <View>
                        <View className="w-full flex-row items-center justify-between py-6 border-b-[0.5px] border-silver">
                            <Text className="w-9/12 text-base font-regular">Receba notificação ao realizar um novo login</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors.forest_green} name="mail" size={28} />
                                <Feather color={colors.black_olive} name="smartphone" size={28} />
                            </View>
                        </View>
                        <View className="w-full flex-row items-center justify-between py-6">
                            <Text className="w-9/12 text-base font-regular">Receba notificação sovre atualizações no seu perfil</Text>
                            <View className="flex-row gap-2">
                                <Feather color={colors.black_olive} name="mail" size={28} />
                                <Feather color={colors.black_olive} name="smartphone" size={28} />
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={handleSilenceNotifications} className="w-full h-14 mt-8 bg-honolulu_blue rounded-xl items-center justify-center border-honolulu_blue">
                    <Text className="font-boldw text-lg text-white">Silenciar Notificações</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}