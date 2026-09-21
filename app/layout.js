import { Quicksand } from 'next/font/google';
import ScrollObserver from '../components/ScrollObserver/ScrollObserver';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rounded',
});

export const metadata = {
  title: 'Dra. Catherine Fuchs | Ultrassonografia em Rio Verde',
  description: 'Médica especialista em Radiologia e Diagnóstico por Imagem.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={quicksand.variable}>
      <body>
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}