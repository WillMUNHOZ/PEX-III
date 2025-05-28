export interface IBudgetItem {
    productAndService: string;
    quantity: string;
    units: string
    unitValue: string;
    total: string | number;
}

export interface IFormInput {
    budgetItems: IBudgetItem[];
}

export interface IBudgetData {
    budgetNumber?: string;
    date?: string;
    validate?: string;
    guarantee?: string;
    period?: string
    addition?: string | number;
    reasonForAddition?: string;
    discount?: string | number;
    reasonForDiscount?: string;
    paymentMethod?: string;
    observations?: string;
};

export interface ICustomerData {
    name?: string;
    cpfCnpj?: string;
    address?: string;
    number?: string;
    neighborhood?: string;
    cep?: string;
    city?: string;
    state?: string;
    phone?: string;
    email?: string;
    website?: string;
};

export interface IIssuerData {
    logo?: string | FileList | undefined;
    name?: string;
    cpfCnpj?: string;
    address?: string;
    number?: string;
    neighborhood?: string;
    cep?: string;
    city?: string;
    state?: string;
    phone?: string;
    email?: string;
    website?: string;
}