import { Box, Button, Flex, Heading, Separator, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { v4 as uuidev4 } from "uuid";

interface IBudgetItemns {
    id: string;
    productAndService: string;
    quantity: number;
    unitValue: number;
    total: number;
}

export default function BudgetItems() {

    const [items, setItems] = useState<IBudgetItemns[]>([]);

    const handleAddItem = () => {
        setItems([
            ...items,
            { id: uuidev4(), productAndService: "", quantity: NaN, unitValue: NaN, total: NaN }
        ]);
    };

    const handleRemoveItem = (id: string) => {
        const updateItems = items.filter((item) => item.id !== id);
        setItems(updateItems);
    };

    const handleOnChange = (id: string, field: keyof IBudgetItemns, value: string | number) => {
        setItems(prev =>
            prev.map(item => {
                if (item.id === id) {
                    const updatedItem = { ...item, [field]: field === "productAndService" ? value : Number(value) };

                    // Atualiza o total automaticamente, se for quantidade ou valor unitário
                    if (field === "quantity" || field === "unitValue") {
                        updatedItem.total = updatedItem.quantity * updatedItem.unitValue;
                    }

                    return updatedItem;
                }
                return item;
            })
        );
    };


    return (
        <Box mb={"6"} p={"4"} style={{ border: "1px solid #c2c2c2", borderRadius: "5px" }}>
            <Heading as="h3" size={"5"} mb={"5"}>Itens do orçamento</Heading>
            <Flex gap={"4"} direction={"column"} width={"900px"}>
                {items.map((item) => (
                    <Box key={item.id}>
                        <Box>
                            <Text ml={"2"} as="label" htmlFor="productAndService" size={"2"}>Produto / Serviço</Text>
                            <TextField.Root
                                type="text"
                                name="productAndService"
                                size="3"
                                placeholder="Produto / Serviço"
                                value={item.productAndService}
                                onChange={(e) => handleOnChange(item.id, "productAndService", e.target.value)}
                            />
                        </Box>
                        <Flex gap={"3"}>
                            <Box width={"100%"}>
                                <Text ml={"2"} as="label" htmlFor="quantity" size={"2"}>Qtd.</Text>
                                <TextField.Root
                                    type="number"
                                    name="quantity"
                                    size="3"
                                    placeholder="Qtd"
                                    value={item.quantity}
                                    onChange={(e) => handleOnChange(item.id, "quantity", e.target.value)}

                                />
                            </Box>
                            <Box width={"100%"}>
                                <Text ml={"2"} as="label" htmlFor="unitValue" size={"2"}>{"Valor unitário (R$)"}</Text>
                                <TextField.Root
                                    type="number"
                                    name="unitValue"
                                    size="3"
                                    placeholder="Valor unitário"
                                    value={item.unitValue}
                                    onChange={(e) => handleOnChange(item.id, "unitValue", e.target.value)}

                                />
                            </Box>
                            <Box width={"100%"}>
                                <Text ml={"2"} as="label" htmlFor="total" size={"2"}>Total</Text>
                                <TextField.Root
                                    type="number"
                                    name="total"
                                    size="3"
                                    placeholder="Total"
                                    value={item.total.toFixed(2)}
                                    disabled
                                />
                            </Box>
                            <Flex align={"end"} width={"100%"} justify={"center"}>
                                <Button type="button" onClick={() => handleRemoveItem(item.id)} style={{ cursor: "pointer", width: "100%" }} size={"3"} color="tomato" variant="surface">X Remover item</Button>
                            </Flex>
                        </Flex>
                        <Separator size={"4"} my={"3"} />
                    </Box>
                ))}
                <Flex width={"100%"}>
                    <Button type="button" onClick={handleAddItem} style={{ cursor: "pointer" }} size={"3"} variant="surface">+ Adicionar item</Button>
                </Flex>
            </Flex>
        </Box>
    )
}