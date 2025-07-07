Instalação e uso

Para começar a usar o MapillaryJS com dados da plataforma Mapillary , você precisa de uma conta . Após efetuar login, você precisa registrar um aplicativo para obter um token de acesso do cliente . Ao fornecer seus próprios dados , não é necessário um token de acesso.



                    ### 🛠️ Montando o projeto ###

Crie dois arquivos: index.html e main.js.

No arquivo index.html, adicione:

<link
  href="https://unpkg.com/mapillary-js@4.1.2/dist/mapillary.css"
  rel="stylesheet"
/>


No arquivo .js (main.js), adicione o seguinte código:

import { Viewer } from "mapillary-js";

const viewer = new Viewer({
  accessToken: "<your access token>",
  container: "<your HTML element ID>",
  imageId: "<your image ID for initializing the viewer>",
});


                    ### 🚀 Rodando o projeto ###

🚀 Rodando o projeto

Inicialize um projeto Node.js:

--///npm init -y

Instale o Vite:

-npm install vite --save-dev


No package.json, adicione os scripts:

"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}


Instale o pacote mapillary-js:

-npm install mapillary-js


Rode o servidor local com o Vite:

-npm run dev


Apos rodar a aplicação você tera a imagem que foi adicionada via ID no caso o pKey, obtido atraves dos links de imagem : pKey=3018702688362520
