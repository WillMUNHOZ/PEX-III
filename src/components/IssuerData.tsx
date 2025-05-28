import { Box, Flex, Heading, Text, TextField, Button, IconButton } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import type { IIssuerData } from "../interfaces/interfaces";
import { Trash2 } from "lucide-react";
import { convertToBase64 } from "./utils/convertLogo";

export interface IOnChange {
    onChange: (data: IIssuerData) => void;
}

export default function IssuerData({ onChange }: IOnChange) {




    const [errType, setErrType] = useState(false);

    const { register, control, setValue, reset } = useForm<IIssuerData>({
        defaultValues: {
            logo: undefined,
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

    useEffect(() => {
        const dataSave = localStorage.getItem("issuerData");
        if (dataSave) {
            const newDataSave = JSON.parse(dataSave) as Partial<IIssuerData>;
            Object.entries(newDataSave).forEach(([key, value]) => {
                setValue(key as keyof IIssuerData, value);
            });
        }
    }, []);

    const data = useWatch({ control });


    useEffect(() => {
        onChange(data);

        if (data.logo && data.logo instanceof FileList && data.logo.length === 1) {
            const allowedTypes = ["image/png", "image/jpeg"];
            setErrType(false);

            if (!allowedTypes.includes(data.logo[0].type)) {
                console.log("tipo errado");
                setErrType(true);
                setValue("logo", undefined);
            }
        }

    }, [data])

    const removeLogo = () => {
        setValue("logo", undefined);
    }

    const handleSaveInputs = async () => {
        const saveData = { ...data };

        if (data.logo) {
            if (typeof data.logo !== "string" && data.logo instanceof FileList && data.logo.length > 0) {
                const base64Logo = await convertToBase64(data.logo[0]);
                saveData.logo = base64Logo as any;
            }
            // Se for string, já está em base64, não precisa converter
            else if (typeof data.logo === "string") {
                saveData.logo = data.logo;
            }
        }
        localStorage.setItem("issuerData", JSON.stringify(saveData))
    };

    const handleClearData = () => {
        localStorage.removeItem("issuerData");
        reset();
    };


    return (
        <Box mb={"6"} p={"4"} style={{ border: "1px solid #c2c2c2", borderRadius: "5px" }}>
            <Heading as="h3" size={"5"} mb={"5"}>Dados do emissor</Heading>
            <Flex gap={"4"} direction={"column"} width={"900px"}>
                <Flex gap={"2"} justify={"between"}>
                    <Flex direction={"column"} gap={"2"}>
                        <Text ml={"2"} mb={"-1"} as="label" size={"2"}>Logotipo</Text>
                        <label
                            htmlFor="logo"
                        >
                            <Button asChild style={{ cursor: "pointer" }} variant="surface">
                                <span>Escolher Arquivo</span>
                            </Button>
                        </label>
                        <input
                            id="logo"
                            type="file"
                            accept="image/png, image/jpeg"
                            style={{ display: "none" }}
                            {...register("logo")}
                        />
                        {errType && <Text color="tomato">Por favor, selecione um arquivo PNG ou JPEG.</Text>}
                        {data.logo && data.logo.length > 0 && (
                            <Flex align={"center"} gap={"2"} ml={"2"}>
                                <Text>
                                    Arquivo: {typeof data.logo === "string"
                                        ? "Imagem carregada"
                                        : data.logo instanceof FileList && data.logo.length > 0
                                            ? data.logo[0].name
                                            : ""}
                                </Text>
                                <IconButton size={"1"} onClick={removeLogo} style={{ cursor: "pointer" }}>
                                    <Trash2 size={18} />
                                </IconButton>
                            </Flex>
                        )}


                    </Flex>
                    {data.logo && (
                        <Box mt={"-5"}>
                            {typeof data.logo === "string" ? (
                                <img height="100px" src={data.logo} alt="Logo" />
                            ) : data.logo instanceof FileList && data.logo.length > 0 ? (
                                <img height="100px" src={URL.createObjectURL(data.logo[0])} alt="Logo" />
                            ) : null}
                        </Box>
                    )}

                </Flex>
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
                            placeholder="Número"
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
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Site</Text>
                        <TextField.Root
                            type="text"
                            size="3"
                            placeholder="Site"
                            {...register("website")}
                        />
                    </Box>
                </Flex>
                <Flex justify={"end"} mt={"1"} mb={"2"}>
                    <Button type="button" size={"1"} variant="surface" style={{ cursor: "pointer" }} radius="large" onClick={handleClearData}>Limpar</Button>
                    <Button type="button" size={"1"} mx={"2"} style={{ cursor: "pointer" }} radius="large" onClick={handleSaveInputs}>Salvar dados</Button>
                </Flex>
            </Flex >
        </Box >
    )
}