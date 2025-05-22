import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import IssuerData from "./IssuerData";
import BudgetData from "./BudgetData";
import CustomerData from "./CustomerData";
import BudgetItems from "./BudgetItems";
import FormContextProvider from "../context/FormContext";

export default function Form() {
    return (
        <FormContextProvider>
            <Flex direction={"column"} justify={"center"} align={"center"} width={"100%"}>
                <Heading as="h1" size={"8"} m={"3"}>
                    Gerador de Orçamento
                </Heading>
                <Text as="p" mb={"7"}>
                    Crie uma proposta de orçamento personalizada, para baixar em PDF e enviar ao cliente ou imprimir.
                </Text>
                <form>
                    <IssuerData />
                    <CustomerData />
                    <BudgetItems />
                    <BudgetData />
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
        </FormContextProvider>

    )
}