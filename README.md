# Gerador de Orçamento

**Este é um projeto de Extensão (PEX) desenvolvido para a faculdade.**

## Descrição

O Gerador de Orçamento é uma ferramenta simples e prática que permite criar propostas de orçamento personalizadas. Com ele, você pode inserir os dados do emissor, do cliente, os itens do orçamento e outras informações relevantes. Ao final, a ferramenta gera um arquivo PDF com o orçamento detalhado, pronto para ser enviado ou impresso.

## Acesso Online

Você pode acessar a versão online do projeto através do seguinte link:
[https://gestorflex.vercel.app](https://gestorflex.vercel.app)

## Tecnologias Utilizadas

- **React:** Biblioteca para construção da interface de usuário.
- **Vite:** Ferramenta de build e desenvolvimento rápido para projetos web modernos.
- **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
- **@radix-ui/themes:** Biblioteca de componentes de UI para React.
- **react-hook-form:** Para gerenciamento de formulários.
- **jspdf:** Para geração de documentos PDF no lado do cliente.
- **lucide-react:** Biblioteca de ícones.

## Como Começar

Siga as instruções abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/pex-project.git
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd pex-project
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

### Rodando o Projeto

Para iniciar o servidor de desenvolvimento, execute:

```sh
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) no seu navegador para ver a aplicação.

## Estrutura do Projeto

```
PEX-III-main/
├───.gitignore
├───eslint.config.js
├───index.html
├───package-lock.json
├───package.json
├───README.md
├───tsconfig.app.json
├───tsconfig.json
├───tsconfig.node.json
├───vite.config.ts
└───src/
    ├───App.css
    ├───App.tsx
    ├───index.css
    ├───main.tsx
    ├───vite-env.d.ts
    ├───assets/
    │   └───logo.svg
    ├───components/
    │   ├───BudgetData.tsx
    │   ├───BudgetItems.tsx
    │   ├───CustomerData.tsx
    │   ├───Form.tsx
    │   ├───IssuerData.tsx
    │   └───utils/
    │       ├───convertLogo.ts
    │       └───formatDate.ts
    ├───generete.ts/
    │   └───generetePDF.ts
    └───interfaces/
        └───interfaces.ts
```

- **`src/components`**: Contém os componentes React reutilizáveis da aplicação.
- **`src/generete.ts`**: Contém a lógica para gerar o PDF do orçamento.
- **`src/interfaces`**: Define as interfaces TypeScript usadas no projeto.
- **`src/assets`**: Armazena os arquivos de mídia, como imagens e logos.
- **`public/`**: Contém os arquivos estáticos que são servidos diretamente pelo servidor.
