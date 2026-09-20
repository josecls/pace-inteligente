# Pace Inteligente — Landing Page

Landing page de conversão para o e-book **Pace Inteligente** (R$ 4,99), construída com React, Vite, TypeScript e Tailwind CSS.

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page principal com todas as seções de venda |
| `/obrigado` | Página pós-compra — agradece e orienta o cliente a aguardar o acesso por e-mail e WhatsApp |

Configure a URL de redirecionamento pós-compra na Lowify apontando para `https://seu-dominio.com/obrigado`.

## Configuração

1. Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

2. Edite `.env` com suas variáveis:

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `VITE_LOWIFY_CHECKOUT_URL` | Sim (prod) | URL do checkout Lowify |
| `VITE_SITE_URL` | Recomendada | URL canônica do site |
| `VITE_META_PIXEL_ID` | Não | ID do Meta Pixel |
| `VITE_TERMS_URL` | Não | Link dos Termos de Uso |
| `VITE_PRIVACY_URL` | Não | Link da Política de Privacidade |
| `VITE_CONTACT_URL` | Não | Link de Contato |

## Desenvolvimento local

```bash
npm install
npm run dev
```

Sem `VITE_LOWIFY_CHECKOUT_URL`, os CTAs rolam até a seção `#oferta` e exibem um aviso no console.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

1. Importe o repositório na [Vercel](https://vercel.com).
2. Framework preset: **Vite**.
3. Adicione as variáveis de ambiente do `.env.example` em **Settings → Environment Variables**.
4. Deploy.

O arquivo `vercel.json` já configura rewrites para SPA (incluindo `/obrigado`).

## Estrutura

```text
src/
  components/   # Seções e UI reutilizável
  lib/          # checkout, analytics, hooks
  pages/        # LandingPage, ObrigadoPage
public/
  assets/       # Imagens do produto
```

## Observações

- O PDF em `site-kit-pace-inteligente/reference/` é apenas referência — **não** está em `public/`.
- A página `/obrigado` usa `noindex` e dispara o evento `Purchase` do Meta Pixel quando configurado.
- Atualize `public/sitemap.xml` e `public/robots.txt` com seu domínio real antes do go-live.
