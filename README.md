# 🎨 Pulpor Portfolio

> Um portfólio moderno, responsivo e totalmente bilíngue desenvolvido com React, TypeScript e Vite.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://your-portfolio-url.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646cff.svg)](https://vitejs.dev/)

## ✨ Features

- 🌍 **Bilíngue**: Suporte completo para Português (BR) e Inglês (US)
- 🌓 **Dark/Light Mode**: Tema claro e escuro com transições suaves
- 📱 **Responsivo**: Design adaptável para todos os dispositivos
- ⚡ **Performance**: Construído com Vite para carregamento ultra-rápido
- 🎯 **Animações**: Transições e efeitos visuais elegantes
- 🧩 **Componentes**: Biblioteca completa de componentes com shadcn/ui
- 📚 **Seção de Livro**: Área dedicada para divulgar publicações
- 🔝 **Scroll to Top**: Botão flutuante para navegação rápida
- 📧 **Formulário de Contato**: Sistema integrado de mensagens

## 🛠️ Tecnologias

### Core
- **React 18.3** - Biblioteca JavaScript para interfaces
- **TypeScript 5.8** - Superset tipado do JavaScript
- **Vite 5.4** - Build tool moderna e rápida
- **React Router DOM 6.30** - Roteamento client-side

### UI & Styling
- **Tailwind CSS 3.4** - Framework CSS utility-first
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Radix UI** - Primitivos de UI sem estilo
- **Lucide React** - Biblioteca de ícones
- **class-variance-authority** - Utilitário para variantes de componentes
- **tailwind-merge** - Merge inteligente de classes Tailwind

### Form & Validation
- **React Hook Form 7.61** - Gerenciamento de formulários performático
- **Zod 3.25** - Validação de schemas TypeScript-first
- **@hookform/resolvers** - Integrações de validação

### State & Data
- **TanStack Query (React Query) 5.83** - Gerenciamento de estado assíncrono
- **React Context API** - Gerenciamento de estado global (Theme, Language)

### Outros
- **date-fns 3.6** - Manipulação de datas moderna
- **Sonner** - Notificações toast elegantes
- **Recharts 2.15** - Gráficos e visualizações
- **Embla Carousel** - Carrossel responsivo

## 📂 Estrutura do Projeto

```
my-portfolio/
├── src/
│   ├── components/         # Componentes React
│   │   ├── ui/            # Componentes shadcn/ui
│   │   ├── About.tsx      # Seção sobre mim
│   │   ├── Contact.tsx    # Formulário de contato
│   │   ├── Hero.tsx       # Seção inicial
│   │   ├── Navigation.tsx # Menu de navegação
│   │   ├── Projects.tsx   # Portfólio de projetos
│   │   ├── ScrollToTop.tsx # Botão voltar ao topo
│   │   ├── Skills.tsx     # Habilidades técnicas
│   │   └── ...
│   ├── contexts/          # React Contexts
│   │   ├── LanguageContext.tsx  # Gerenciamento de idioma
│   │   └── ThemeContext.tsx     # Gerenciamento de tema
│   ├── hooks/             # Custom React Hooks
│   ├── lib/               # Utilitários e configurações
│   │   ├── translations.ts      # Traduções PT/EN
│   │   └── utils.ts            # Funções auxiliares
│   ├── pages/             # Páginas da aplicação
│   │   ├── Index.tsx      # Página principal
│   │   └── NotFound.tsx   # Página 404
│   ├── assets/            # Imagens e recursos estáticos
│   ├── App.tsx            # Componente raiz
│   └── main.tsx           # Entry point
├── public/                # Arquivos públicos
├── components.json        # Configuração shadcn/ui
├── tailwind.config.ts     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
└── package.json           # Dependências e scripts

```

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/pulpor/my-portfolio.git
cd my-portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:5173`

### Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build de produção
npm run build:dev    # Build de desenvolvimento
npm run preview      # Preview da build de produção
npm run lint         # Executa o linter ESLint
```

## 🎨 Customização

### Idiomas

Edite o arquivo `src/lib/translations.ts` para adicionar ou modificar traduções:

```typescript
export const translations = {
  pt: { /* traduções em português */ },
  en: { /* traduções em inglês */ }
};
```

### Temas

Os temas são gerenciados via `src/contexts/ThemeContext.tsx` e configurados no Tailwind CSS.

### Componentes UI

Todos os componentes shadcn/ui estão em `src/components/ui/` e podem ser customizados individualmente.

## 📧 Contato

- **Email**: pulppor@gmail.com
- **LinkedIn**: [/pulpor](https://www.linkedin.com/in/pulpor/)
- **GitHub**: [/pulpor](https://github.com/pulpor)

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

<div align="center">
  Desenvolvido com ❤️ por <a href="https://github.com/pulpor">Pulpor</a>
</div>