# 💧 AquaVida – Vigilância da Qualidade da Água no Brasil

Aplicativo construído em **React Native** com o objetivo de promover a **conscientização e o acesso à informação** sobre a **qualidade da água** no Brasil. Ele utiliza dados públicos da API do **SISAGUA** (Ministério da Saúde).

---

## 🌱 Tema do Projeto
O AquaVida aborda uma **questão social crítica**: a **saúde pública relacionada à água potável**. A proposta é democratizar o acesso à informação para que toda a população possa acompanhar a qualidade da água em seu município.

---

## 🧭 Funcionalidades
- 📍 Filtro por **Estado, Município, Mês e Ano**
- 📊 Visualização dos parâmetros químicos e bacteriológicos da água
- 🛑 Alerta para presença de **cianobactérias e toxinas**
- 🚚 Consulta sobre **abastecimento por caminhão-pipa**
- 💧 Informações sobre **pontos oficiais de captação de água**
- 📨 Formulário com **validação de e-mail**
- 🌐 Abertura de links oficiais com `Linking.openURL`

---

## 📲 Telas do App

- `HomeScreen`: Tela inicial com botões de navegação
- `ParametrosControleMensalScreen`: Consulta de qualidade da água com filtros por cidade, mês e ano
- `CianobacteriasScreen`: Exposição a cianobactérias e toxinas
- `CarroPipaScreen`: Abastecimento alternativo por carros-pipa
- `PontosCaptacaoScreen`: Visualização de pontos oficiais de captação
- `FormularioScreen`: Formulário de contato com campos validados
- `AjudaScreen`: Links úteis e suporte
- `SobreScreen`: Detalhes sobre o projeto
- `DesenvolvedoresScreen`: Créditos da equipe

> 🔍 Cada tela apresenta **no mínimo 2 imagens temáticas ilustrativas**.

---

## 🧩 Estratégias de Navegação

- ✅ `Stack Navigator`
- ✅ `ScrollView` para navegação fluida
- ✅ Preparado para futuras extensões com `Drawer` ou `Tabs`

---

## 📸 Prints (exemplo)

| Home | Parâmetros | Cianobactérias |
|------|------------|----------------|
| ![home](./assets/print-home.png) | ![parametros](./assets/print-parametros.png) | ![ciano](./assets/print-ciano.png) |

---

## 🔗 API Integrada

- **SISAGUA - Sistema de Informação da Qualidade da Água para Consumo Humano**
- Portal: [https://apidadosabertos.saude.gov.br](https://apidadosabertos.saude.gov.br)
- Dados consumidos:
  - `/controle-mensal-parametros-basicos`
  - `/vigilancia-cianobacterias-e-cianotoxinas`
  - `/cadastro-carro-pipa`
  - `/ponto-captacao`

---

## 📁 Estrutura de Pastas

```bash
src/
├── assets/                       # Imagens e ícones
├── routes/
│   └── AppRoutes.jsx            # Navegação stack
├── screens/                     # Telas do app
│   ├── AjudaScreen.jsx
│   ├── CarroPipaScreen.jsx
│   ├── CianobacteriasScreen.jsx
│   ├── DesenvolvedoresScreen.jsx
│   ├── FormularioScreen.jsx
│   ├── HomeScreen.jsx
│   ├── ParametrosControleMensalScreen.jsx
│   ├── PontosCaptacaoScreen.jsx
│   └── SobreScreen.jsx
├── services/                    # Integração com APIs
│   ├── carroPipaService.js
│   ├── cianobacteriasService.js
│   ├── ibgeService.js
│   ├── parametrosControleMensalService.js
│   ├── pontosCaptacaoService.js
│   └── vigilanciaParametrosService.js
├── styles/
│   └── ScreensStyle.js          # Estilos globais
├── utils/
│   ├── formatadores.js          # Funções utilitárias
│   ├── montarParametrosCaptacao.js
│   ├── montarParametrosCarroPipa.js
│   ├── montarParametrosCianobacterias.js
│   ├── montarParametrosConsulta.js
│   ├── montarParametrosControleMensal.js
│   └── montarParametrosVigilancia.js
