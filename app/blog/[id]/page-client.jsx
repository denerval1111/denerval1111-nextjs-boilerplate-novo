"use client";

import React from 'react';
import Link from 'next/link';

export default function PostPage({ postData }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${postData.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: '8px',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <span style={{
          display: 'inline-block',
          backgroundColor: 'rgba(46, 139, 87, 0.8)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '50px',
          fontSize: '0.9rem',
          fontWeight: '500',
          marginBottom: '1.5rem'
        }}>
          {postData.category}
        </span>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: 'bold',
          maxWidth: '900px',
          margin: '0 auto 1.5rem auto'
        }}>
          {postData.title}
        </h1>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          fontSize: '0.9rem'
        }}>
          <span>Por {postData.author}</span>
          <span>•</span>
          <span>{formatDate(postData.date)}</span>
        </div>
      </div>

      {/* Article Content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        marginBottom: '3rem'
      }}>
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </div>

      {/* Call to Action */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#333', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Quer transformar sua saúde e bem-estar?
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#555',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Participe do Desafio Vitalidade e tenha acesso a um programa completo de transformação baseado em ciência.
        </p>
        <Link href="/inscricao" style={{
          display: 'inline-block',
          backgroundColor: '#2E8B57',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '50px',
          fontWeight: '500',
          textDecoration: 'none',
          transition: 'background-color 0.3s ease'
        }}>
          Participe do Desafio Vitalidade
        </Link>
      </div>

      {/* Back to Blog */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <Link href="/blog" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#2E8B57',
          fontWeight: '500',
          textDecoration: 'none'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Voltar para o Blog
        </Link>
      </div>

      <style jsx global>{`
        .blog-content h1 {
          font-size: 2rem;
          font-weight: 700;
          margin: 2rem 0 1rem;
          color: #333;
        }
        
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 600;
          margin: 1.75rem 0 1rem;
          color: #333;
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1.5rem 0 1rem;
          color: #333;
        }
        
        .blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: #444;
        }
        
        .blog-content ul, .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.7;
        }
        
        .blog-content a {
          color: #2E8B57;
          text-decoration: none;
          border-bottom: 1px solid #2E8B57;
        }
        
        .blog-content blockquote {
          border-left: 4px solid #2E8B57;
          padding-left: 1rem;
          font-style: italic;
          margin: 1.5rem 0;
          color: #555;
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem 0;
        }
        
        .blog-content code {
          background-color: #f1f1f1;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
          font-family: monospace;
        }
        
        .blog-content pre {
          background-color: #f1f1f1;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        
        .blog-content hr {
          border: none;
          border-top: 1px solid #eee;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
}

