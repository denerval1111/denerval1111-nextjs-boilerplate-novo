"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Controla o efeito de scroll para mudar a aparência do menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Fecha o menu mobile quando a rota muda
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Verifica se o link está ativo
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  // Verifica se um link de submenu está ativo
  const isSubActive = (paths: string[]) => {
    return paths.some(path => pathname.startsWith(path));
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      style={{
        backgroundColor: scrolled ? 'white' : 'rgba(255, 255, 255, 0.9)',
        boxShadow: scrolled ? '0 4px 6px rgba(0, 0, 0, 0.05)' : 'none',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#2E8B57',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center'
        }}>
          Desafio Vitalidade
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/" active={isActive('/')}>
            Início
          </NavLink>
          
          {/* Dropdown - Sobre */}
          <div style={{ position: 'relative' }} className="group">
            <button 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: isSubActive(['/sobre', '/depoimentos']) ? '#2E8B57' : '#343A40',
                fontWeight: '500',
                padding: '0.5rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'relative'
              }}
              className="hover:text-verde-vitalidade transition-colors"
            >
              Sobre
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                width: '200px',
                opacity: 0,
                visibility: 'hidden',
                transition: 'all 0.2s ease',
                transformOrigin: 'top center',
                padding: '0.5rem 0',
                marginTop: '0.5rem'
              }}
              className="group-hover:opacity-100 group-hover:visible"
            >
              {/* Seta do dropdown */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%) rotate(45deg)',
                width: '16px',
                height: '16px',
                backgroundColor: 'white',
                zIndex: -1
              }}></div>
              
              <DropdownLink href="/sobre/programa" active={isActive('/sobre/programa')}>
                O Programa
              </DropdownLink>
              <DropdownLink href="/sobre/equipe" active={isActive('/sobre/equipe')}>
                Nossa Equipe
              </DropdownLink>
              <DropdownLink href="/depoimentos" active={isActive('/depoimentos')}>
                Depoimentos
              </DropdownLink>
            </div>
          </div>
          
          {/* Dropdown - Pilares */}
          <div style={{ position: 'relative' }} className="group">
            <button 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                color: isSubActive(['/pilares']) ? '#2E8B57' : '#343A40',
                fontWeight: '500',
                padding: '0.5rem 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              className="hover:text-verde-vitalidade transition-colors"
            >
              Pilares
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                width: '220px',
                opacity: 0,
                visibility: 'hidden',
                transition: 'all 0.2s ease',
                transformOrigin: 'top center',
                padding: '0.5rem 0',
                marginTop: '0.5rem'
              }}
              className="group-hover:opacity-100 group-hover:visible"
            >
              {/* Seta do dropdown */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%) rotate(45deg)',
                width: '16px',
                height: '16px',
                backgroundColor: 'white',
                zIndex: -1
              }}></div>
              
              <DropdownLink href="/pilares/medicina-regenerativa" active={isActive('/pilares/medicina-regenerativa')}>
                Medicina Regenerativa
              </DropdownLink>
              <DropdownLink href="/pilares/nutrologia" active={isActive('/pilares/nutrologia')}>
                Nutrologia
              </DropdownLink>
              <DropdownLink href="/pilares/saude-mental" active={isActive('/pilares/saude-mental')}>
                Saúde Mental
              </DropdownLink>
              <DropdownLink href="/pilares/gerenciamento-peso" active={isActive('/pilares/gerenciamento-peso')}>
                Gerenciamento de Peso
              </DropdownLink>
            </div>
          </div>
          
          <NavLink href="/blog" active={isActive('/blog')}>
            Blog
          </NavLink>
          
          <NavLink href="/contato" active={isActive('/contato')}>
            Contato
          </NavLink>
          
          <Link href="/inscricao" style={{
            backgroundColor: '#2E8B57',
            color: 'white',
            padding: '0.5rem 1.25rem',
            borderRadius: '4px',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 4px rgba(46, 139, 87, 0.25)'
          }} className="hover:bg-opacity-90 hover:shadow-md">
            Inscreva-se
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="flex flex-col justify-between w-6 h-[18px] bg-transparent border-none cursor-pointer p-0 md:hidden"
          aria-label="Menu"
        >
          <span style={{
            display: 'block',
            height: '2px',
            width: '100%',
            backgroundColor: '#343A40',
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></span>
          <span style={{
            display: 'block',
            height: '2px',
            width: '100%',
            backgroundColor: '#343A40',
            transition: 'all 0.3s ease',
            opacity: mobileMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            display: 'block',
            height: '2px',
            width: '100%',
            backgroundColor: '#343A40',
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
          }}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: scrolled ? '60px' : '76px',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 40,
        padding: '1.5rem',
        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        overflowY: 'auto'
      }}>
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          <MobileNavLink href="/" active={isActive('/')}>
            Início
          </MobileNavLink>
          
          {/* Mobile Dropdown - Sobre */}
          <MobileAccordion title="Sobre" active={isSubActive(['/sobre', '/depoimentos'])}>
            <MobileNavLink href="/sobre/programa" active={isActive('/sobre/programa')} indent={true}>
              O Programa
            </MobileNavLink>
            <MobileNavLink href="/sobre/equipe" active={isActive('/sobre/equipe')} indent={true}>
              Nossa Equipe
            </MobileNavLink>
            <MobileNavLink href="/depoimentos" active={isActive('/depoimentos')} indent={true}>
              Depoimentos
            </MobileNavLink>
          </MobileAccordion>
          
          {/* Mobile Dropdown - Pilares */}
          <MobileAccordion title="Pilares" active={isSubActive(['/pilares'])}>
            <MobileNavLink href="/pilares/medicina-regenerativa" active={isActive('/pilares/medicina-regenerativa')} indent={true}>
              Medicina Regenerativa
            </MobileNavLink>
            <MobileNavLink href="/pilares/nutrologia" active={isActive('/pilares/nutrologia')} indent={true}>
              Nutrologia
            </MobileNavLink>
            <MobileNavLink href="/pilares/saude-mental" active={isActive('/pilares/saude-mental')} indent={true}>
              Saúde Mental
            </MobileNavLink>
            <MobileNavLink href="/pilares/gerenciamento-peso" active={isActive('/pilares/gerenciamento-peso')} indent={true}>
              Gerenciamento de Peso
            </MobileNavLink>
          </MobileAccordion>
          
          <MobileNavLink href="/blog" active={isActive('/blog')}>
            Blog
          </MobileNavLink>
          
          <MobileNavLink href="/contato" active={isActive('/contato')}>
            Contato
          </MobileNavLink>
          
          <Link href="/inscricao" style={{
            backgroundColor: '#2E8B57',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '4px',
            fontWeight: '500',
            textDecoration: 'none',
            textAlign: 'center',
            marginTop: '1rem'
          }}>
            Inscreva-se
          </Link>
        </nav>
      </div>
    </header>
  );
}

// Componente de link de navegação desktop
function NavLink({ href, active, children }: { href: string, active: boolean, children: React.ReactNode }) {
  return (
    <Link href={href} style={{
      color: active ? '#2E8B57' : '#343A40',
      fontWeight: '500',
      textDecoration: 'none',
      padding: '0.5rem 0',
      position: 'relative'
    }} className="hover:text-verde-vitalidade transition-colors">
      {children}
      {active && (
        <span style={{
          position: 'absolute',
          bottom: '-2px',
          left: '0',
          right: '0',
          height: '2px',
          backgroundColor: '#2E8B57',
          borderRadius: '1px'
        }}></span>
      )}
    </Link>
  );
}

// Componente de link do dropdown
function DropdownLink({ href, active, children }: { href: string, active: boolean, children: React.ReactNode }) {
  return (
    <Link href={href} style={{
      display: 'block',
      padding: '0.75rem 1rem',
      color: active ? '#2E8B57' : '#343A40',
      textDecoration: 'none',
      fontSize: '0.95rem',
      backgroundColor: active ? 'rgba(46, 139, 87, 0.05)' : 'transparent'
    }} className="hover:bg-gray-50 hover:text-verde-vitalidade transition-colors">
      {children}
    </Link>
  );
}

// Componente de link de navegação mobile
function MobileNavLink({ href, active, indent = false, children }: { href: string, active: boolean, indent?: boolean, children: React.ReactNode }) {
  return (
    <Link href={href} style={{
      display: 'block',
      color: active ? '#2E8B57' : '#343A40',
      fontWeight: '500',
      textDecoration: 'none',
      padding: indent ? '0.5rem 0 0.5rem 1rem' : '0.5rem 0',
      borderLeft: indent ? (active ? '2px solid #2E8B57' : '2px solid transparent') : 'none',
      marginLeft: indent ? '1rem' : '0'
    }}>
      {children}
    </Link>
  );
}

// Componente de acordeão para menu mobile
function MobileAccordion({ title, active, children }: { title: string, active: boolean, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(active);
  
  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          color: active ? '#2E8B57' : '#343A40',
          fontWeight: '500',
          background: 'none',
          border: 'none',
          padding: '0.5rem 0',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        {title}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.3s ease'
          }}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      
      <div style={{
        height: isOpen ? 'auto' : '0',
        overflow: 'hidden',
        transition: 'height 0.3s ease',
        marginTop: isOpen ? '0.5rem' : '0',
        marginBottom: isOpen ? '0.5rem' : '0',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        {isOpen && children}
      </div>
    </div>
  );
}

