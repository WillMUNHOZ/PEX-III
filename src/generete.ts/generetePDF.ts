import jsPDF from "jspdf";
import type { IBudgetData, IBudgetItem, ICustomerData, IIssuerData } from "../interfaces/interfaces";
import { convertToBase64 } from "../components/utils/convertLogo";
import { formatDateToBR } from "../components/utils/formatDate";

export async function generatePDF(data: any) {
    const doc = new jsPDF();

    const issuerData: IIssuerData = data.issuerData
    const customerData: ICustomerData = data.customerData
    const budgetItems: IBudgetItem[] = data.budgetItems
    const budgetData: IBudgetData = data.budgetData

    const getTotal = budgetItems.reduce((acc: number, item: { total: string | number; }) => acc + +item.total, 0);
    const total = (getTotal - +(budgetData.discount ?? 0) + +(budgetData.addition ?? 0)).toFixed(2).replace('.', ',')

    const pageWidth = doc.internal.pageSize.getWidth();
    const marginRight = 10;
    const x = pageWidth - marginRight; // posição X partindo da direita

    let gap = 0

    const toDay = new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    // Linha separadora
    doc.setDrawColor(150);
    doc.line(10, 10, 200, 10);

    // Título
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(`Orçamento: ${budgetData.budgetNumber}`, x, 20, { align: "right" });

    //Logotipo
    if (data.issuerData.logo) {
        const imageBase64 = await convertToBase64(data.issuerData.logo[0]);
        doc.addImage(imageBase64, "PNG", 20, 22, 0, 25); // x, y, width, height
    }

    // Emissor
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${issuerData.name}`, x, 27, { align: "right" });
    doc.text(`${issuerData.cpfCnpj}`, x, 33, { align: "right" });
    doc.text(`${issuerData.address}, ${issuerData.number}, ${issuerData.neighborhood}`, x, 39, { align: "right" });
    doc.text(`${issuerData.city}, ${issuerData.state}, CEP: ${issuerData.cep}`, x, 45, { align: "right" });
    doc.text(`${issuerData.website}`, x, 51, { align: "right" });


    // Linha separadora
    doc.setDrawColor(150);
    doc.line(10, 57, 200, 57);

    // Informações
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Data de Emissão:", 10, 67);
    doc.setFont("helvetica", "normal");
    doc.text(`${budgetData.date ? formatDateToBR(String(budgetData.date)) : ""}`, 41, 67);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Orçamento Válido Até:", x - 19, 67, { align: "right" });
    doc.setFont("helvetica", "normal");
    doc.text(`${budgetData.validate ? formatDateToBR(String(budgetData.validate)) : ""}`, x, 67, { align: "right" });

    // Dados do Cliente
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Dados do Cliente", 10, 77);

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(`Nome:`, 10, 85);
    doc.setFont("helvetica", "normal");
    doc.text(`${customerData.name}`, 22, 85);

    doc.setFont("helvetica", "bold");
    doc.text(`Telefone:`, 120, 85);
    doc.setFont("helvetica", "normal");
    doc.text(`${customerData.phone}`, 137, 85);

    doc.setFont("helvetica", "bold");
    doc.text(`CPF / CNPJ:`, 10, 91);
    doc.setFont("helvetica", "normal");
    doc.text(`${customerData.cpfCnpj}`, 32, 91);

    doc.setFont("helvetica", "bold");
    doc.text(`E-mail:`, 120, 91);
    doc.setFont("helvetica", "normal");
    doc.text(`${customerData.email}`, 133, 91);

    doc.setFont("helvetica", "bold");
    doc.text(`Endereço:`, 10, 97);
    doc.setFont("helvetica", "normal");
    doc.text(`${customerData.address}, ${customerData.number}, ${customerData.neighborhood}`, 28, 97);

    doc.setFont("helvetica", "bold");
    doc.text(`Cidade:`, 10, 103);
    doc.setFont("helvetica", "normal");
    doc.text(`${customerData.city}, ${customerData.state} - CEP: ${customerData.cep}`, 24, 103);

    // Linha separadora
    doc.setDrawColor(150);
    doc.line(10, 109, 200, 109);

    // Itens
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Itens", 10, 119);

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(`Descrição`, 10, 127);
    doc.text(`Qtd.`, 120, 127);
    doc.text(`Valor Unitario`, 140, 127);
    doc.text(`Subtotal`, 180, 127);

    budgetItems.forEach((item: any, index: number) => {
        const gapItems = index * 6
        gap = gapItems

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.text(`${item.productAndService}`, 10, 135 + gapItems);
        doc.text(`${item.quantity} ${item.units}`, 120, 135 + gapItems);
        doc.text(`R$ ${item.unitValue.replace('.', ',')}`, 140, 135 + gapItems);
        doc.text(`R$ ${item.total.replace('.', ',')}`, 180, 135 + gapItems);

    });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Acréscimo:", 156, 150 + gap);
    doc.setFont("helvetica", "normal");
    doc.text(`${budgetData.addition ? String(budgetData.addition).replace('.', ',') : `0,00`}`, x - 10, 150 + gap, { align: "right" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Desconto:", 158, 156 + gap);
    doc.setFont("helvetica", "normal");
    doc.text(`${budgetData.discount ? String(budgetData.discount).replace('.', ',') : `0,00`}`, x - 10, 156 + gap, { align: "right" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Total:", 164, 164 + gap);
    doc.setFont("helvetica", "normal");
    doc.text(`${total}`, x - 10, 164 + gap, { align: "right" });

    // Linha separadora
    doc.setDrawColor(150);
    doc.line(10, 171 + gap, 200, 171 + gap);

    //Forma de pagamento / Validade
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(`Forma de pagamento:`, 10, 181 + gap);
    doc.setFont("helvetica", "normal");
    doc.text(`${budgetData.paymentMethod}`, 48, 181 + gap);

    doc.setFont("helvetica", "bold");
    doc.text(`Garantia:`, 10, 187 + gap);
    doc.setFont("helvetica", "normal");
    doc.text(`${budgetData.guarantee} ${budgetData.period}`, 27, 187 + gap);

    // Obeservações
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Observações", 10, 200 + gap);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`${budgetData.observations}`, 10, 206 + gap);

    // Linha separadora
    doc.setDrawColor(150);
    doc.line(10, 285, 200, 285);

    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(`www.geradordeorcamento.com`, 10, 290);
    doc.text(`${toDay}`, 177, 290);

    // Baixar
    // doc.save("orcamento.pdf");
    window.open(doc.output("bloburl"));
}
