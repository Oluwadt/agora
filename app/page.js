    import ProductCard from "./components/ProductCard";

    export default async function Home() {

        const products = await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(products_json => products_json['products']);

        return (
            <div>
                Welcome to Agora
                <ProductCard products={products} />
            </div>    
        );
    }
