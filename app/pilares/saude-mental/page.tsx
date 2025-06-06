import React from 'react';


export default function SaudeMentalPage() {
  return (
    <>
      
      <main className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
           {/* MODIFICAR: Título e subtítulo da página */}
          <div className="text-center mb-16">
            <h1 className="titulo-principal">
              Saúde Mental
           </h1>
            <p className="subtitulo-principal">
              Equilíbrio emocional e bem-estar psicológico para uma vida plena
            </p>
          </div>
          
          {/* MODIFICAR: Card principal com borda superior verde */}
          <div className="secao-card mb-12">
            <h2 className="secao-titulo">
              Abordagem Psiquiátrica do Desafio Vitalidade
           </h2>
            <p className="texto-card">
              Nossa abordagem de saúde mental integra técnicas de psiquiatria moderna com práticas de bem-estar 
              emocional e espiritual, focando no enfrentamento dos desafios da vida moderna.
            </p>
            
            {/* Manter o grid, mas modificar cada item */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Autofagia</h3>
                <p className="texto-secundario">
                  Estratégias baseadas em psicologia positiva e neurociência para aumentar a motivação 
                  e manter o engajamento com hábitos saudáveis.
                </p>
              </div>
              
             <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Telômeros</h3>
                <p className="texto-secundario">
                  Técnicas de respiração, mindfulness e regulação emocional para reduzir a ansiedade 
                  e melhorar a qualidade de vida.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Telômeros</h3>
                <p className="texto-secundario">
                  Métodos práticos para superar a procrastinação e desenvolver disciplina consistente 
                  para alcançar objetivos de saúde.
                </p>
              </div>
              
             <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Células-tronco</h3>
                <p className="texto-secundario">
                  Práticas que promovem conexão com propósito e significado, essenciais para 
                  a saúde mental e longevidade.
                </p>
              </div>
            </div>
          </div>
          
         {/* MODIFICAR: Botão de CTA */}
          <div className="text-center mt-12">
            <a 
              href="/inscricao" 
              className="btn-primary"
            >
              Participe do Desafio Vitalidade
            </a>
          </div>
        </div>
      </main>
     
    </>
  );
}
