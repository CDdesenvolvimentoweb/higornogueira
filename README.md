# Landing Page - Higor Nogueira Visagista

Uma landing page moderna e elegante para Higor Nogueira, especialista em visagismo.

## Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animações)
- Styled Components
- React Icons

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```
4. Acesse o site em [http://localhost:5173](http://localhost:5173)

## Personalizações

### Imagem de Perfil

Substitua o arquivo `public/higor-profile.jpg` com a foto real de Higor Nogueira.

### Favicon

Adicione um arquivo `favicon.ico` na pasta `public/` ou atualize o link no arquivo `index.html`.

### Links de Contato

Edite os links de WhatsApp e Instagram no arquivo `src/App.tsx` para os corretos:

```tsx
// WhatsApp
<a 
  href="https://wa.me/SEUNUMEROAQUI?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria"
  className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-[#25D366] hover:bg-opacity-90 rounded-md font-medium text-black mb-4 transition-all"
>
  <FaWhatsapp size={20} />
  CONSULTORIA VISAGISTA
</a>

// Instagram
<a 
  href="https://www.instagram.com/SEUINSTAGRAM"
  className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:bg-opacity-90 rounded-md font-medium text-white transition-all"
>
  <FaInstagram size={20} />
  INSTAGRAM
</a>
```

### Cores e Estilo

Edite o arquivo `tailwind.config.js` para personalizar as cores principais:

```js
theme: {
  extend: {
    colors: {
      primary: "#1a1a1a",    // Cor principal
      secondary: "#2a2a2a",  // Cor secundária
      accent: "#cccccc",     // Cor de destaque
    },
    // ...
  },
},
```

## Produção

Para fazer o build para produção:

```bash
npm run build
```

Os arquivos gerados estarão na pasta `dist/` e podem ser enviados para qualquer servidor web.
