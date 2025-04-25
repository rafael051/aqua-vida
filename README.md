# 💧 AquaVida – Vigilância da Qualidade da Água no Brasil

Aplicativo desenvolvido em **React Native** com o objetivo de promover a **conscientização e acesso à informação sobre a qualidade da água** em todo o território brasileiro, com base em dados reais do Ministério da Saúde (SISAGUA).

## 🌱 Tema do Projeto
O AquaVida tem como foco uma **questão social fundamental: a saúde pública relacionada à água consumida pela população**. Através da integração com dados governamentais, o aplicativo exibe informações sobre:
- Parâmetros químicos e bacteriológicos
- Presença de cianobactérias e toxinas
- Tratamento e infraestrutura
- População abastecida
- Uso de carros-pipa em áreas vulneráveis
- Pontos de captação de água

## 🧭 Funcionalidades
- 📍 Filtragem por município, ano e mês
- 📊 Visualização dos parâmetros de qualidade da água por localidade
- 🛑 Exibição de alertas sobre presença de cianobactérias
- 🚚 Informações sobre abastecimento por caminhões-pipa
- 💧 Detalhamento dos pontos de captação e tratamento
- 🌐 Acesso direto a sites e recursos oficiais com `Linking`

## 📲 Telas do App
- `HomeScreen`: Tela inicial com navegação principal
- `ParametrosControleMensalScreen`: Qualidade da água (químicos/bacteriológicos)
- `CianobacteriasScreen`: Exposição a cianobactérias
- `CarroPipaScreen`: Dados sobre abastecimento por caminhões-pipa
- `PontosCaptacaoScreen`: Pontos de captação registrados no SISAGUA
- `DesenvolvedoresScreen`: Créditos da equipe

> ✅ Cada tela contém **pelo menos 2 imagens relevantes** contextualizadas com o conteúdo exibido.

## 🧩 Navegação
O app utiliza:
- `Stack Navigator`
- `ScrollView` para layout dinâmico
- (opcional) suporte a navegação futura com `Drawer` ou `BottomTabs`

## 🖼️ Prints do App
| Home | Qualidade da Água | Cianobactérias |
|------|-------------------|----------------|
| ![home](./assets/print-home.png) | ![parametros](./assets/print-parametros.png) | ![ciano](./assets/print-ciano.png) |

*(Inclua aqui suas imagens reais de tela salvas na pasta `assets/`)*

## 📡 API Integrada
- **SISAGUA – Ministério da Saúde (Gov.br)**
    - [https://apidadosabertos.saude.gov.br](https://apidadosabertos.saude.gov.br)
    - Dados de saúde pública, vigilância e abastecimento

## 📝 Formulário
- Tela com **inputs de filtro (Ano, Mês, Município)** e botão "Aplicar filtros"

## 🔗 Recursos Externos
- `Linking.openURL` abre site oficial da Saúde com recursos adicionais

## 🧑‍💻 Desenvolvedores
- **Rafael Rodrigues de Almeida**
- **Lucas Kenji Miyahira**

---

## 📁 Estrutura do Projeto
```bash
src/
├── screens/
│   ├── HomeScreen.jsx
│   ├── ParametrosControleMensalScreen.jsx
│   ├── CarroPipaScreen.jsx
│   ├── CianobacteriasScreen.jsx
│   ├── PontosCaptacaoScreen.jsx
│   └── DesenvolvedoresScreen.jsx
├── services/
│   ├── parametrosMensaisService.js
│   ├── carroPipaService.js
│   ├── cianobacteriasService.js
│   ├── pontosCaptacaoService.js
├── utils/
│   ├── montarParametrosConsulta.js
│   ├── montarParametrosCarroPipa.js
│   ├── montarParametrosVigilancia.js
├── styles/
│   └── ScreensStyle.js
