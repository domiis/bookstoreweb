import React from 'react';
import Image from 'next/image';  
import NavBar from '@/components/nav-bar';

export default function MainPage() {
  // Dados fictícios para as recomendações
  const recommendations = [
    { title: "O Senhor dos Anéis: A Sociedade do Anel", imageUrl: "https://placehold.co/124x190" },
    { title: "Admirável Mundo Novo", imageUrl: "https://placehold.co/127x188" },
    { title: "A Hora da Estrela", imageUrl: "https://placehold.co/126x188" },
    { title: "As Vantagens de ser Invisível", imageUrl: "https://placehold.co/126x188" },
    { title: "Os dois morrem no final", imageUrl: "https://placehold.co/126x188" },
  ];
  return (
    <>
      <NavBar active= "main" />

      <main className="flex justify-center items-center">
        <div className="relative bg-[#F1E8E4] min-w-[1280px] min-h-[832px] p-6">
          <div className="absolute top-32 left-32 text-[#495867] text-4xl font-bold">
            ---Mensagem de olá
          </div>
          <div className="absolute top-480 left-32 text-[#495867] text-xl font-semibold">
            Recomendações para você
          </div>

          {/* Lista de livros recomendados */}
          <div className="flex justify-around items-center mt-10">
            {recommendations.map((book, index) => (
              <div key={index} className="text-center">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-32 h-48 shadow-lg mb-2"
                />
                <div className="text-[#495867] text-sm font-medium">{book.title}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}