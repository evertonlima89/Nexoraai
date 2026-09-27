import {NextResponse} from 'next'
export async function POST(req:Request){const {mission}=await req.json();if(!mission)return NextResponse.json({error:'Informe uma missão.'},{status:400});const key=process.env.AI_API_KEY;if(!key)return NextResponse.json({result:`MODO DEMO

Missão recebida:
${mission}

Para ativar a execução real por IA, configure AI_API_KEY e, opcionalmente, AI_BASE_URL e AI_MODEL no ambiente do servidor.`});const base=(process.env.AI_BASE_URL||'https://api.openai.com/v1').replace(/\/$/,'');const model=process.env.AI_MODEL||'gpt-5.6';const r=await fetch(`${base}/chat/completions`,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${key}`},body:JSON.stringify({model,messages:[{role:'system',content:'Você é o Orchestrator da NEXORA AI. Coordene uma resposta empresarial prática. Não invente dados, não faça ações externas sem autorização e sinalize tarefas que exigem revisão humana.'},{role:'user',content:mission}],temperature:.3})});if(!r.ok)return NextResponse.json({error:'Falha no provedor de IA.'},{status:502});const d=await r.json();return NextResponse.json({result:d.choices?.[0]?.message?.content||'Sem resposta.'})}