import React from 'react';



export default function GerenciamentoPesoPage() {
  return (
    <>
     
      <main className="min-h-screen py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="titulo-principal">
              Gerenciamento de Peso
           </h1>
            <p className="subtitulo-principal">
              Estratégias personalizadas para composição corporal saudável e metabolismo otimizado
            </p>
          </div>
          
          <div className="secao-card mb-12">
            <h2 className="secao-titulo">
              Abordagem de Gerenciamento de Peso do Desafio Vitalidade
          </h2>
            <p className="texto-card">
              Nossa abordagem para gerenciamento de peso vai além da simples perda de quilos, focando na 
              composição corporal ideal, metabolismo saudável e hábitos sustentáveis para o longo prazo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
             <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Autofagia</h3>
                <p className="texto-secundario">
                  Estratégias nutricionais e comportamentais para melhorar a eficiência metabólica 
                  e a utilização de energia pelo corpo.
                </p>
              </div>
              
             <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Telômeros</h3>
                <p className="texto-secundario">
                  Foco na redução de gordura e preservação ou aumento de massa muscular para 
                  um corpo mais funcional e saudável.
                </p>
              </div>
              
              <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Células-tronco</h3>
                <p className="texto-secundario">
                  Desenvolvimento de rotinas alimentares e de atividade física que podem ser 
                  mantidas a longo prazo, evitando o efeito sanfona.
                </p>
              </div>
              
               <div className="border-l-4 border-verde-vitalidade pl-4">
                <h3 className="texto-card font-medium mb-3 text-cinza-escuro">Metabolismo Celular</h3>
                <p className="texto-secundario">
                  Reconhecimento das diferenças individuais em metabolismo, genética e estilo de vida 
                  para criar estratégias verdadeiramente eficazes.
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
