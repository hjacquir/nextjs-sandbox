'use server'

import {redirect} from 'next/navigation'
import {prisma} from '@/lib/prisma'

export async function AddOffer(formData : FormData) {
    redirect('/')
}

export async function ListOffer() {
    await prisma.offer.findMany(
        {
            include: {
                category: true
            }
        }
    );
}
