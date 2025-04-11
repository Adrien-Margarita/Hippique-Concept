import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative w-full max-w-2x1 mx-auto">
      <img src="/mainHome.webp" alt="Photo d'un paysage avec deux Sulky" className="rounded-xl"/>
      <div className="absolute top-8 left-8 bg-black/05 backdrop-blur-md rounded-xl p-4 shadow-md max-w-xs h-50 flex flex-col justify-evenly">
        <h2 className="text-s font-bold text-white">Au service de vos besoins</h2>
        <p className="text-white text-xs pt-1">
        Des bâtiments pour des solutions énergétiques qui changent le monde et vous facilitent la vie.
        </p>
        <button className="text-white p-3 gold-bg rounded-xl mt-3"><Link href="/etude-faisabilite">Demandez une étude</Link></button>
      </div>
    </div>
  );
}
