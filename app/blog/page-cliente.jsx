"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage({ posts, categories }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 6;

  useEffect(() => {
    if (activeCategory === 'Todos') {
      setFilteredPosts(posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      setFilteredPosts(posts.filter(post => 
        post.category === activeCategory &&
        (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
      ));
    }
    setCurrentPage(1);
  }, [activeCategory, searchTerm, posts]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem 1rem' 
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1920&auto=format&fit=crop )',
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
          Artigos, dicas e informações baseadas em ciência para transformar sua saúde e bem-estar.
        </p>
        
        {/* Search Bar */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="Buscar artigos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1.5rem',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          />
          <svg 
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '20px',
              color: '#666'
            }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* Category Filters */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '2rem',
        justifyContent: 'center'
      }}>
        <button
          onClick={( ) => setActiveCategory('Todos')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: activeCategory === 'Todos' ? '#2E8B57' : '#f1f1f1',
            color: activeCategory === 'Todos' ? 'white' : '#333',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Todos
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: activeCategory === category ? '#2E8B57' : '#f1f1f1',
              color: activeCategory === category ? 'white' : '#333',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      {currentPosts.length > 0 ? (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {currentPosts.map((post) => (
            <div key={post.id} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }} className="hover:shadow-lg hover:-translate-y-1">
              <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#e6f7f0',
                  color: '#2E8B57',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  marginBottom: '0.75rem'
                }}>
                  {post.category}
                </span>
                
                <h2 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#333'
                }}>
                  <Link href={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {post.title}
                  </Link>
                </h2>
                
                <p style={{ 
                  color: '#666',
                  marginBottom: '1rem',
                  lineHeight: '1.6',
                  flexGrow: 1
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto'
                }}>
                  <span style={{ color: '#888', fontSize: '0.9rem' }}>
                    {formatDate(post.date)}
                  </span>
                  
                  <Link href={`/blog/${post.id}`} style={{
                    color: '#2E8B57',
                    fontWeight: '500',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    Ler mais
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          marginBottom: '3rem'
        }}>
          <h3 style={{ fontSize: '1.5rem', color: '#666', marginBottom: '1rem' }}>
            Nenhum artigo encontrado
          </h3>
          <p style={{ color: '#888' }}>
            Tente ajustar seus filtros ou termos de busca.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '3rem'
        }}>
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: currentPage === 1 ? '#f1f1f1' : '#2E8B57',
              color: currentPage === 1 ? '#888' : 'white',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Anterior
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: currentPage === number ? '#2E8B57' : '#f1f1f1',
                color: currentPage === number ? 'white' : '#333',
                cursor: 'pointer'
              }}
            >
              {number}
            </button>
          ))}
          
          <button
            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: currentPage === totalPages ? '#f1f1f1' : '#2E8B57',
              color: currentPage === totalPages ? '#888' : 'white',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
            }}
          >
            Próxima
          </button>
        </div>
      )}

      {/* Newsletter Section */}
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '3rem 2rem',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#333', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Receba Novidades em Primeira Mão
        </h2>
        <p style={{ 
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Inscreva-se em nossa newsletter e receba artigos exclusivos, dicas de saúde e novidades do Desafio Vitalidade.
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
              flex: 1,
              padding: '0.75rem 1rem',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '1rem'
            }}
          />
          <button style={{
            backgroundColor: '#2E8B57',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            border: 'none',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
            Inscrever-se
          </button>
        </div>
      </div>
    </div>
  );
}
