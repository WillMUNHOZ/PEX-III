import { Box, Flex, Heading, Select, Text, TextArea, TextField } from "@radix-ui/themes";
import { useEffect } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import type { IBudgetData } from "../interfaces/interfaces";

export interface IOnChange {
    onChange: (data: IBudgetData) => void;
}

export default function BudgetData({ onChange }: IOnChange) {
    const { control, register } = useForm<IBudgetData>({
        defaultValues: {
            budgetNumber: '',
            date: '',
            validate: '',
            guarantee: '',
            period: '',
            addition: '',
            reasonForAddition: '',
            discount: '',
            reasonForDiscount: '',
            paymentMethod: '',
            observations: '',
        },
    });

    const data = useWatch({ control });

    useEffect(() => {
        onChange(data)
    }, [data])

    return (
        <Box mb={"6"} p={"4"} style={{ border: "1px solid #c2c2c2", borderRadius: "5px" }}>
            <Heading as="h3" size={"5"} mb={"5"}>Dados do Orçamento</Heading>
            <Flex gap={"4"} direction={"column"} width={"900px"}>
                <Flex gap={"3"}>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Número do orçamento</Text>
                        <TextField.Root
                            type="number"
                            size="3"
                            placeholder="Número do orçamento"
                            {...register("budgetNumber")}
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Data</Text>
                        <TextField.Root
                            type="date"
                            size="3"
                            placeholder="Data"
                            {...register("date")}
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Valido até</Text>
                        <TextField.Root
                            type="date"
                            size="3"
                            placeholder="Valido até"
                            {...register("validate")}
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Garantia de</Text>
                        <Flex width={"100%"} gap={"1"}>
                            <Box width={"100%"}>
                                <TextField.Root
                                    type="number"
                                    size="3"
                                    {...register("guarantee")}
                                />
                            </Box>
                            <Box maxWidth={"100%"}>
                                <Controller
                                    name="period"
                                    control={control}
                                    defaultValue="Dias"
                                    render={({ field }) => (
                                        <Select.Root value={field.value} onValueChange={field.onChange} size={"3"}>
                                            <Select.Trigger variant="surface" />
                                            <Select.Content>
                                                <Select.Group>
                                                    <Select.Item value="Dias">Dias</Select.Item>
                                                    <Select.Item value="Semanas">Semanas</Select.Item>
                                                    <Select.Item value="Meses">Meses</Select.Item>
                                                    <Select.Item value="Anos">Anos</Select.Item>
                                                </Select.Group>
                                            </Select.Content>
                                        </Select.Root>
                                    )}
                                />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"30%"}>
                        <Text ml={"2"} as="label" size={"2"}>{'Acréscimo (R$)'}</Text>
                        <TextField.Root
                            type="number"
                            size="3"
                            placeholder="Acréscimo (R$)"
                            {...register("addition")}
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Motivo do acréscimo</Text>
                        <TextField.Root
                            type="text"
                            size="3"
                            placeholder="Motivo do acréscimo"
                            {...register("reasonForAddition")}
                        />
                    </Box>
                </Flex>
                <Flex gap={"3"}>
                    <Box width={"30%"}>
                        <Text ml={"2"} as="label" size={"2"}>{'Desconto (R$)'}</Text>
                        <TextField.Root
                            type="number"
                            size="3"
                            placeholder="Desconto (R$)"
                            {...register("discount")}
                        />
                    </Box>
                    <Box width={"100%"}>
                        <Text ml={"2"} as="label" size={"2"}>Motivo do desconto</Text>
                        <TextField.Root
                            type="text"
                            size="3"
                            placeholder="Motivo do desconto"
                            {...register("reasonForDiscount")}
                        />
                    </Box>
                </Flex>
                <Box width={"100%"}>
                    <Text ml={"2"} as="label" size={"2"}>Forma de pagamento</Text>
                    <TextField.Root
                        type="text"
                        size="3"
                        placeholder="Forma de pagamento"
                        {...register("paymentMethod")}
                    />
                </Box>
                <Box width={"100%"}>
                    <Text ml={"2"} as="label" size={"2"}>Observações</Text>
                    <TextArea
                        size="3"
                        placeholder="Observações..."
                        resize="vertical"
                        {...register("observations")}
                    />
                </Box>
            </Flex>
        </Box>
    )
}