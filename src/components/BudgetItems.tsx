import { Box, Button, Flex, Heading, Select, Separator, Text, TextField } from "@radix-ui/themes";
import { useEffect } from "react";
import { Controller, useFieldArray, useForm, useWatch } from "react-hook-form";
import type { IBudgetItem, IFormInput } from "../interfaces/interfaces";

export interface IOnChange {
    onChange: (data: IBudgetItem[]) => void;
}

export default function BudgetItems({ onChange }: IOnChange) {
    const { register, control, setValue } = useForm<IFormInput>({
        defaultValues: { budgetItems: [] },
        mode: "onChange"
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: "budgetItems"
    })

    const data = useWatch({
        control,
        name: "budgetItems"
    });

    useEffect(() => {
        if (!data) return;

        data.forEach((item: IBudgetItem, index: any) => {
            const quantity = parseFloat(item?.quantity) || 0;
            const unitValue = parseFloat(item?.unitValue) || 0;
            const total = (quantity * unitValue).toFixed(2);

            if (item.total !== total) {
                setValue(`budgetItems.${index}.total`, total);
            }
        })

        onChange(data);
    }, [data, setValue]);



    const handleAddItem = () => {
        append({ productAndService: "", quantity: "", units: "", unitValue: "", total: 0 });
    };

    const handleRemoveItem = (index: number) => {
        remove(index);
    };

    return (
        <Box mb={"6"} p={"4"} style={{ border: "1px solid #c2c2c2", borderRadius: "5px" }}>
            <Heading as="h3" size={"5"} mb={"5"}>Itens do orçamento</Heading>
            <Flex gap={"4"} direction={"column"} width={"900px"}>
                {fields.map((item, index) => (
                    <Box key={item.id}>
                        <Box>
                            <Text ml={"2"} as="label" size={"2"}>Produto / Serviço</Text>
                            <TextField.Root
                                type="text"
                                size="3"
                                placeholder="Produto / Serviço"
                                {...register(`budgetItems.${index}.productAndService`)}
                            />
                        </Box>
                        <Flex gap={"3"} width={"100%"}>
                            <Box width={"100%"}>
                                <Text ml={"2"} as="label" size={"2"}>Qtd.</Text>
                                <Flex width={"100%"} gap={"1"}>
                                    <Box width={"100%"}>
                                        <TextField.Root
                                            type="number"
                                            size="3"
                                            placeholder="Qtd"
                                            {...register(`budgetItems.${index}.quantity`)}
                                        />
                                    </Box>
                                    <Box maxWidth={"100%"}>
                                        <Controller
                                            name={`budgetItems.${index}.units`}
                                            control={control}
                                            defaultValue="UN"
                                            render={({ field }) => (
                                                <Select.Root value={field.value} onValueChange={field.onChange} size={"3"}>
                                                    <Select.Trigger variant="surface" />
                                                    <Select.Content>
                                                        <Select.Item value="UN">UN</Select.Item>
                                                        <Select.Item value="PC">PC</Select.Item>
                                                        <Select.Item value="MM">MM</Select.Item>
                                                        <Select.Item value="CC">CC</Select.Item>
                                                        <Select.Item value="MT">MT</Select.Item>
                                                        <Select.Item value="KM">KM</Select.Item>
                                                    </Select.Content>
                                                </Select.Root>
                                            )}
                                        />
                                    </Box>
                                </Flex>
                            </Box>
                            <Box width={"100%"}>
                                <Text ml={"2"} as="label" size={"2"}>{"Valor unitário (R$)"}</Text>
                                <TextField.Root
                                    type="number"
                                    size="3"
                                    placeholder="Valor unitário"
                                    {...register(`budgetItems.${index}.unitValue`)}
                                />
                            </Box>
                            <Box width={"100%"}>
                                <Text ml={"2"} as="label" size={"2"}>Total</Text>
                                <TextField.Root
                                    type="number"
                                    size="3"
                                    {...register(`budgetItems.${index}.total`)}
                                    readOnly
                                />
                            </Box>
                            <Flex align={"end"} width={"100%"} justify={"center"}>
                                <Button type="button" onClick={() => handleRemoveItem(index)} style={{ cursor: "pointer", width: "100%" }} size={"3"} color="tomato" variant="surface">X Remover item</Button>
                            </Flex>
                        </Flex>
                        <Separator size={"4"} my={"3"} />
                    </Box>
                ))}
                <Flex width={"100%"} justify={"between"} align={"center"}>
                    <Button type="button" onClick={handleAddItem} style={{ cursor: "pointer" }} size={"3"} variant="surface">+ Adicionar item</Button>
                    <Box>
                        <Text size={"5"} weight={"bold"} mr={"2"}>
                            Total:
                        </Text>
                        <Text size={"5"}>R$ {data.reduce((acc, item) => acc + +item.total, 0).toFixed(2)}</Text>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}