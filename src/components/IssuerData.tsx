import { Box, Flex, Heading, Separator, Text, TextField } from "@radix-ui/themes";

export default function IssuerData() {
    return (
        <Box mb={"6"} p={"4"} style={{ border: "1px solid #c2c2c2", borderRadius: "5px" }}>
            <Heading as="h3" size={"5"} mb={"5"}>Dados do emissor</Heading>
            <Flex gap={"4"} direction={"column"} width={"900px"}>
                <Box>
                    <Text ml={"2"} as="label" htmlFor="logo" size={"2"}>Logotipo</Text>
                    <TextField.Root name="logo" placeholder="Nenhum arquivo escolhido" size={"3"}>
                        <TextField.Slot>
                            Escolher Arquivo
                            <Separator orientation={"vertical"} size={"4"} />
                        </TextField.Slot>
                    </TextField.Root>
                </Box>
                <Flex gap={"3"}>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" htmlFor="name" size={"2"}>Nome</Text>
                        <TextField.Root
                            type="text"
                            name="name"
                            size="3"
                            placeholder="Nome"
                        />
                    </Box>
                    <Box width={"50%"}>
                        <Text ml={"2"} as="label" htmlFor="cpf-cnpj" size={"2"}>CPF / CNPJ</Text>
                        <TextField.Root
                            type="number"
                            name="cpf-cnpj"
                            size="3"
                            placeholder="CPF / CNPJ"
                        />
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"100% "}>
                        <Text ml={"2"} as="label" htmlFor="address" size={"2"}>Endereço</Text>
                        <TextField.Root
                            type="text"
                            name="address"
                            size="3"
                            placeholder="Endereço completo"
                        />
                    </Box>
                    <Box maxWidth={"80px"}>
                        <Text ml={"2"} as="label" htmlFor="number" size={"2"}>Número</Text>
                        <TextField.Root
                            type="number"
                            name="number"
                            size="3"
                            placeholder="Número"
                        />
                    </Box>
                    <Box width={"50%"}>
                        <Text ml={"2"} as="label" htmlFor="neighborhood" size={"2"}>Bairro</Text>
                        <TextField.Root
                            type="text"
                            name="neighborhood"
                            size="3"
                            placeholder="Número"
                        />
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"50%"}>
                        <Text ml={"2"} as="label" htmlFor="cep" size={"2"}>CEP</Text>
                        <TextField.Root
                            type="number"
                            name="cep"
                            size="3"
                            placeholder="Número"
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" htmlFor="city" size={"2"}>Cidade</Text>
                        <TextField.Root
                            type="text"
                            name="city"
                            size="3"
                            placeholder="Cidade"
                        />
                    </Box>
                    <Box maxWidth={"80px"}>
                        <Text ml={"2"} as="label" htmlFor="state" size={"2"}>UF</Text>
                        <TextField.Root
                            type="text"
                            name="state"
                            size="3"
                            placeholder="Estado"
                            maxLength={2}
                        />
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"60%"}>
                        <Text ml={"2"} as="label" htmlFor="phone" size={"2"}>Telefone</Text>
                        <TextField.Root
                            type="number"
                            name="phone"
                            size="3"
                            placeholder="Telefone"
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" htmlFor="email" size={"2"}>E-Mail</Text>
                        <TextField.Root
                            type="email"
                            name="email"
                            size="3"
                            placeholder="E-Mail"
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" htmlFor="site" size={"2"}>Site</Text>
                        <TextField.Root
                            type="text"
                            name="site"
                            size="3"
                            placeholder="Site"
                            maxLength={2}
                        />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}