import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Test Seller",
    email: "seller@agora.com",
    password: "hashed-password",
    isSeller: true,
    products: {
      create: [
        {
          name: "Running Shoes",
          description: "Lightweight running shoes",
          price: 89.99,
          quantity: 20,
          category: "Footwear",
          published: true,
        },
        {
          name: "Wireless Headphones",
          description: "Noise cancelling headphones",
          price: 199.99,
          quantity: 10,
          category: "Electronics",
          published: true,
        },
      ],
    },
  },
  {
    name: "Test Buyer",
    email: "buyer@agora.com",
    password: "hashed-password",
    isBuyer: true,
  },
];

export async function main() {
  console.log("Seeding database...");

  for (const u of userData) {
    const user = await prisma.user.create({ data: u });
    console.log(`Created user: ${user.email}`);
  }

  console.log("Seeding completed successfully.");
}

main().catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
    console.log("Database connection closed.");
});
