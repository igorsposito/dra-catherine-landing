import { Plus_Jakarta_Sans } from 'next/font/google'; // Ou a fonte que vocês estavam usando no projeto
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const fontMain = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-main',
});

export const metadata = {
  title: 'Dra. Catherine Fuchs | Radiologia & Diagnóstico por Imagem',
  description: 'Especialista em ultrassonografia para a Saúde da Mulher, Medicina Fetal e Mapeamento de Endometriose.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={fontMain.variable}>
      <body style={{ fontFamily: 'var(--font-main), sans-serif' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}