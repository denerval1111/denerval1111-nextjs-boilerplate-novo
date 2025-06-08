"use client";

import React from 'react';
import Link from 'next/link';

export default function PostPage({ post }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div style={{ 
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: '2rem 1rem' 
    }}>
      {/* Hero Section */}
      <div style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${post.image})`,
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
          padding: '0.25rem 0.75rem',
          borderRadius: '50px',
          fontSize: '0.9rem',
          fontWeight: '500',
          marginBottom: '1rem'
        }}>
          {post.category}
        </span>
        
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          {post.title}
        </h1>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          marginTop: '1.5rem'
        }}>
          <span style={{ fontSize: '0.95rem' }}>
            Por {post.author}
          </span>
          <span style={{ fontSize: '0.95rem' }}>
            {formatDate(post.date)}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <article style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        marginBottom: '3rem'
      }}>
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
          style={{
            lineHeight: '1.8',
            color: '#333'
          }}
        />
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #eee'
          }}>
            {post.tags.map((tag) => (
              <Link 
                key={tag} 
                href={`/blog/tag/${tag}`}
                style={{
                  backgroundColor: '#f1f1f1',
                  color: '#666',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                className="hover:bg-gray-200"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
      </article>

      {/* Call to Action */}
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          color: '#333', 
          marginBottom: '1rem',
          fontWeight: '600'
        }}>
          Pronto para transformar sua saúde?
        </h2>
        <p style={{ 
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto 2rem auto',
          lineHeight: '1.6'
        }}>
          Junte-se ao Desafio Vitalidade e tenha acesso a um programa completo de transformação baseado em ciência.
        </p>
        
        <Link href="/inscricao" style={{
          backgroundColor: '#2E8B57',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '4px',
          fontWeight: '500',
          textDecoration: 'none',
          display: 'inline-block',
          transition: 'all 0.3s ease'
        }} className="hover:bg-opacity-90">
          Participe do Desafio Vitalidade
        </Link>
      </div>

      {/* Back to Blog */}
      <div style={{
        textAlign: 'center'
      }}>
        <Link href="/blog" style={{
          color: '#2E8B57',
          fontWeight: '500',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Voltar para o Blog
        </Link>
      </div>
      
      {/* Add custom CSS for blog content */}
      <style jsx global>{`
        .blog-content h1 {
          font-size: 2.25rem;
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
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }
        
        .blog-content ul, .blog-content ol {
          margin: 1.25rem 0;
          padding-left: 1.5rem;
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        
        .blog-content a {
          color: #2E8B57;
          text-decoration: none;
        }
        
        .blog-content a:hover {
          text-decoration: underline;
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
