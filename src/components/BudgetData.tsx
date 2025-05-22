import { Box, Flex, Heading, Text, TextArea, TextField } from "@radix-ui/themes";

export default function BudgetData() {
    return (
        <Box mb={"6"} p={"4"} style={{ border: "1px solid #c2c2c2", borderRadius: "5px" }}>
            <Heading as="h3" size={"5"} mb={"5"}>Dados do Orçamento</Heading>
            <Flex gap={"4"} direction={"column"} width={"900px"}>
                <Flex gap={"3"}>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" htmlFor="numberOrcamento" size={"2"}>Número do orçamento</Text>
                        <TextField.Root
                            type="number"
                            name="numberOrcamento"
                            size="3"
                            placeholder="Número do orçamento"
                        />
                    </Box>
                    <Box width={"300px"}>
                        <Text ml={"2"} as="label" htmlFor="date" size={"2"}>Data</Text>
                        <TextField.Root
                            type="date"
                            name="date"
                            size="3"
                            placeholder="Data"
                        />
                    </Box>
                    <Box width={"300px"}>
                        <Text ml={"2"} as="label" htmlFor="validate" size={"2"}>Valido até</Text>
                        <TextField.Root
                            type="date"
                            name="validate"
                            size="3"
                            placeholder="Valido até"
                        />
                    </Box>
                    <Box width={"300px"}>
                        <Text ml={"2"} as="label" htmlFor="guarantee" size={"2"}>Garantia de</Text>
                        <TextField.Root
                            type="number"
                            name="guarantee"
                            size="3"
                            placeholder="Garntia de"
                        />
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"30%"}>
                        <Text ml={"2"} as="label" htmlFor="addition" size={"2"}>{'Acréscimo (R$)'}</Text>
                        <TextField.Root
                            type="number"
                            name="addition"
                            size="3"
                            placeholder="Acréscimo (R$)"
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" htmlFor="reasonForAddition" size={"2"}>Motivo do acréscimo</Text>
                        <TextField.Root
                            type="text"
                            name="reasonForAddition"
                            size="3"
                            placeholder="Motivo do acréscimo"
                        />
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"30%"}>
                        <Text ml={"2"} as="label" htmlFor="discount" size={"2"}>{'Desconto (R$)'}</Text>
                        <TextField.Root
                            type="number"
                            name="discount"
                            size="3"
                            placeholder="Desconto (R$)"
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" htmlFor="reasonForDiscount" size={"2"}>Motivo do desconto</Text>
                        <TextField.Root
                            type="text"
                            name="reasonForDiscount"
                            size="3"
                            placeholder="Motivo do desconto"
                        />
                    </Box>
                </Flex>
                <Box width={"100%"}>
                    <Text ml={"2"} as="label" htmlFor="paymentMethod" size={"2"}>Forma de pagamento</Text>
                    <TextField.Root
                        type="text"
                        name="paymentMethod"
                        size="3"
                        placeholder="Forma de pagamento"
                    />
                </Box>
                <Box width={"100%"}>
                    <Text ml={"2"} as="label" htmlFor="observations" size={"2"}>Observações</Text>
                    <TextArea
                        name="observations"
                        size="3"
                        placeholder="Observações..."
                        resize="vertical"
                    />
                </Box>
            </Flex>
        </Box>
    )
}