// Converter aquivo em Base64
export const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (!(file instanceof Blob)) {
            reject(new Error("Arquivo inválido. Esperado um File ou Blob."));
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
};