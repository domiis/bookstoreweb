//vão ser adicionados depois com o back import Link from "next/link";
interface NavBarProps { active: "books" | "main"}
//const links = [    { label: "books", href: "/books" },    { label: "main", href: "/main" },]

export default function NavBar(props: NavBarProps) {
    return (<div className="relative bg-fundo overflow-hidden" style={{ width: '1280px', height: '832px' }}>
        {/* Search Label */}
        <div className="absolute text-fundo-secundário text-xl font-sans" style={{ left: '205px', top: '32px' }}>
          search
        </div>
        {/* Search Bar */}
        <div className="absolute bg-fundo-secundário opacity-20 rounded-xl" style={{ width: '371px', height: '27px', left: '190px', top: '29px' }}></div>
        {/* Search Placeholder */}
        <div className="absolute text-fundo-secundário text-sm font-inter" style={{ left: '246px', top: '35px', width: '228px', height: '18px' }}>
          Digite o nome do livro, autor, gênero...
        </div>
  
        {/* Sidebar */}
        <div className="absolute bg-contraste opacity-70 rounded-lg" style={{ width: '110px', height: '832px', left: '0', top: '0' }}></div>
  
        {/* Avatar */}
        <div className="absolute bg-white rounded-full" style={{ width: '47px', height: '47px', left: '28px', top: '250px' }}></div>
  
        {/* Icons */}
        <div className="absolute text-fundo text-4xl font-sans" style={{ left: '32px', top: '252px' }}>home</div>
        <div className="absolute text-fundo text-4xl font-sans" style={{ left: '32px', top: '337px' }}>import_contacts</div>
        <div className="absolute text-fundo text-4xl font-sans" style={{ left: '32px', top: '512px' }}>settings</div>
        <div className="absolute text-fundo text-4xl font-sans" style={{ left: '32px', top: '429px' }}>bookmark</div>
        <div className="absolute text-fundo text-4xl font-sans" style={{ left: '35px', top: '767px' }}>account_circle</div>
  
        {/* Profile Picture */}
        <img src="https://placehold.co/59x94" alt="Profile" className="absolute" style={{ width: '59px', height: '94px', left: '25px', top: '19px' }} />
  
        {/* Notifications */}
        <div className="absolute text-contraste text-4xl font-sans" style={{ left: '1199px', top: '36px' }}>notifications</div>
  
        {/* Arrow Forward */}
        <div className="absolute text-fundo text-3xl font-sans" style={{ left: '1178px', top: '640px' }}>arrow_forward</div>
      </div>
  )
}