Meu Checklist Semanal

Uma aplicação simples e funcional de checklist semanal feita com React + TypeScript + Vite, ideal para organização pessoal e acompanhamento de rotina. As tarefas marcadas ficam salvas no navegador usando localStorage, garantindo que tudo permaneça mesmo após recarregar a página.

Este projeto foi criado como parte do meu portfólio e está hospedado no GitHub Pages.

🚀 Tecnologias Utilizadas

React

TypeScript

Vite

CSS puro

LocalStorage para persistência

📌 Funcionalidades

Checklist dividido por semanas

Salvamento automático no navegador (localStorage)

Layout responsivo

Cards organizados e centralizados em telas grandes

Botão para resetar tudo

🖥️ Como rodar localmente

git clone https://github.com/SEU_USUARIO/meu-checklist.git
cd meu-checklist
npm install
npm run dev

A aplicação rodará em: http://localhost:5173/

🛠️ Como fazer build (produção)

npm run build
npm run preview

🌐 Deploy no GitHub Pages

Este projeto pode ser facilmente hospedado no GitHub Pages usando o plugin do Vite:

Instalar plugin:

npm install gh-pages -D

Adicionar no vite.config.ts:

export default defineConfig({
  base: '/meu-checklist/',
});

Editar package.json:

"scripts": {
  "deploy": "gh-pages -d dist",
  "build": "vite build"
}

Gerar build e enviar:

npm run build
npm run deploy

📂 Estrutura do Projeto

meu-checklist/
│
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts


📄 Licença

Este projeto é de uso livre para estudos e portfólio.

👤 Autor

Feito por Raphael Salles, 2025.

Se quiser melhorar, personalizar ou expandir, fique à vontade!

