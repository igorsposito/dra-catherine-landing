// app/layout.jsx
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata = {
  title: 'Dra. Catherine Fuchs | Radiologia & Diagnóstico por Imagem',
  description: 'Especialista em ultrassonografia para a Saúde da Mulher, Medicina Fetal e Mapeamento de Endometriose.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}