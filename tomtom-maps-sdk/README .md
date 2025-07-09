# 🗺️ TomTom Maps SDK - Exemplos para Web

Este repositório contém diversos exemplos prontos para uso com o **TomTom Maps SDK for Web**, ideal para testar funcionalidades como mapas, rotas, busca, tráfego e muito mais!

---

## 🚀 Passos para rodar os exemplos

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/tomtom-international/maps-sdk-for-web-examples.git


2️⃣ Acesse a pasta do projeto

cd maps-sdk-for-web-examples/


Escolha a versão desejada (V5 ou V6):

cd V5/
# ou
cd V6/


3️⃣ 🔑 Configure sua API Key
Você precisa de uma TomTom API Key. Crie uma conta gratuita no TomTom Developer Portal e gere suas chaves.

Em seguida, abra o arquivo config.json e substitua os campos pelas suas chaves:

"keys": 
    "maps": "<your maps key>",
    "routing": "<your routing key>",
    "search": "<your search key>",
    "trafficIncidents": "<your traffic incidents key>",
    "trafficFlow": "<your traffic flow key>",
    "extendedSearch": "<your extended search key>"


4️⃣ Rode a ferramenta

-npm install


Construa o projeto com sua API:

-npm run build


-npm start
