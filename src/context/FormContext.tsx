import { createContext, useState } from "react";

export const FormContext = createContext({});

export default function FormContextProvider({ children }: { children: React.ReactNode }) {
    const [issuerData, setIssuerData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [budgetItems, setBudgetItems] = useState([]);
    const [budgetDate, setBudgetDate] = useState([]);

    return (
        <FormContext.Provider value={{
            issuerData,
            setIssuerData,
            customerData,
            setCustomerData,
            budgetItems,
            setBudgetItems,
            budgetDate,
            setBudgetDate
        }}>
            {children}
        </FormContext.Provider>
    )
}