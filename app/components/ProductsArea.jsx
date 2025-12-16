import prisma from "@/lib/prisma";

async function ProductCard (props) {
    const products = await prisma.product.findMany({
    where: { published: true },
  });
    return (
        <>
            {products.map((product) => {
                console.log(product.images)
                return (
                    <div key={product.id}>
                        <img src={product.images} alt={product.name + " image"} />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ProductCard