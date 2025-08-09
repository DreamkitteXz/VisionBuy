# VisionBuy - Aplicação Web com Realidade Aumentada

## Descrição

VisionBuy é uma aplicação web responsiva que permite aos usuários visualizar produtos em Realidade Aumentada (AR) antes de comprar. A plataforma conecta lojas parceiras e consumidores através de uma experiência imersiva de compra.

## Tecnologias Utilizadas

- **React 19** - Framework frontend
- **Tailwind CSS** - Framework de estilização
- **Three.js** - Biblioteca para gráficos 3D
- **@react-three/fiber** - Integração React com Three.js
- **@react-three/drei** - Utilitários para Three.js
- **React Router DOM** - Roteamento
- **Lucide React** - Ícones
- **Vite** - Build tool

## Funcionalidades

### Principais Telas
- **Página Inicial**: Hero section com categorias e produtos em destaque
- **Login/Cadastro**: Sistema de autenticação de usuários
- **Recuperação de Senha**: Fluxo completo de recuperação
- **Favoritos**: Lista de produtos favoritados pelo usuário
- **Lojas Parceiras**: Catálogo de lojas integradas à plataforma
- **Quero ser Parceiro**: Formulário para solicitação de parceria
- **Visualizador AR**: Interface para experiência de Realidade Aumentada

### Funcionalidades WebAR
- Visualização de produtos 3D em tempo real
- Integração com câmera do dispositivo
- Modelos 3D interativos para diferentes categorias:
  - Móveis (poltronas, abajures, plantas)
  - Moda (vestidos, relógios)
  - Beleza (batons)
- Controles de rotação, zoom e reset
- Captura de fotos da experiência AR

### Responsividade
- Design mobile-first
- Navegação adaptativa para dispositivos móveis
- Otimização para touch screens
- Layout flexível para diferentes tamanhos de tela

## Estrutura do Projeto

```
visionbuy/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Layout.jsx     # Layout principal da aplicação
│   │   └── ARScene.jsx    # Componente de cena 3D/AR
│   ├── pages/            # Páginas da aplicação
│   │   ├── Home.jsx      # Página inicial
│   │   ├── Login.jsx     # Página de login
│   │   ├── CreateAccount.jsx # Página de cadastro
│   │   ├── ForgotPassword.jsx # Recuperação de senha
│   │   ├── Favorites.jsx # Página de favoritos
│   │   ├── PartnerStores.jsx # Lojas parceiras
│   │   ├── BecomePartner.jsx # Formulário de parceria
│   │   └── ARViewer.jsx  # Visualizador AR
│   ├── data/
│   │   └── mockData.js   # Dados mockados dos produtos
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados
│   └── main.jsx          # Ponto de entrada
├── package.json          # Dependências do projeto
└── README.md            # Documentação
```

## Dados Mockados

O projeto inclui dados mockados para:
- **6 produtos** em diferentes categorias
- **6 lojas parceiras** com informações completas
- **3 categorias** principais (Moda, Móveis, Beleza)

## Como Executar

### Pré-requisitos
- Node.js 18+ 
- pnpm (ou npm/yarn)

### Instalação
```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Navegar para o diretório
cd visionbuy

# Instalar dependências
pnpm install

# Executar em modo desenvolvimento
pnpm run dev

# Build para produção
pnpm run build
```

### Acesso
- **Desenvolvimento**: http://localhost:5173
- **Produção**: Servir os arquivos da pasta `dist/`

## Funcionalidades WebAR

### Requisitos do Dispositivo
- Navegador moderno com suporte a WebRTC
- Câmera do dispositivo (preferencialmente traseira)
- Aceleração de hardware habilitada

### Como Usar
1. Navegue até um produto
2. Clique em "VISUALIZE EM RA"
3. Permita acesso à câmera
4. Aponte para uma superfície plana
5. Interaja com o modelo 3D

### Controles AR
- **Rotação**: Arrastar para rotacionar o modelo
- **Zoom**: Scroll ou pinch para aproximar/afastar
- **Reset**: Botão para resetar a visualização
- **Captura**: Salvar foto da experiência AR

## Otimizações Implementadas

### Performance
- Lazy loading de componentes
- Otimização de imagens
- Minificação de assets
- Code splitting automático

### Mobile
- Touch gestures para interação 3D
- Interface adaptada para telas pequenas
- Navegação por menu hambúrguer
- Botões otimizados para touch

### Acessibilidade
- Navegação por teclado
- Labels semânticos
- Contraste adequado
- Textos alternativos

## Próximos Passos

### Melhorias Sugeridas
1. **Integração com APIs reais** para produtos e lojas
2. **Sistema de autenticação** completo com backend
3. **Modelos 3D mais detalhados** para produtos
4. **Tracking de superfície** mais avançado para AR
5. **Sistema de pagamento** integrado
6. **Notificações push** para ofertas
7. **Analytics** de uso da funcionalidade AR

### Tecnologias Futuras
- **WebXR** para experiências mais imersivas
- **Machine Learning** para recomendações
- **PWA** para instalação como app nativo
- **WebAssembly** para performance 3D

## Licença

Este projeto foi desenvolvido como demonstração técnica da plataforma VisionBuy.

## Contato

Para dúvidas sobre implementação ou funcionalidades, consulte a documentação técnica ou entre em contato com a equipe de desenvolvimento.

