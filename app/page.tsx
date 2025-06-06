{/* Benefits Section com cards estilizados como na versão anterior */}
<div style={{ 
  backgroundColor: '#f8f9fa', 
  padding: '4rem 0', 
  margin: 0,
  textAlign: 'center'
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
    <h2 style={{
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#343A40'
    }}>
      Benefícios do Desafio Vitalidade
    </h2>
    <p style={{
      fontSize: '1.25rem',
      marginBottom: '3rem',
      color: '#6C757D',
      maxWidth: '800px',
      margin: '0 auto 3rem auto'
    }}>
      Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
    </p>

    {/* Cards de benefícios em grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    }}>
      {/* Benefício 1 */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        padding: '2rem',
        textAlign: 'left',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #f0f0f0',
        borderTop: '4px solid #2E8B57'
      }}>
        <h3 style={{
          fontSize: '1.75rem',
          fontWeight: '600',
          marginBottom: '1rem',
          color: '#343A40'
        }}>
          Abordagem Multidisciplinar
        </h3>
        <p style={{
          color: '#6C757D',
          marginBottom: '1rem',
          lineHeight: '1.6'
        }}>
          Combinamos medicina regenerativa, nutrologia e saúde mental para uma transformação completa.
        </p>
        <p style={{
          color: '#6C757D',
          lineHeight: '1.6'
        }}>
          Nossa abordagem integra diferentes especialidades médicas para tratar o corpo como um todo.
        </p>
      </div>

      {/* Benefício 2 */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        padding: '2rem',
        textAlign: 'left',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        border: '1px solid #f0f0f0',
        borderTop: '4px solid #2E8B57'
      }}>
        <h3 style={{
          fontSize: '1.75rem',
          fontWeight: '600',
          marginBottom: '1rem',
          color: '#343A40'
        }}>
          Baseado em Ciência
        </h3>
        <p style={{
          color: '#6C757D',
          marginBottom: '1rem',
          lineHeight: '1.6'
        }}>
          Protocolos fundamentados em pesquisas científicas recentes sobre longevidade e bem-estar.
        </p>
        <p style={{
          color: '#6C757D',
          lineHeight: '1.6'
        }}>
          Todos os nossos protocolos são baseados em estudos científicos publicados em revistas de alto impacto.
        </p>
      </div>
    </div>
  </div>
</div>




