import { Input } from "@/components/input";
import { colors } from "@/styles/colors";
import { FontAwesome6 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Alert, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function PersonalInformation() {

    function handleDeleteAccount() {
        return (
            Alert.alert("Cuidado!", "Você está preste a apagar sua conta, deseja prosseguir?", [
                {
                    text: "Continuar"
                },
                {
                    text: "Cancelar",
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
                <Text className="text-xl text-black_olive font-boldw">Informações Pessoais</Text>
                <FontAwesome6 name="check" size={18} color={colors.black_olive} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity activeOpacity={0.7} >
                    <Image source={{ uri: 'https://github.com/LeonardoSimpldesu.png' }} className="w-32 h-32 rounded-full mx-auto" />
                </TouchableOpacity>
                <View className="mt-8 gap-6">
                    <View className="gap-2 ">
                        <Text className="text-lg font-medium">Nome</Text>
                        <Input>
                            <Input.Field placeholder="Leonardo" />
                        </Input>
                    </View>
                    <View className="gap-2 ">
                        <Text className="text-lg font-medium">Sobrenome</Text>
                        <Input>
                            <Input.Field placeholder="de Souza Almeida" />
                        </Input>
                    </View>
                    <View className="gap-2 ">
                        <Text className="text-lg font-medium">E-mail</Text>
                        <Input>
                            <Input.Field placeholder="leonardodesouzaalmeidas@gmail.com" keyboardType="email-address" />
                        </Input>
                    </View>
                    <View className="gap-2 ">
                        <Text className="text-lg font-medium">Empresa</Text>
                        <Input disable>
                            <Input.Field value="Company Condelivery" editable={false} selectTextOnFocus={false} />
                        </Input>
                    </View>
                    <View className="gap-2 ">
                        <Text className="text-lg font-medium">Departamento</Text>
                        <Input disable>
                            <Input.Field value="Desenvolvimento Digital" editable={false} selectTextOnFocus={false} />
                        </Input>
                    </View>
                </View>
                <View className="w-full mt-8 gap-4">
                    <TouchableOpacity activeOpacity={0.8} className="w-full h-14 bg-honolulu_blue rounded-xl items-center justify-center border-honolulu_blue">
                        <Text className="font-boldw text-lg text-white">Alterar Senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={handleDeleteAccount} className="w-full h-14 bg-white rounded-xl items-center justify-center border border-chill_red">
                        <Text className="font-boldw text-lg text-chill_red">Apagar sua conta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}