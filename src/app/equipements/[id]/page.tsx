// app/equipements/[id]/page.tsx
import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await prisma.product.findUnique({
    where: { id: Number.parseInt(params.id) },
    include: {
      images: true,
      variants: true,
    },
  });

  if (!product) return notFound();

  return (
    <div className="max-w-[1200px] px-4 xl:px-10 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-lg text-gray-600 mb-4">{product.description}</p>
      {product.deliveryInfo && <p className="mb-4 text-sm text-gray-500">📦 {product.deliveryInfo}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {product.images.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={product.title}
            className="w-full h-auto rounded-xl object-cover"
          />
        ))}
      </div>

      {product.variants.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Variantes disponibles</h2>
          <ul className="space-y-2">
            {product.variants.map((variant) => (
              <li key={variant.id} className="border p-4 rounded-lg shadow-sm">
                <span className="font-medium">{variant.label}</span> –{" "}
                <span className="text-[var(--gold)] font-bold">{variant.price.toLocaleString()} €</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
