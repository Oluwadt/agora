const ProductCard = (props) => {
    const { products } = props
    return (
        <>
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <img src={product.thumbnail} alt={product.title + " image"} />
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ProductCard