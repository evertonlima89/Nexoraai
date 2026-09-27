# NEXORA AI 1.0

MVP SaaS de agentes de IA. Stack: Next.js + Supabase (opcional nesta primeira build) + provedor compatível com Chat Completions.

## Rodar
npm install
cp .env.example .env.local
npm run dev

Sem AI_API_KEY o dashboard funciona em modo demo. Com a chave configurada, `/api/mission` chama o provedor definido por `AI_BASE_URL` e `AI_MODEL`.

## Produção
Configure variáveis de ambiente no provedor de hospedagem. Não commite chaves. Para autenticação/banco, adicionar Supabase usando as variáveis oficiais. Consulte a documentação atual do Supabase e Vercel.
