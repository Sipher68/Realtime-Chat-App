// import { PrismaClient } from '@prisma/client';

// // declare global {
// //   var prisma: PrismaClient | undefined;
// // }

// // const client = globalThis.prisma || new PrismaClient();
// // if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

// // export default client;

// declare const global: Global & { prisma?: PrismaClient };

// export let prisma: PrismaClient;

// if (typeof window === 'undefined') {
//   if (process.env['NODE_ENV'] === 'production') {
//     prisma = new PrismaClient();
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient();
//     }
//     prisma = global.prisma;
//   }
// }
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
