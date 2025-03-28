import Image from "next/image";
import { FaSearch, FaHome, FaBook, FaCog, FaBookmark, FaUserCircle, FaBell, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function BooksPage() {
  return (
    <div className="relative w-[1280px] h-[832px] bg-[#F1E8E4] overflow-hidden">
      {/* Sidebar */}
      <div className="absolute left-0 top-0 w-[110px] h-full bg-[#710627] opacity-70 rounded-r-lg flex flex-col items-center pt-5">
        <Image src="https://placehold.co/59x94" width={59} height={94} alt="Logo" className="mb-10" />
        <FaHome className="text-[#F1E8E4] text-4xl mb-8" />
        <FaBook className="text-[#710627] text-4xl bg-white rounded-full p-2 mb-8" />
        <FaBookmark className="text-[#F1E8E4] text-4xl mb-8" />
        <FaCog className="text-[#F1E8E4] text-4xl mb-8" />
        <FaUserCircle className="text-[#F1E8E4] text-4xl mt-auto mb-5" />
      </div>

      {/* Search Bar */}
      <div className="absolute left-[190px] top-[29px] w-[371px] h-[27px] bg-[#495867] opacity-20 rounded-full flex items-center pl-5">
        <FaSearch className="text-[#495867] text-xl" />
        <span className="text-[#495867] text-sm ml-2">Digite o nome do livro, autor, gênero...</span>
      </div>

      {/* Notifications */}
      <FaBell className="absolute right-[50px] top-[36px] text-[#710627] text-4xl" />

      {/* Book Image */}
      <Image src="https://placehold.co/293x447" width={293} height={447} alt="Livro" className="absolute left-[340px] top-[94px] shadow-lg" />

      {/* Book Info */}
      <div className="absolute left-[709px] top-[115px] text-[#000000] text-opacity-48 text-4xl font-medium">
        O Senhor dos Anéis: A Sociedade do Anel
      </div>
      <div className="absolute left-[709px] top-[246px] text-[#495867] text-2xl font-semibold">
        J.R.R Tolkien
      </div>
      <div className="absolute left-[709px] top-[310px] text-[#000000] text-opacity-20 text-lg font-semibold">
        O épico que moldou a fantasia. O Senhor dos Anéis: uma saga atemporal que encanta gerações.
      </div>
      <div className="absolute left-[404px] top-[590px] text-[#000000] text-opacity-20 text-lg font-normal max-w-[522px]">
        No pacífico Condado, a vida do hobbit Frodo Bolseiro muda para sempre ao herdar um anel de seu tio Bilbo. O que parecia um mero tesouro revela-se a chave para o poder sombrio de Sauron, o Senhor do Escuro...
      </div>

      {/* Background Shape */}
      <div className="absolute left-[296px] top-[413px] w-[737px] h-[508px] bg-[#495867] opacity-50 shadow-lg rounded-[80px]" />

      {/* Navigation Buttons */}
      <div className="absolute left-[159px] top-[395px] w-[36px] h-[36px] bg-[#710627] opacity-80 rounded-full flex items-center justify-center">
        <FaArrowLeft className="text-[#F1E8E4] text-xl" />
      </div>
      <div className="absolute right-[91px] top-[392px] w-[36px] h-[36px] bg-[#710627] opacity-80 rounded-full flex items-center justify-center">
        <FaArrowRight className="text-[#F1E8E4] text-xl" />
      </div>

      {/* Action Button */}
      <div className="absolute left-[709px] top-[469px] w-[240px] h-[43px] bg-[#710627] rounded-full flex items-center justify-center text-[#F1E8E4] text-xl font-medium gap-2">
        <FaBookmark className="text-2xl transform rotate-180" /> Quero ler
      </div>
    </div>
  );
}
