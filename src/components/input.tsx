import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, TextInputProps, View } from "react-native";

type Props = {
    children: ReactNode,
    disable?: boolean
}


function Input({ children, disable = false }: Props) {
    if (disable) {
        return (
            <View className={"w-full h-14 flex-row items-center gap-3 px-4 rounded-xl bg-timberwolf border-[0.5px] border-ebony "}>
                {children}
            </View>
        )
    }
    return (
        <View className={"w-full h-14 flex-row items-center gap-3 px-4 rounded-xl border-[0.5px] border-battleship_gray"}>
            {children}
        </View>
    )
}

function Field({ ...rest }: TextInputProps) {
    return (
        < TextInput placeholderTextColor={colors.silver} className="flex-1 text-black_olive text-base font-regular" {...rest} />
    )
}

Input.Field = Field

export { Input }