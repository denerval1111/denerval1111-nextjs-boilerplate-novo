import React from 'react';
import Link from 'next/link';


export default function ProgramaPage() {
  return (
    <>
      <main className="pt-16 pb-20">
        <section className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="mb-6">O Programa Desafio Vitalidade</h1>
            <p className="text-xl text-gray-700">
              Um programa multidisciplinar de 30 dias baseado em ciência para transformar sua saúde e longevidade.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Visão Geral</h2>
            <p className="mb-4">
              O Desafio Vitalidade é um programa de transformação de 30 dias que integra os mais recentes avanços científicos em medicina regenerativa não intervencionista, nutrologia, saúde mental e gerenciamento de peso.
            </p>
            <p className="mb-4">
              Desenvolvido por uma equipe multidisciplinar de especialistas, o programa oferece uma abordagem completa para melhorar sua saúde, aumentar sua energia e promover longevidade saudável.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-verde-vitalidade text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Avaliação Inicial</h3>
                <p>
                  Começamos com uma avaliação completa do seu estado atual de saúde.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-verde-vitalidade text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Implementação Guiada</h3>
                <p>
                  Durante 30 dias, você seguirá um plano personalizado.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-verde-vitalidade text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Acompanhamento Contínuo</h3>
                <p>
                  Após o período inicial, você receberá orientações para manter os resultados.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para Transformar sua Saúde?</h2>
            <p className="text-xl mb-8">
              Junte-se a milhares de pessoas que já transformaram sua saúde e qualidade de vida.
            </p>
            <Link href="/inscricao" className="btn-primary text-lg px-8 py-4">
              Inscreva-se Agora
            </Link>
          </div>
        </section>
      </main>
     
    </>
  );
}



