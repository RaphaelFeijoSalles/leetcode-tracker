# 🚀 LeetCode Tracker

Um checklist interativo e moderno para acompanhar o progresso de estudos em algoritmos e estruturas de dados (focado no Blind 75 / NeetCode 150).

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Funcionalidades

- **Acompanhamento Visual:** Barra de progresso dinâmica baseada na conclusão das tarefas.
- **Persistência de Dados:** O progresso é salvo automaticamente no navegador (`localStorage`) usando Hooks personalizados.
- **Dark/Light Mode:** Tema alternável com detecção automática da preferência do sistema.
- **Organização Semanal:** Conteúdo dividido por tópicos e semanas (Arrays, Two Pointers, Graphs, etc.).
- **Interface Responsiva:** Design fluido que funciona em Desktop e Mobile.
- **UX Aprimorada:** Modal de confirmação personalizado para ações destrutivas (Reset).

## 🛠️ Tecnologias Utilizadas

Este projeto foi refatorado de HTML/JS puro para uma arquitetura moderna baseada em componentes:

- **Core:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** CSS3 Moderno (CSS Variables para temas)
- **Deploy:** GitHub Pages (via GitHub Actions)

## 📂 Arquitetura do Projeto

A estrutura de arquivos foi organizada para garantir escalabilidade e fácil manutenção:

src/ ├── components/ # Componentes visuais (Checklist, Footer) ├── data/ # Separação dos dados (questões/semanas) da lógica visual ├── hooks/ # Custom Hooks (ex: useStickyState para persistência) ├── App.tsx # Orquestrador de layout e temas └── index.css # Variáveis globais e estilos responsivos


## 🚀 Como executar localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/RaphaelFeijoSalles/meu-checklist.git](https://github.com/RaphaelFeijoSalles/meu-checklist.git)
Instale as dependências:

Bash

cd meu-checklist
npm install
Inicie o servidor de desenvolvimento:

Bash

npm run dev
📦 Deploy (GitHub Pages)
O projeto está configurado para deploy automatizado via GitHub Actions.

Certifique-se de que a propriedade base no vite.config.ts corresponde ao nome do repositório.

O workflow de build é acionado a cada push na branch principal.

📝 Autor
Desenvolvido por Raphael Salles.