import React from 'react';
import Footer from '@/components/Footer';
import PillarsSection from '@/components/PillarsSection';

export default function HomePage() {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section com classes padronizadas */}
      <div className="bg-image center-image" style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh', 
        minHeight: '600px',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&auto=format&fit=crop )',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        margin: 0,
        padding: 0,
        borderBottom: '5px solid #333'
      }} >
        <div style={{ maxWidth: '800px', padding: '20px' }}>
          <h1 className="titulo-principal" style={{ 
            color: 'white',
            fontSize: '3.5rem', 
            fontWeight: 'bold',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Envelheça com Vitalidade: Transforme sua Saúde em 30 Dias
          </h1>
          <p className="subtitulo-principal" style={{ 
            color: 'white',
            fontSize: '1.5rem',
            marginBottom: '2rem'
          }}>
            Um programa multidisciplinar baseado em ciência para longevidade saudável
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <a href="/inscricao" style={{ 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.375rem', 
              fontWeight: 'bold', 
              textDecoration: 'none', 
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }} >
              Inscreva-se Agora
            </a>
            <a href="/sobre/programa" style={{ 
              backgroundColor: 'transparent', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.375rem', 
              fontWeight: 'bold', 
              textDecoration: 'none', 
              border: '1px solid white', 
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }} >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section com classes padronizadas */}
      <div style={{ backgroundColor: 'white', padding: '2rem 0', margin: 0 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h2 className="titulo-principal" style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#343A40'
          }}>
            Benefícios do Desafio Vitalidade
          </h2>
          <p className="subtitulo-principal" style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            color: '#6C757D'
          }}>
            Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
          </p>

          {/* Benefícios em grid com classes padronizadas */}
          <div className="cards-container">
            {/* Benefício 1 */}
            <div className="secao-card">
              <h3 className="secao-titulo">Abordagem Multidisciplinar</h3>
              <p className="texto-card">Combinamos medicina regenerativa, nutrologia e saúde mental para uma transformação completa.</p>
              <p className="texto-secundario">Nossa abordagem integra diferentes especialidades médicas para tratar o corpo como um todo.</p>
            </div>

            {/* Benefício 2 */}
            <div className="secao-card">
              <h3 className="secao-titulo">Baseado em Ciência</h3>
              <p className="texto-card">Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.</p>
              <p className="texto-secundario">Todos os nossos protocolos são baseados em estudos científicos publicados em revistas de alto impacto.</p>
            </div>
          </div>
        </div>
      </div>

      <PillarsSection />
    </div>
  );
}



