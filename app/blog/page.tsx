"use client";

import React from 'react';
import ActionButton from '@/components/ActionButton';

export default function BlogPage() {
  // Dados de exemplo para os artigos do blog
  const blogPosts = [
    {
      id: 1,
      title: "Os 5 Hábitos Diários para Aumentar sua Longevidade",
      excerpt: "Descubra práticas simples baseadas em ciência que podem adicionar anos de qualidade à sua vida quando incorporadas à sua rotina diária.",
      date: "05 de Junho, 2025",
      category: "Medicina Regenerativa",
      image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Nutrição Antiinflamatória: O Que Comer e O Que Evitar",
      excerpt: "Um guia completo sobre os alimentos que combatem a inflamação crônica e aqueles que a promovem, com cardápio semanal de exemplo.",
      date: "02 de Junho, 2025",
      category: "Nutrologia",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Técnicas de Respiração para Reduzir Ansiedade em 5 Minutos",
      excerpt: "Aprenda métodos práticos de respiração que podem acalmar seu sistema nervoso e reduzir significativamente os níveis de ansiedade.",
      date: "28 de Maio, 2025",
      category: "Saúde Mental",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Jejum Intermitente: Mitos e Verdades Baseados em Ciência",
      excerpt: "Uma análise aprofundada das pesquisas mais recentes sobre jejum intermitente e seus efeitos reais no metabolismo e composição corporal.",
      date: "25 de Maio, 2025",
      category: "Gerenciamento de Peso",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "O Papel do Sono na Regeneração Celular e Longevidade",
      excerpt: "Como otimizar seu sono para maximizar os processos naturais de reparo e regeneração que ocorrem durante o descanso noturno.",
      date: "20 de Maio, 2025",
      category: "Medicina Regenerativa",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Exercícios de Alta Intensidade vs. Baixa Intensidade: O Que é Melhor?",
      excerpt: "Uma comparação detalhada dos benefícios de diferentes tipos de exercícios e como combiná-los para resultados ótimos.",
      date: "15 de Maio, 2025",
      category: "Gerenciamento de Peso",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 1rem' 
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1513001900722-370f803f498d?w=1920&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Blog Desafio Vitalidade
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          maxWidth: '800px', 
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Artigos, dicas e informações baseadas em ciência sobre longevidade saudável e bem-estar
        </p>
      </div>

      {/* Categorias */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '3rem'
      }}>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#2E8B57',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Todos
        </button>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'white',
          color: '#555',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Medicina Regenerativa
        </button>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'white',
          color: '#555',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Nutrologia
        </button>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'white',
          color: '#555',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Saúde Mental
        </button>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'white',
          color: '#555',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          Gerenciamento de Peso
        </button>
      </div>

      {/* Posts do Blog */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {blogPosts.map(post => (
          <div key={post.id} style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
          }}
          >
            <div style={{
              height: '200px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={post.image} 
                alt={post.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                backgroundColor: '#2E8B57',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}>
                {post.category}
              </div>
            </div>
            <div style={{
              padding: '1.5rem'
            }}>
              <h2 style={{ 
                fontSize: '1.25rem', 
                color: '#343A40', 
                marginBottom: '0.75rem',
                fontWeight: '600',
                lineHeight: '1.4'
              }}>
                {post.title}
              </h2>
              <p style={{ 
                color: '#555', 
                lineHeight: '1.5',
                marginBottom: '1rem',
                fontSize: '0.95rem'
              }}>
                {post.excerpt}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem'
              }}>
                <span style={{
                  color: '#6c757d',
                  fontSize: '0.875rem'
                }}>
                  {post.date}
                </span>
                <a 
                  href={`/blog/${post.id}`}
                  style={{
                    color: '#2E8B57',
                    fontWeight: '500',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  Ler mais
                  <svg 
                    width="16" 
                    height="16" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    style={{marginLeft: '0.25rem'}}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3rem'
      }}>
        <div style={{
          display: 'flex',
          gap: '0.5rem'
        }}>
          <button style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#2E8B57',
            color: 'white',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            1
          </button>
          <button style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            2
          </button>
          <button style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            3
          </button>
          <button style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #ddd',
            borderRadius: '4px',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '3rem 2rem',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#343A40', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Receba Nossos Artigos
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Inscreva-se para receber nossos artigos mais recentes sobre longevidade, saúde e bem-estar diretamente em seu e-mail.
        </p>
        <div style={{
          display: 'flex',
          maxWidth: '500px',
          margin: '0 auto',
          gap: '0.5rem'
        }}>
          <input 
            type="email" 
            placeholder="Seu melhor e-mail" 
            style={{
              flex: '1',
              padding: '0.75rem 1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#2E8B57',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontWeight: '500',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}>
            Inscrever-se
          </button>
        </div>
      </div>
    </div>
  );
}
