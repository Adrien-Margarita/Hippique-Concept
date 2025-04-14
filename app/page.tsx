import Link from "next/link";
import Form from "./components/ui/Form";

export default function HomePage() {
  return (
    <>
    <div className="px-10">
      <div className="relative w-full">
        <img src="/mainHome.webp" alt="paysage avec deux Sulky" className="rounded-xl" />
        
        {/* Bloc supperposé */}
        <div className="absolute top-8 left-8 h-fit bg-black/25 backdrop-blur-md rounded-xl py-4 px-8 shadow-md w-[25%] flex flex-col justify-evenly gap-3 text-center">
          <h2 className="text-xl font-bold text-white">Au service de vos besoins</h2>
          <p className="text-white text-lg pt-1">
            Des bâtiments pour des solutions énergétiques qui changent le monde et vous facilitent la vie.
          </p>
          <button className="text-white p-3 gold-bg rounded-xl" type='button'><Link href="/etude-faisabilite">Demandez une étude</Link></button>
        </div>

      </div>
      <section className="flex flex-row my-8 gap-4">
        <div className="flex flex-col text-center w-[50%] items-center justify-evenly p-8">
            <h2 className="text-3xl font-bold text-center w-[75%] py-5 border-t-2 border-b-2 border-[color:var(--gold)]">
              Une famille de cavaliers qui s'investit pour les cavaliers
            </h2>
            <p className="text-xl w-[75%]">
            Après une étude de faisabilité, Solaire Hippique Concept et ses partenaires  investisseurs offrent en intégralité, sur toute la France, la  construction de manèges équestres financés par des panneaux solaires.
            </p>
            <button className="text-white p-3 gold-bg rounded-xl w-[40%] text-lg" type='button'><Link href="/etude-faisabilite">En savoir plus</Link></button>
        </div>
        <div className="w-[50%]">
          <img className="rounded-xl" src="/batiment-1.jpg" alt="bâtiment équestre" />
        </div>
      </section>
    </div>

      <div className="h-[22rem] w-screen bg-[url('/view2.jpg')] bg-cover bg-center bg-fixed mb-8">
      </div>

{/* TODO: A VALIDER */}
    {/* <div className="h-80">
      <img src="/abri-de-prairie.webp" alt="abri de prairie" className="w-full h-full object-cover object-center"/>
    </div>  */}
    <div className="px-10">
      <section className="flex flex-col items-center gap-8 border-2 border-[color:var(--gold)] rounded-xl py-8 px-12">
        <button className="text-white p-3 gold-bg rounded-xl w-[40%] text-lg" type='button'><Link href="/a-propos">Qui sommes-nous ?</Link></button>
        <p className="text-xl">Fort de notre expérience dans l'équitation, nous mettons tout en oeuvre pour vous fournir le meilleur dans vos écuries. Nous sommes une entreprise familiale de construction de bâtiments conçus spécialement pour les activités équestres. 
        Nous avons travaillé sur de nombreux projets avec pour objectif de proposer  des solutions d'ingénierie innovantes pour des bâtiments adaptés à la  pratique de l'équitation mais également pour du matériel équestre.<br />
        La qualité des produits est au fondement de notre entreprise. C'est la  force motrice de toutes les décisions importantes qui régissent notre  entreprise.<br />
        N'hésitez pas à nous contacter pour en savoir plus, nous serons ravis de pouvoir  vous aider dans la conception et la réalisation de vos structures et manèges équestres.</p>
      </section>

      <section className="mt-8 relative grid grid-cols-2 grid-rows-2 gap-4">
        {/* Bloc superposé */}
        <div className="absolute z-10 bg-black/25 backdrop-blur-md rounded-xl py-4 px-8 shadow-md h-fit w-[25%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly gap-3 text-center text-white">
          <h2 className="text-xl font-semibold">Équipements d'écuries</h2>
          <p>Gamme d'équipements fabriqués par nos soins. Herses, boxes, barns, cavalettis...</p>
          <button className="text-white p-3 gold-bg rounded-xl w-[80%] mx-auto text-lg" type='button'>
            <Link href="/etude-faisabilite">Voir nos différents équipements</Link>
          </button>
        </div>

        {/* Images grid */}
        <img src="./barns.webp" alt="Barns" className="w-full h-full object-cover rounded-xl" />
        <img src="./lignes-de-boxes-extérieur.webp" alt="Lignes de boxes" className="w-full h-full object-cover rounded-xl" />
        <img src="./marcheur-complet.webp" alt="Marcheur" className="col-span-2 w-full h-full object-cover rounded-xl" />
      </section>
      </div>

      <section className="mt-8 flex">
        {/* Partie gauche */}
        <div className="w-1/2 flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center gap-1 border-2 border-[color:var(--gold)] rounded-xl py-8 px-12 text-xl w-[70%]">
            <h2 className="font-bold mb-3">Contact</h2>
            <p>112 Rue du Docteur Guérin</p>
            <p>83210 La Farlède</p>
            <p>France</p>
            <p className="my-3 font-medium">etude.solaire.concept@gmail.com</p>
            <p>07.72.08.44.06</p>
            <p>04.94.36.00.84</p>
          </div>
          <img src="/logo.jpg" alt="logo Hippique Concept" className="w-1/2"/>
        </div>

        {/* Partie droite */}
        <div className="w-1/2 gold-bg rounded-tl-xl">
          <Form />
        </div>
      </section>
 
    </>
  );
}


