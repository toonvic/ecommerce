
# 🛍️ Nany Lençóis Ecommerce

Ecommerce desenvolvido com **React + TypeScript + Vite**, utilizando TailwindCSS, Context API, animações com Framer Motion e carrosséis com Swiper. Focado em performance, responsividade e experiência moderna.

Desenvolvido com 💖 pela **MapleSoft**.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React + TypeScript**
- ⚡ **Vite**
- 💨 **TailwindCSS**
- 🎠 **Swiper (Carrossel Responsivo)**
- 🎞️ **Framer Motion (Animações)**
- 🎯 **Lucide Icons**
- 🔗 **React Router DOM**
- 💳 **Stripe (Checkout)** *(em desenvolvimento)*
- 💬 **Botão flutuante do WhatsApp**
- 🔥 **Context API (Carrinho de compras)**
- 📦 **ESLint + Prettier + TypeScript Rules**

---

## 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/maplesoft/nany-ecommerce.git
cd nany-ecommerce
```

Instale as dependências:

```bash
npm install
```

Execute o projeto em desenvolvimento:

```bash
npm run dev
```

Build para produção:

```bash
npm run build
```

Pré-visualização da build:

```bash
npm run preview
```

---

## 🎨 Estrutura de Pastas

```
src/
 ┣ assets/           → Imagens, SVGs, ícones
 ┣ components/       → Componentes reutilizáveis (Navbar, Toast, Footer, WhatsAppButton, etc)
 ┣ contexts/         → Context API (Carrinho, etc)
 ┣ data/             → Dados simulados (mock dos produtos)
 ┣ pages/            → Páginas principais (Home, Produto, Carrinho, etc)
 ┣ App.tsx           → Definição de rotas
 ┗ main.tsx          → Entry Point
```

---

## 🔥 Funcionalidades

- 🛒 **Carrinho de compras** com persistência via Context API
- 🚀 **Performance absurda** com Vite + React + Tailwind
- 🏎️ **Animações suaves** com Framer Motion
- 🎠 **Carrosséis responsivos** de produtos usando SwiperJS
- 📱 **Layout totalmente responsivo e mobile-first**
- 💬 **Botão fixo de WhatsApp** para contato imediato
- 🔥 **Toast de feedback animado** ao adicionar produtos no carrinho
- 🛍️ **Navegação dinâmica por categorias e busca**

---

## 💻 Padronização de Código

Projeto configurado com:

- ✅ ESLint
- ✅ Prettier
- ✅ TypeScript estrito

Para expandir as regras de lint com verificação de tipo:

```ts
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

---

## 🚧 Roadmap

- [x] Carrinho funcional com Context API
- [x] Página de produto com galeria e descrição
- [x] Página de carrinho com resumo e controle de quantidade
- [x] Toast animado de feedback
- [x] Botão de WhatsApp flutuante
- [x] Filtros de produtos por categorias
- [x] Carrosséis dinâmicos e responsivos
- [ ] Integração com **Stripe Checkout**
- [ ] Tela de pedidos e acompanhamento
- [ ] Área administrativa para gestão de produtos
- [ ] Sistema de cupons e promoções
- [ ] Backend (C#)

---

## 🌐 Deploy

Recomendado utilizar:

- **Contabo ou Hostinger**

## 🤝 Contribuição

Contribuições são bem-vindas!  
Abra uma **issue**, envie sugestões ou faça um **pull request**.

---

## 🏢 Sobre a MapleSoft

Desenvolvido por **[MapleSoft](https://maplesoft.dev)**, uma empresa especializada em soluções digitais, desenvolvimento de software, ecommerce e experiências inovadoras.

---

## 📄 Licença

Este projeto está sob a licença MIT.
