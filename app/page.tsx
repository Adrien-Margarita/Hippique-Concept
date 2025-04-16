import Link from "next/link";
import Form from "./components/ui/Form";

export default function HomePage() {
  return (
    <>
    <div className="overflow-x-hidden flex flex-col items-center">
      <div className="w-full max-w-[2400px] xl:px-10 xl:mt-10 mt-4 px-4">
        <div className="relative w-full">
          <img src="/mainHome.webp" alt="paysage avec deux Sulky" className="rounded-xl w-full" />
          
          {/* Bloc supperposé */}
          <div className="absolute sm:top-8 sm:left-8 bottom-0 h-fit bg-black/25 backdrop-blur-md rounded-xl py-2 sm:py-4 px-4 sm:px-8 shadow-md xl:w-1/4 flex flex-col justify-evenly gap-1 sm:gap-3 text-center w-[100%] sm:w-[40%] lg:w-1/2 ">
            <h2 className="text-s sm:text-xl font-bold text-white">Au service de vos besoins</h2>
            <p className="text-white text-xs md:text-lg sm:pt-1">
              Des bâtiments pour des solutions énergétiques qui changent le monde et vous facilitent la vie.
            </p>
            <button className="text-white p-1.5 sm:p-3 gold-bg rounded-xl text-xs md:text-lg hover:shadow-lg hover:brightness-110 transition-all duration-300" type='button'><Link href="/etude-faisabilite">Demandez une étude</Link></button>
          </div>
        </div>
        
        <section className="flex flex-col md:flex-row my-4 lg:my-8 lg:gap-4">
          <div className="flex flex-col text-center sm:w-1/2 items-center justify-evenly p-4 lg:p-8">
              <h2 className="lg:text-3xl text-lg font-bold text-center lg:w-[75%] py-5 border-t-2 border-b-2 border-[color:var(--gold)]">
                Une famille de cavaliers qui s'investit pour les cavaliers
              </h2>
              <p className="lg:text-xl text-base lg:w-3/4 py-4">
              Après une étude de faisabilité, Solaire Hippique Concept et ses partenaires investisseurs offrent en intégralité, sur toute la France, la construction de manèges équestres financés par des panneaux solaires.
              </p>
              <button className="text-white p-3 gold-bg rounded-xl w-[80%] sm:w-[40%] text-lg hover:shadow-lg hover:brightness-110 transition-all duration-300" type='button'><Link href="/etude-faisabilite">En savoir plus</Link></button>
          </div>
          <div className="sm:w-1/2">
            <img className="rounded-xl w-full" src="/batiment-1.jpg" alt="bâtiment équestre" />
          </div>
        </section>
      </div>
      
      {/* Fond déroulant - full width */}
      <div className="h-[10rem] sm:h-[16rem] lg:h-[28rem] w-full bg-[url('/abri-de-prairie.webp')] sm:bg-[url('/view3.jpg')] bg-cover bg-left lg:bg-center sm:bg-fixed mb-4 lg:mb-8">
      </div>

      <div className="w-full max-w-[2400px] px-4 lg:px-10">
        <section className="flex flex-col items-center gap-8 border-2 border-[color:var(--gold)] rounded-xl sm:py-8 py-6 px-8 sm:px-12">
          <button className="text-white p-3 gold-bg rounded-xl w-[80%] sm:w-[40%] text-lg hover:shadow-lg hover:brightness-110 transition-all duration-300" type='button'><Link href="/a-propos">Qui sommes-nous ?</Link></button>
          <p className="text-base sm:text-xl text-justify">Fort de notre expérience dans l'équitation, nous mettons tout en oeuvre pour vous fournir le meilleur dans vos écuries. Nous sommes une entreprise familiale de construction de bâtiments conçus spécialement pour les activités équestres. 
          Nous avons travaillé sur de nombreux projets avec pour objectif de proposer des solutions d'ingénierie innovantes pour des bâtiments adaptés à la pratique de l'équitation mais également pour du matériel équestre.<br />
          La qualité des produits est au fondement de notre entreprise. C'est la  force motrice de toutes les décisions importantes qui régissent notre  entreprise.<br />
          N'hésitez pas à nous contacter pour en savoir plus, nous serons ravis de pouvoir vous aider dans la conception et la réalisation de vos structures et manèges équestres.</p>
        </section>

        <section className="mt-4 lg:mt-8 relative grid grid-cols-2 grid-rows-2 gap-4">
          {/* Bloc superposé */}
          <div className="absolute z-10 bg-black/25 backdrop-blur-md rounded-xl py-4 px-4 lg:px-8 shadow-md h-fit w-3/4 sm:w-1/2 lg:w-1/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly gap-1.5 sm:gap-3 text-center text-white">
            <h2 className="text-s md:text-xl font-semibold">Équipements d'écuries</h2>
            <p className="text-xs md:text-base">Gamme d'équipements fabriqués par nos soins. Herses, boxes, barns, cavalettis...</p>
            <button className="text-white p-1.5 md:p-3 gold-bg rounded-xl w-[80%] mx-auto text-xs md:text-lg hover:shadow-lg hover:brightness-110 transition-all duration-300" type='button'>
              <Link href="/etude-faisabilite">Voir nos différents équipements</Link>
            </button>
          </div>

          {/* Images grid */}
          <img src="./barns.webp" alt="Barns" className="w-full h-full object-cover rounded-xl" />
          <img src="./lignes-de-boxes-extérieur.webp" alt="Lignes de boxes" className="w-full h-full object-cover rounded-xl" />
          <img src="./marcheur-complet.webp" alt="Marcheur" className="col-span-2 w-full h-full object-cover rounded-xl" />
        </section>
      </div>

      {/* Section de contact - conteneur limité */}
      <div className="w-full max-w-[2400px] mt-4 lg:mt-8">
        <section className="lg:flex">
          {/* Partie gauche */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center lg:gap-4">
            <div className="flex flex-col items-center gap-1 border-2 border-[color:var(--gold)] rounded-xl py-6 lg:py-8 px-8 md:px-12 text-s md:text-xl w-[80%] lg:w-[70%]">
              <img src="/logo.jpg" alt="logo Hippique Concept" className="w-1/2 md:w-[40%]"/>
              <h2 className="font-bold mb-1.5 lg:mb-3">Contact</h2>
              <p>112 Rue du Docteur Guérin</p>
              <p>83210 La Farlède</p>
              <p>France</p>
              <p className="my-1.5 lg:my-3 font-medium">etude.solaire.concept@gmail.com</p>
              <p>07.72.08.44.06</p>
              <p>04.94.36.00.84</p>
            </div>
          </div>

          {/* Partie droite */}
          <div className="mt-4 lg:mt-0 lg:w-1/2 gold-bg lg:rounded-tl-xl lg:rounded-bl-xl form-rounded-3xl">
            <Form />
          </div>
        </section>
      </div>
    </div>
    </>
  );
}