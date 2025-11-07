# Sistema de Agendamento de Barbearia

## Descrição
Sistema com estética old money/velho oeste para barbearia, com foco em um simulador de agendamentos que permite aos clientes marcarem serviços na barbearia estilo old money.

## Tecnologias
- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Entry point
│   └── router.tsx         # Configuração de rotas
├── core/                   # Componentes e lógica compartilhada
│   ├── components/        # Componentes UI genéricos
│   ├── lib/               # Configurações de bibliotecas
│   ├── types/             # Tipos TypeScript globais
│   └── utils/             # Funções utilitárias
├── pages/                  # Páginas da aplicação
│   ├── layouts/           # Layouts compartilhados
│   ├── Home/              # Página inicial
│   └── NotFound/          # Página 404
├── domain/                 # Domínios de negócio (a serem criados)
└── assets/                 # Recursos estáticos
    └── styles/            # Estilos globais
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente:
```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3001`

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Tema Old Money

O projeto utiliza uma paleta de cores inspirada no estilo old money:

- **Gold**: #D4AF37 (Dourado principal)
- **Dark Gold**: #B8941F (Dourado escuro)
- **Brown**: #8B4513 (Marrom)
- **Dark Brown**: #654321 (Marrom escuro)
- **Cream**: #F5F5DC (Creme)
- **Dark Cream**: #E8E8D0 (Creme escuro)
- **Leather**: #C19A6B (Couro)
- **Mahogany**: #420D09 (Mogno)

## Fontes

- **Serif**: Playfair Display (títulos e elementos elegantes)
- **Sans**: Montserrat (texto corpo e elementos modernos)

## Arquitetura

O projeto segue uma arquitetura modular baseada em domínios:

- **app/**: Configuração central da aplicação
- **core/**: Componentes e lógica reutilizáveis
- **pages/**: Componentes de página com roteamento
- **domain/**: Módulos de negócio específicos (a serem implementados)

## API Integration

O projeto está configurado para integrar com uma API REST:

- **Public endpoints**: `/api/v1/external/*`
- **Authenticated endpoints**: `/api/v1/internal/*`

## Próximos Passos

1. Implementar autenticação
2. Criar domínios de negócio (agendamentos, clientes, serviços)
3. Desenvolver páginas específicas
4. Adicionar testes
5. Implementar notificações

## Licença

Private