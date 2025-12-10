// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// 1. Define um tipo global para evitar conflitos de recarga (hot-reloading)
declare global {
  var prisma: PrismaClient | undefined;
}

// 2. Utiliza a instância global existente OU cria uma nova
export const prisma = global.prisma || new PrismaClient();

// 3. Em ambiente de desenvolvimento, anexa a instância ao objeto global
// Isso evita que o Next.js crie uma nova instância em cada hot-reload, 
// o que é a causa do seu erro.
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}