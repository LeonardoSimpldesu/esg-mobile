import { Alert, Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { colors } from "@/styles/colors";
import { Link } from "expo-router";


export default function Profile() {
    function handleDesconect() {
        return (
            Alert.alert('Desconectar', "Tem certeza que deseja se desconectar?", [
                {
                    text: 'Continuar',
                },
                {
                    text: 'Cancelar',
                    style: 'destructive'
                },
            ], { cancelable: true })
        )
    }
    return (
        <>
            <View className="flex-1 p-8">
                <StatusBar barStyle='dark-content' />
                <View className="w-full flex-row items-center justify-between py-8">
                    <FontAwesome6 name="bars" size={24} color={colors.black_olive} />
                    <Text className="uppercase text-xl text-black_olive font-bold">Perfil</Text>
                    <View className="relative">
                        <FontAwesome6 name="bell" size={24} color={colors.black_olive} />
                        <View className="absolute size-4 bg-chill_red border-2 border-white rounded-full -bottom-1 -right-1" />
                    </View>
                </View>
                <View className="flex-row items-center gap-4 mt-4">
                    <Image source={{ uri: 'https://github.com/LeonardoSimpldesu.png' }} className="w-20 h-20 rounded-full" />
                    <View>
                        <Text className="font-medium text-black_olive text-lg">Leonardo de Souza</Text>
                        <Text className="font-light text-black_olive">Company Condelivery</Text>
                    </View>
                </View>
                <View className="mt-6">
                    <Link href='/profile/personal-information' asChild>
                        <TouchableOpacity activeOpacity={0.7} className="flex-row items-center gap-6 py-6 border-b-[0.5px] border-silver">
                            <Feather name="clipboard" size={24} />
                            <View>
                                <Text className="font-medium text-black_olive text-base">Informações Pessoais</Text>
                                <Text className="font-regular text-black_olive text-sm">Minhas informações pessoais</Text>
                            </View>
                            <Feather name="chevron-right" size={24} className="ml-auto" />
                        </TouchableOpacity>
                    </Link>
                    <Link href='/profile/notifications' asChild>
                        <TouchableOpacity className="flex-row items-center gap-6 py-6 border-b-[0.5px] border-silver">
                            <Feather name="message-square" size={24} />
                            <View>
                                <Text className="font-medium text-black_olive text-base">Notificações</Text>
                                <Text className="font-regular text-black_olive text-sm">Minha central de notificações</Text>
                            </View>
                            <Feather name="chevron-right" size={24} className="ml-auto" />
                        </TouchableOpacity>
                    </Link>
                    <Link href='/profile/historic' asChild>
                        <TouchableOpacity className="flex-row items-center gap-6 py-6">
                            <Feather name="file-text" size={24} />
                            <View>
                                <Text className="font-medium text-black_olive text-base">Histórico</Text>
                                <Text className="font-regular text-black_olive text-sm">Meu histórico de temporadas</Text>
                            </View>
                            <Feather name="chevron-right" size={24} className="ml-auto" />
                        </TouchableOpacity>
                    </Link>
                </View>
                <View className="mt-auto gap-8">
                    <View className="flex-row items-center gap-6">
                        <Feather name="info" size={24} />
                        <Text className="font-medium text-black_olive text-base">Ajuda</Text>
                        <Feather name="chevron-right" size={24} className="ml-auto" />
                    </View>
                    <TouchableOpacity activeOpacity={0.5} onPress={handleDesconect} className="flex-row items-center gap-6">
                        <Feather name="log-out" size={24} color={colors.chill_red} />
                        <Text className="font-medium text-chill_red text-base">Desconectar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-row w-full border-t-[0.5px] border-silver">
                <View className="justify-center items-center flex-1 py-4">
                    <Feather name="home" size={18}></Feather>
                    <Text className="font-medium text-sm">Home</Text>
                </View>
                <View className="justify-center items-center flex-1 py-4">
                    <Feather name="feather" size={18}></Feather>
                    <Text className="font-medium text-sm">Tarefas</Text>
                </View>
                <View className="justify-center items-center flex-1 py-4">
                    <Feather name="award" size={18}></Feather>
                    <Text className="font-medium text-sm">Ranking</Text>
                </View>
                <View className="justify-center items-center flex-1 py-4">
                    <Feather name="user" size={18}></Feather>
                    <Text className="font-medium text-sm">Perfil</Text>
                </View>
            </View>
        </>
    )
}