
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Isaac Mascena & Associados',
  description: 'Inteligência jurídica para Negócios e Investimentos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-white text-gray-900">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
            <Link href="/">
              <Image src="/logo.png" alt="Mascena Advocacia" width={160} height={60} priority />
            </Link>
            <nav className="space-x-4 font-semibold text-sm">
              <a href="#sobre" className="hover:text-blue-700">Sobre</a>
              <a href="#atuacao" className="hover:text-blue-700">Áreas</a>
              <a href="#equipe" className="hover:text-blue-700">Equipe</a>
              <a href="#contato" className="hover:text-blue-700">Contato</a>
              <a href="https://wa.me/5582999997090" target="_blank" className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">WhatsApp</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 text-center text-sm py-6 mt-16 text-gray-600">
          <div className="mb-2">
            <a href="https://wa.me/5582999997090" target="_blank" className="text-green-600 font-semibold hover:underline">
              Fale conosco via WhatsApp
            </a>
          </div>
          © {new Date().getFullYear()} Isaac Mascena & Associados. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
