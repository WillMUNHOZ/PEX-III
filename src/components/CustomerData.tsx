import { Box, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import type { ICustomerData } from "../interfaces/interfaces";

export interface IOnChange {
    onChange: (data: ICustomerData) => void;
}

export default function CustomerData({ onChange }: IOnChange) {
    const { register, control } = useForm<ICustomerData>({
        defaultValues: {
            name: "",
            cpfCnpj: "",
            address: "",
            number: "",
            neighborhood: "",
            cep: "",
            city: "",
            state: "",
            phone: "",
            email: "",
            website: ""
        }
    });

    const data = useWatch({ control });

    useEffect(() => {
        onChange(data);
    }, [data])

    return (
        <Box mb={"6"} p={"4"} style={{ border: "1px solid #c2c2c2", borderRadius: "5px" }}>
            <Heading as="h3" size={"5"} mb={"5"}>Dados do cliente</Heading>
            <Flex gap={"4"} direction={"column"} width={"900px"}>
                <Flex gap={"3"}>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Nome</Text>
                        <TextField.Root
                            type="text"
                            size="3"
                            placeholder="Nome"
                            {...register("name")}
                        />
                    </Box>
                    <Box width={"50%"}>
                        <Text ml={"2"} as="label" size={"2"}>CPF / CNPJ</Text>
                        <TextField.Root
                            type="number"
                            size="3"
                            placeholder="CPF / CNPJ"
                            {...register("cpfCnpj")}
                        />
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"100% "}>
                        <Text ml={"2"} as="label" size={"2"}>Endereço</Text>
                        <TextField.Root
                            type="text"
                            size="3"
                            placeholder="Endereço completo"
                            {...register("address")}
                        />
                    </Box>
                    <Box maxWidth={"80px"}>
                        <Text ml={"2"} as="label" size={"2"}>Número</Text>
                        <TextField.Root
                            type="number"
                            size="3"
                            placeholder="Número"
                            {...register("number")}
                        />
                    </Box>
                    <Box width={"50%"}>
                        <Text ml={"2"} as="label" size={"2"}>Bairro</Text>
                        <TextField.Root
                            type="text"
                            size="3"
                            placeholder="Bairro"
                            {...register("neighborhood")}
                        />
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"50%"}>
                        <Text ml={"2"} as="label" size={"2"}>CEP</Text>
                        <TextField.Root
                            type="number"
                            size="3"
                            placeholder="CEP"
                            {...register("cep")}
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Cidade</Text>
                        <TextField.Root
                            type="text"
                            size="3"
                            placeholder="Cidade"
                            {...register("city")}
                        />
                    </Box>
                    <Box maxWidth={"6%"}>
                        <Text ml={"2"} as="label" size={"2"}>UF</Text>
                        <TextField.Root
                            type="text"
                            size="3"
                            maxLength={2}
                            {...register("state")}
                        />
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"60%"}>
                        <Text ml={"2"} as="label" size={"2"}>Telefone</Text>
                        <TextField.Root
                            type="number"
                            size="3"
                            placeholder="Telefone"
                            {...register("phone")}
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>E-Mail</Text>
                        <TextField.Root
                            type="email"
                            size="3"
                            placeholder="E-Mail"
                            {...register("email")}

                        />
                    </Box>
                    {/* <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Site</Text>
                        <TextField.Root
                            type="text"
                            size="3"
                            placeholder="Site"
                            {...register("website")}

                        />
                    </Box> */}
                </Flex>
            </Flex>
        </Box>
    )
}