import ProductCard from '../components/ProductCard'
import { useFetchProducts } from '../hooks/products/useFetchProducts';

function PopularProductsPage() {
    const { data : productResponse, isLoading, error } = useFetchProducts();
    const popularProducts = productResponse?.data.filter(product => product.price < 11000 && product.rate > 4)
    const baseImageUrl = import.meta.env.VITE_API_BASE_URL  + "/";

  return (
    <section id="popular-products" className="menu">
        <div className="container min-h-screen mx-auto min-w-full bg-white pt-6">
        <h3 className="text-black font-extrabold text-4xl mx-auto text-center w-fit my-4 md:my-8">OUR BEST<br /> SELLERS</h3>
            {isLoading ? (
                <p className="text-center text-gray-500">Loading products...</p>
            ) : error ? (
                <p className="text-center text-red-500">Error: {error}</p>
            ) : (
                <div id="menu-container" className="menu-container border-black h-auto flex flex-wrap justify-center items-center gap-3 md:mx-[5%] md:gap-5 lg:gap-20">
                    {popularProducts.map((product) => (
                        <ProductCard 
                            isShowBtn={false}
                            key={product.id}
                            productId={product.id}
                            productName={product.name}    
                            productPrice={product.price}
                            productDesc={product.description}
                            productRate={product.rate}
                            productImage={baseImageUrl + product.image_path}
                        />
                    ))}
                </div>
            )}    
        </div>
    </section>
  )
}

export default PopularProductsPage

