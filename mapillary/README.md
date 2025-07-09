### 1️⃣ Primeiramente

Para começar a usar o MapillaryJS com dados da plataforma Mapillary , você precisa de uma conta . Após efetuar login, você precisa registrar um aplicativo para obter um token de acesso do cliente . Ao fornecer seus próprios dados , não é necessário um token de acesso.


### 2️⃣ Crie dois arquivos: index.html e main.js.

No arquivo index.html, adicione:
```bash
<link
  href="https://unpkg.com/mapillary-js@4.1.2/dist/mapillary.css"
  rel="stylesheet"
/>
```

No arquivo .js (main.js), adicione o seguinte código:
```bash
import { Viewer } from "mapillary-js";

const viewer = new Viewer({
  accessToken: "<your access token>",
  container: "<your HTML element ID>",
  imageId: "<your image ID for initializing the viewer>",
});
```


### 🚀 Rodando o projeto

### Inicialize um projeto Node.js:

```bash
-npm init -y
```
### Instale o Vite:
```bash
-npm install vite --save-dev
```

### No package.json, adicione os scripts:

```bash 
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### Instale o pacote mapillary-js:
```bash
-npm install mapillary-js
```

### Rode o servidor local com o Vite:
```bash
-npm run dev
```

### Apos rodar a aplicação você tera a imagem que foi adicionada via ID no caso o pKey, obtido atraves dos links de imagem : pKey=3018702688362520

![image](https://github.com/user-attachments/assets/10a068bb-d634-434b-8c4c-fa1b5e4f7d7b)
