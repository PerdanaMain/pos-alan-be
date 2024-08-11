const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await Products();
}

const Products = async () => {
  await prisma.products.createMany({
    data: [
      {
        name: "Product 1",
        price: 1000,
        description: "Product 1 Description",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Product 2",
        price: 2000,
        description: "Product 2 Description",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Product 3",
        price: 3000,
        description: "Product 3 Description",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Product 4",
        price: 4000,
        description: "Product 4 Description",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Product 5",
        price: 5000,
        description: "Product 5 Description",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Product 6",
        price: 6000,
        description: "Product 6 Description",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Product 7",
        price: 7000,
        description: "Product 7 Description",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Product 8",
        price: 8000,
        description: "Product 8 Description",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Product 9",
        price: 9000,
        description: "Product 9 Description",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Product 10",
        price: 10000,
        description: "Product 10 Description",
        image: "https://via.placeholder.com/150",
      },
    ],
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
