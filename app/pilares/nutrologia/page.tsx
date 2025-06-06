import React from 'react';



export default function NutrologiaPage() {
  return (
    <>
      
      <main className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          {/* MODIFICAR: Título e subtítulo da página */}
          <div className="text-center mb-16">
            <h1 className="titulo-principal">
              Nutrologia
                </h1>
            <p className="subtitulo-principal">
              Alimentação personalizada e suplementação baseada em evidências para otimização metabólica
            </p>
          </div>
          
          {/* MODIFICAR: Card principal com borda superior verde */}
          <div className="secao-card mb-12">
            <h2 className="secao-titulo">
              Abordagem Nutricional do Desafio Vitalidade
            </h2>
            <p className="texto-card">
              Nossa abordagem nutricional combina os princípios das culinárias mediterrânea e asiática, 
              adaptados às necessidades individuais, com foco na otimização metabólica e suplementação estratégica.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
             <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Autofagia</h3>
                <p className="texto-secundario">
                  Padrão alimentar rico em azeite de oliva, peixes, vegetais, legumes e grãos integrais, 
                  associado à longevidade e saúde cardiovascular.
                </p>
              </div>
              
             <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Telômeros</h3>
                <p className="texto-secundario">
                  Incorporação de alimentos fermentados, chás, algas e especiarias com propriedades 
                  anti-inflamatórias e antioxidantes.
                </p>
              </div>
              
             <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Células-tronco</h3>
                <p className="texto-secundario">
                  Recomendações personalizadas de suplementos baseadas em evidências científicas 
                  para otimização metabólica e celular.
                </p>
              </div>
              
             <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Metabolismo Celular</h3>
                <p className="texto-secundario">
                  Protocolos de exercícios adaptados ao perfil individual, combinados com a 
                  nutrição para maximizar resultados metabólicos.
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
