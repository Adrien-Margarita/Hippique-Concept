import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Produit Barn avec images et variantes
  const barn = await prisma.product.create({
    data: {
      title: 'Structure Barn',
      description: 'Les barns sont des structures conçues pour abriter les chevaux...',
      deliveryInfo: 'Livraison sur demande',
      variants: {
        create: [
          { label: 'Barn 3x3m', price: 12000 },
          { label: 'Barn 4x4m', price: 15000 },
        ],
      },
      images: {
        create: [
          { url: 'https://example.com/images/barn-1.jpg' },
          { url: 'https://example.com/images/barn-2.jpg' },
        ],
      },
    },
  });

  // Produit Box Intérieur
  await prisma.product.create({
    data: {
      title: 'Box Intérieur Standard',
      description: 'Box intérieur standard pour abriter les chevaux.',
      deliveryInfo: 'Sur devis',
      variants: {
        create: [{ label: 'Box Intérieur Luxe', price: 8000 }],
      },
      images: {
        create: [{ url: 'https://example.com/images/box-interieur.jpg' }],
      },
    },
  });

  // Produit Box Extérieur
  await prisma.product.create({
    data: {
      title: 'Box Extérieur Modulaire',
      description: 'Box extérieur modulaire et personnalisable.',
      deliveryInfo: 'Sur devis',
      variants: {
        create: [{ label: 'Box Extérieur Renforcé', price: 9500 }],
      },
      images: {
        create: [
          { url: 'https://example.com/images/box-ext-1.jpg' },
          { url: 'https://example.com/images/box-ext-2.jpg' },
        ],
      },
    },
  });

  // Produit Box Paddock
  await prisma.product.create({
    data: {
      title: 'Box Paddock Sécurisé',
      description: 'Box paddock sécurisé pour les chevaux en extérieur.',
      deliveryInfo: 'Sur devis',
      images: {
        create: [{ url: 'https://example.com/images/box-paddock.jpg' }],
      },
    },
  });

  // Produit Herse de Carrière
  await prisma.product.create({
    data: {
      title: 'Herse de Carrière',
      description: 'Outil essentiel pour entretenir vos sols de carrière.',
      deliveryInfo: 'Livraison sous 2 semaines',
      variants: {
        create: [
          { label: 'Herse 1m80', price: 2100 },
          { label: 'Herse 2m50', price: 3000 },
        ],
      },
      images: {
        create: [{ url: 'https://example.com/images/herse.jpg' }],
      },
    },
  });

  // Produit Lices en Acier Galvanisé
  await prisma.product.create({
    data: {
      title: 'Lices en Acier Galvanisé',
      description: 'Lices durables et robustes pour vos installations.',
      deliveryInfo: 'Délais à confirmer',
      images: {
        create: [{ url: 'https://example.com/images/lices.jpg' }],
      },
    },
  });
}

main()
  .then(async () => {
    console.log('🌱 Seed completed');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
