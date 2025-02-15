import React, { useMemo, useState } from 'react'
import { useFetchProducts } from '../hooks/products/useFetchProducts'
import ProductCard from '../components/ProductCard'
import FilterCard from '../components/FilterCard';
import CreateFormProduct from '../components/CreateFormProduct';
import UpdateFormProduct from '../components/UpdateFormProduct';

function ProductsPage() {
    const { data : productsResponse, isLoading, isError } = useFetchProducts(); 
    const products = productsResponse?.data || [];
    const baseImageUrl = import.meta.env.VITE_API_BASE_URL  + "/";  
    const [ filterBy, setFilterBy ] = useState('');
    const [ isForm, setIsForm ] = useState(false)
    const [ textShow, setTextShow ] = useState('New Product')
    const [ selectedProduct, setSelectedProduct ] = useState(null)
    const [ isModify, setIsModify ] = useState(false) 

    const filteredProducts = useMemo(() => {
       if (!filterBy || filterBy === "All") return [...products].sort((a,b) => (b.id - a.id));

        return products.filter((product) => product.category?.name === filterBy)
    }, [products, filterBy])

    const handleShowForm = () => {
        setIsForm(prev => (!prev))
        setTextShow(prev => (prev === "New Product" ? "Close Form" : "Form Product"))
    }
    
    const handleModify = () => {
        setIsModify(prev => !prev)
    }

    const handleShowUpdate = (product) => {
        setSelectedProduct(product)
    }


    const closeForm = () => {
        setSelectedProduct(null)
    }
    

  return (
     <>
        {selectedProduct && 
            (
                <div className={`fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-[800] flex`}>
                <UpdateFormProduct onClose={closeForm} dataPass={selectedProduct} />
                </div>
            )
        }
        <section id="menu" className="menu mb-6">
        <div className='flex items-end space-x-2'>
            <FilterCard filter={filterBy} handleChange={(e) => setFilterBy(e.target.value)} />
            <button onClick={handleShowForm} className={`px-2 p-0.5 h-fit text-center lg:text-lg lg:m-1 w-fit rounded-md text-white font-semibold bg-blue-500`}>{textShow}</button>
            <button onClick={handleModify} className={`px-2 p-0.5 h-fit text-center lg:text-lg lg:m-1 w-fit rounded-md text-white font-semibold bg-blue-500`}>Modify</button>
                 
        </div>
        {isForm && <CreateFormProduct />}
        <div className="container min-h-screen mx-auto min-w-full bg-white pt-6">
        <h3 className="text-black font-extrabold text-4xl mx-auto text-center w-fit my-4 md:my-8">LIST OF<br /> PRODUCTS</h3>
            {isLoading ? (
                <p className="text-center text-gray-500">Loading products...</p>
            ) : isError ? (
                <p className="text-center text-red-500">Error: {isError}</p>
            ) : (
                <div id="menu-container" className="menu-container border-black h-auto flex flex-wrap justify-center items-center gap-3 md:mx-[5%] md:gap-5">
                    {filteredProducts.map((product) => (
                        <ProductCard 
                            handleEdit={() => handleShowUpdate(product)}
                            isShowBtn={isModify}
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
     </>
  )
}

export default ProductsPage