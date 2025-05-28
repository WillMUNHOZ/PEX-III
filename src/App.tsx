import { Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Form from "./components/Form";
import "./App.css"

export default function App() {


    return (
        <Theme appearance="light">
            <Flex justify={"center"} maxWidth={"100%"}>
                <Form />
            </Flex>
        </Theme>
    )
}