import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import IssuerData from "./IssuerData";
import BudgetData from "./BudgetData";
import CustomerData from "./CustomerData";
import BudgetItems from "./BudgetItems";
import { useState } from "react";
import type { IBudgetItem } from "../interfaces/interfaces";
import { useForm } from "react-hook-form";
import { generatePDF } from "../generete.ts/generetePDF";

export default function Form() {

    const [data, setData] = useState({
        issuerData: {},
        customerData: {},
        budgetItems: [] as IBudgetItem[],
        budgetData: {}
    });

    console.log(data.issuerData)

    const updateIssuerData = (data: any) =>
        setData(prev => ({ ...prev, issuerData: data }));

    const updateCustomerData = (data: any) =>
        setData(prev => ({ ...prev, customerData: data }));

    const updateBudgetItems = (data: any) =>
        setData(prev => ({ ...prev, budgetItems: data }));

    const updateBudgetData = (data: any) =>
        setData(prev => ({ ...prev, budgetData: data }));

    const { handleSubmit } = useForm();

    return (
        <Flex direction={"column"} justify={"center"} align={"center"} maxWidth={"100%"} mt={"3"}>
            <Text align={"center"} color="blue" weight={"bold"} mb={"1"} mt={"3"}>SERVIÇO GRATUITO</Text>
            <Heading as="h1" size={"8"} mb={"3"}>
                Gerador de Orçamento
            </Heading>
            <Box width={"600px"}>
                <Text as="p" align={"center"} mb={"7"}>
                    Prepare uma proposta de orçamento adaptada às suas necessidades, com opção de download em PDF para envio ou impressão.
                </Text>
            </Box>

            <form onSubmit={handleSubmit(() => generatePDF(data))}>
                <IssuerData onChange={updateIssuerData} />
                <CustomerData onChange={updateCustomerData} />
                <BudgetItems onChange={updateBudgetItems} />
                <BudgetData onChange={updateBudgetData} />
                <Flex width={"100%"} mb={"9"} justify={"center"}>
                    <Button
                        type="submit"
                        style={{ cursor: "pointer", width: "40%" }}
                        size={"3"}
                    >
                        Gerar orçamento
                    </Button>
                </Flex>
            </form >
        </Flex >
    )
}