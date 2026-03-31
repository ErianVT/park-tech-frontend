# Projeto ParkTech

## Visão Geral

O ParkTech é um sistema completo para gerenciamento de estacionamentos, desenvolvido como parte do meu curso de programação. Este projeto foi um desafio gratificante e me permitiu aplicar e aprimorar diversas habilidades no desenvolvimento web.

Este repositório contém o **Front-end** da aplicação, responsável pela interface do usuário e interação com o sistema. O **Back-end** foi desenvolvido separadamente para gerenciar a lógica de negócios e a persistência de dados.

## Funcionalidades

O sistema ParkTech oferece as seguintes funcionalidades principais:

*   **Autenticação de Usuários:** Login e cadastro para acesso seguro ao sistema.
*   **Dashboard Intuitivo:** Visão geral e acompanhamento das principais métricas do estacionamento.
*   **Gerenciamento de Veículos:** Registro, consulta e atualização de informações sobre os veículos estacionados.
*   **Gerenciamento de Usuários:** Administração de contas de usuários com diferentes níveis de acesso.
*   **Configuração de Preços:** Definição e ajuste das tabelas de preços do estacionamento.

## Tecnologias Utilizadas

### Front-end

O front-end do ParkTech foi construído com as seguintes tecnologias e bibliotecas:

*   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite:** Ferramenta de build rápida para projetos web modernos.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
*   **TailwindCSS:** Framework CSS utilitário para estilização rápida e responsiva.
*   **React Router Dom:** Biblioteca para roteamento declarativo no React.
*   **Shadcn/ui:** Componentes de UI reutilizáveis e acessíveis.
*   **Zod:** Biblioteca de validação de esquemas TypeScript-first.
*   **React Hook Form:** Solução flexível e performática para gerenciamento de formulários.
*   **Axios:** Cliente HTTP baseado em Promises para fazer requisições a APIs.
*   **Lucide-React:** Coleção de ícones personalizáveis para React.
*   **Next-Themes:** Gerenciamento de temas (claro/escuro) para aplicações React.
*   **Radix UI:** Primitivas de UI de baixo nível para construir sistemas de design robustos.
*   **Sonner:** Componentes de notificação (toasts) para feedback ao usuário.
*   **Tanstack Query (React Query):** Gerenciamento de estado de servidor e cache de dados.
*   **Zustand:** Pequeno, rápido e escalável gerenciador de estado para React.

## Como Rodar o Projeto Localmente

Para configurar e executar o projeto ParkTech em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/ErianVT/park-tech-frontend.git
    cd park-tech-frontend
    ```

2.  **Instale as dependências:**

    ```bash
    pnpm install
    # ou npm install
    # ou yarn install
    ```

3.  **Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis (exemplo):

    ```env
    VITE_API_URL=http://localhost:3000/api
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    pnpm dev
    # ou npm run dev
    # ou yarn dev
    ```

    A aplicação estará disponível em `http://localhost:5173` (ou outra porta, conforme indicado no terminal).

## Deploy

O projeto ParkTech está atualmente em produção e pode ser acessado através do seguinte link:

[ParkTech Live](https://park-tech-frontend.cnyzce.easypanel.host)

## Imagens do Projeto

A seguir, algumas capturas de tela da aplicação em funcionamento:

<div align="center">
    <img src="https://raw.githubusercontent.com/ErianVT/park-tech-frontend/master/src/imgs/Login.png" alt="Tela de Login" width="400"/>
    <img src="https://raw.githubusercontent.com/ErianVT/park-tech-frontend/master/src/imgs/Cadastro.png" alt="Tela de Cadastro" width="400"/>
    <img src="https://raw.githubusercontent.com/ErianVT/park-tech-frontend/master/src/imgs/DashBoard.png" alt="Dashboard" width="400"/>
    <img src="https://raw.githubusercontent.com/ErianVT/park-tech-frontend/master/src/imgs/Veículos.png" alt="Tela de Veículos" width="400"/>
    <img src="https://raw.githubusercontent.com/ErianVT/park-tech-frontend/master/src/imgs/Usuários.png" alt="Tela de Usuários" width="400"/>
    <img src="https://raw.githubusercontent.com/ErianVT/park-tech-frontend/master/src/imgs/Preços.png" alt="Tela de Preços" width="400"/>
</div>

## Agradecimentos

Gostaria de expressar minha gratidão ao meu curso de programação pelo apoio e conhecimento fornecidos durante o desenvolvimento deste projeto. Foi uma jornada de aprendizado valiosa e desafiadora.
