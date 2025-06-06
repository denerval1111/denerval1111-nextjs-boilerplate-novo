import React from 'react';
import Link from 'next/link';
import SocialIcons from './SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cinza-escuro text-white py-12">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              {/* Removendo a referência "Desafio Vitalidade" conforme solicitado */}
            </Link>
            <p className="text-gray-300 mt-4">
              Transforme sua saúde e bem-estar com nosso programa multidisciplinar baseado em ciência.
            </p>
          </div>
          
          {/* Links Rápidos */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre/programa" className="text-gray-300 hover:text-white transition-colors">
                  O Programa
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="text-gray-300 hover:text-white transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Pilares */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Nossos Pilares</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pilares/medicina-regenerativa" className="text-gray-300 hover:text-white transition-colors">
                  Medicina Regenerativa
                </Link>
              </li>
              <li>
                <Link href="/pilares/nutrologia" className="text-gray-300 hover:text-white transition-colors">
                  Nutrologia
                </Link>
              </li>
              <li>
                <Link href="/pilares/saude-mental" className="text-gray-300 hover:text-white transition-colors">
                  Saúde Mental
                </Link>
              </li>
              <li>
                <Link href="/pilares/gerenciamento-peso" className="text-gray-300 hover:text-white transition-colors">
                  Gerenciamento de Peso
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contato e Redes Sociais */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-300 mb-2">
              Email: contato@desafiovitalidade.com.br
            </p>
            <p className="text-gray-300 mb-4">
              Telefone: (11) 9999-9999
            </p>
            
            <h3 className="text-lg font-semibold mb-2 mt-6">Redes Sociais</h3>
            {/* Substituindo os SVGs inline pelo componente SocialIcons */}
            <SocialIcons />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
   );
}


