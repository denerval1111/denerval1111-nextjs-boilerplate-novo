import React from 'react';

export default function MedicinaRegenerativaPage() {
  return (
    <>
      <main className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          {/* MODIFICAR: Título e subtítulo da página */}
          <div className="text-center mb-16">
            <h1 className="titulo-principal">
              Medicina Regenerativa
            </h1>
            <p className="subtitulo-principal">
              Abordagem não intervencionista para otimização celular e longevidade
            </p>
          </div>
          
          {/* MODIFICAR: Card principal com borda superior verde */}
          <div className="secao-card mb-12">
            <h2 className="secao-titulo">
              O que é Medicina Regenerativa?
            </h2>
            <p className="texto-card">
              A medicina regenerativa não intervencionista foca em estimular os mecanismos naturais do corpo para 
              reparação e regeneração celular, promovendo a longevidade saudável através de protocolos cientificamente validados.
            </p>
            
            {/* Manter o grid, mas modificar cada item */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Autofagia</h3>
                <p className="texto-secundario">
                  Processo natural de limpeza celular que remove componentes danificados e toxinas, 
                  essencial para a saúde celular e longevidade.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Telômeros</h3>
                <p className="texto-secundario">
                  Proteção das extremidades dos cromossomos, cujo comprimento está associado ao 
                  envelhecimento celular e longevidade.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Células-tronco</h3>
                <p className="texto-secundario">
                  Estímulo natural à ativação e funcionamento das células-tronco do próprio corpo, 
                  fundamentais para regeneração tecidual.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Metabolismo Celular</h3>
                <p className="texto-secundario">
                  Otimização das funções mitocondriais e processos energéticos celulares para 
                  melhor desempenho e longevidade.
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

