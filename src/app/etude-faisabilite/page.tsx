import Form from "@/app/components/ui/Form";
import Image from "next/image";

export default function EtudeFaisabilitePage() {
  return (
    <div className="overflow-x-hidden flex flex-col items-center">
      <div className="w-full max-w-[2400px] xl:px-10 xl:mt-10 mt-4 px-4">
        {/* Image Hero avec texte superposé */}
        <div className="relative w-full">
          <Image
            src="/abri-de-prairie.webp"
            alt="abri de prairie"
            width={2400}
            height={1200}
            className="rounded-xl w-full object-cover max-h-[400px]"
          />
          <div className="absolute bottom-4 right-4 sm:top-6 sm:right-6 bg-black/30 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-lg w-1/2 sm:w-1/3 md:w-1/3 xl:w-1/4">
            <h1 className="text-xl sm:text-2xl font-bold text-white">Demandez votre étude de faisabilité</h1>
            <p className="text-white text-sm sm:text-base mt-2">
              Nous analysons votre projet et votre terrain pour vous proposer la solution la plus adaptée.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section className="my-6 lg:my-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b-2 border-[color:var(--gold)] inline-block pb-1">Une expertise à votre service</h2>
          <p className="text-base sm:text-lg">
            L’étude de faisabilité est la première étape essentielle pour concrétiser votre projet. 
            Remplissez le formulaire ci-dessous, et notre équipe vous recontactera rapidement avec une analyse personnalisée.
          </p>
        </section>
      </div>

      {/* Formulaire */}
      <div className="w-full max-w-[2400px] mt-2 lg:mt-4 px-4 lg:px-10">
        <div className="gold-bg lg:rounded-tl-xl lg:rounded-bl-xl form-rounded-3xl py-6 lg:py-10">
          <Form />
        </div>
      </div>
    </div>
  );
}
