// app/equipements/page.tsx
import Link from "next/link";
import { prisma } from "@/app/lib/prisma";

export default async function EquipementsPage() {
  const products = await prisma.product.findMany({
    include: {
      images: true,
    },
  });

  return (
    <div className="max-w-[2400px] px-4 xl:px-10 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nos équipements</h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Aucun produit n'est disponible pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
              <img
                src={product.images?.[0]?.url || "/placeholder.jpg"}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col justify-between h-[200px]">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
                <Link
                  href={`/equipements/${product.id}`}
                  className="mt-auto w-full inline-block text-center bg-[var(--gold)] text-white font-medium py-2 px-4 rounded-lg hover:brightness-110 transition"
                >
                  Voir le produit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
