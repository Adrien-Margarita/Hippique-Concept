import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function GET() {
  try {
    const categories = await prisma.productCategory.findMany({
      include: {
        subCategories: true,
        products: {
          include: {
            images: true,
            variants: true,
          },
        },
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de la récupération' }, { status: 500 });
  }
}
