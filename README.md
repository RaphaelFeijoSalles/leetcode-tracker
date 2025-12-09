---

# 🚀 LeetCode Tracker

Um checklist interativo e moderno para acompanhar o progresso de estudos em algoritmos e estruturas de dados (focado no Blind 75 / NeetCode 150).

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## ✨ Funcionalidades

* **Acompanhamento Visual:** Barra de progresso dinâmica baseada na conclusão das tarefas.
* **Persistência de Dados:** Progresso salvo automaticamente no navegador (`localStorage`) usando Hooks personalizados.
* **Dark/Light Mode:** Tema alternável, com detecção automática da preferência do sistema.
* **Organização Semanal:** Conteúdo dividido por tópicos e semanas (Arrays, Two Pointers, Graphs, etc.).
* **Interface Responsiva:** Design fluido para Desktop e Mobile.
* **UX Aprimorada:** Modal de confirmação para ações destrutivas (Reset).

---

## 🛠️ Tecnologias Utilizadas

Projeto refatorado de HTML/JS puro para uma arquitetura moderna baseada em componentes:

* **Core:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** CSS moderno com variáveis para temas
* **Deploy:** GitHub Pages (via GitHub Actions)

---

## 📂 Arquitetura do Projeto

```txt
src/
├── components/       # Componentes visuais (Checklist, Footer)
├── data/             # Organização dos dados por semanas e tópicos
├── hooks/            # Custom Hooks (ex: useStickyState)
├── App.tsx           # Orquestrador da aplicação e temas
└── index.css         # Variáveis globais e estilos responsivos
```

---

## 🚀 Como executar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/RaphaelFeijoSalles/leetcode-tracker.git
```

### 2. Instale as dependências

```bash
cd meu-checklist
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

---

## 📦 Deploy (GitHub Pages)

Este projeto já está configurado para deploy automatizado via **GitHub Actions**.

* Certifique-se de que a propriedade **`base`** no `vite.config.ts` corresponde ao nome do repositório.
* O workflow realiza o build e deploy automaticamente a cada **push na branch `main`**.

---

## 📝 Autor

Desenvolvido por **Raphael Salles**.

---
