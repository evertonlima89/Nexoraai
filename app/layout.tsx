import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'NEXORA AI — Autonomous Business Intelligence',description:'Agentes de IA para executar operações empresariais.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}