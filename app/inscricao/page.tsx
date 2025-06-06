import React from 'react';

export default function InscricaoPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cinza-escuro mb-4">Inscreva-se no Desafio Vitalidade</h1>
          <p className="text-xl text-cinza-medio max-w-3xl mx-auto">
            Transforme sua saúde e bem-estar com nosso programa de 30 dias cientificamente desenvolvido.
          </p>
        </div>
        
        {/* Formulário de inscrição */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            {/* Informações pessoais */}
            <div>
              <h2 className="text-2xl font-semibold text-cinza-escuro mb-4">Informações Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-cinza-escuro mb-1">Nome completo</label>
                  <input 
                    type="text" 
                    id="nome" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cinza-escuro mb-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-cinza-escuro mb-1">Telefone</label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="idade" className="block text-sm font-medium text-cinza-escuro mb-1">Idade</label>
                  <input 
                    type="number" 
                    id="idade" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                    placeholder="Sua idade"
                    min="18"
                    max="120"
                  />
                </div>
              </div>
            </div>
            
            {/* Informações de saúde */}
            <div>
              <h2 className="text-2xl font-semibold text-cinza-escuro mb-4">Informações de Saúde</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="objetivos" className="block text-sm font-medium text-cinza-escuro mb-1">Quais são seus principais objetivos?</label>
                  <select 
                    id="objetivos" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="perda-peso">Perda de peso</option>
                    <option value="ganho-energia">Mais energia e disposição</option>
                    <option value="saude-mental">Melhorar saúde mental</option>
                    <option value="longevidade">Aumentar longevidade</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="condicoes" className="block text-sm font-medium text-cinza-escuro mb-1">Possui alguma condição de saúde?</label>
                  <textarea 
                    id="condicoes" 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-verde-vitalidade focus:border-verde-vitalidade"
                    placeholder="Descreva qualquer condição de saúde relevante"
                  ></textarea>
                </div>
              </div>
            </div>
            
            {/* Planos */}
            <div>
              <h2 className="text-2xl font-semibold text-cinza-escuro mb-4">Escolha seu Plano</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-6 hover:border-verde-vitalidade hover:shadow-md transition-all">
                  <input type="radio" id="plano-basico" name="plano" className="mr-2" />
                  <label htmlFor="plano-basico" className="text-lg font-medium text-cinza-escuro">Plano Básico</label>
                  <p className="mt-2 text-cinza-medio">Acesso ao programa de 30 dias com materiais e vídeos</p>
                  <p className="mt-4 text-2xl font-bold text-verde-vitalidade">R$ 497,00</p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 hover:border-verde-vitalidade hover:shadow-md transition-all">
                  <input type="radio" id="plano-premium" name="plano" className="mr-2" />
                  <label htmlFor="plano-premium" className="text-lg font-medium text-cinza-escuro">Plano Premium</label>
                  <p className="mt-2 text-cinza-medio">Acesso ao programa + 2 consultas individuais + grupo exclusivo</p>
                  <p className="mt-4 text-2xl font-bold text-verde-vitalidade">R$ 997,00</p>
                </div>
              </div>
            </div>
            
            {/* Botão de envio */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full bg-verde-vitalidade text-white py-3 px-6 rounded-md font-medium hover:bg-verde-vitalidade/90 transition-colors"
              >
                Inscrever-se Agora
              </button>
              <p className="text-sm text-cinza-medio text-center mt-4">
                Ao se inscrever, você concorda com nossos termos de uso e política de privacidade.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
