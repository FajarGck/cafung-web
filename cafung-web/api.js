import {
    showPopularProducts,
    showProductsByCategory,
    showStores,
    showStoreWithProducts
} from './script.js'

let productsData = [];
let drinkData = [];
let foodData = [];


async function fetchData() {
    try {
        const baseUrl = `http://localhost:8080`;
        const productsResponse = await fetch(`${baseUrl}/products`);
        const categoriesResponse = await fetch(`${baseUrl}/categories`);
        const productDrink = await fetch(`${baseUrl}/categories/drink/products`);
        const productFood = await fetch(`${baseUrl}/categories/food/products`);
        const storesResponse = await fetch(`${baseUrl}/stores`);
      
        
        const products = await productsResponse.json();
        const categories = await categoriesResponse.json();
        const stores = await storesResponse.json();

        if (products.status === "ok!" && categories.status === "ok!" && stores.status === "ok!") {
            let productsData = products;
            let storesData = stores
                showPopularProducts(productsData);
                showStores(storesData);
        }

    } catch (error) {
        console.error('error fetching data: ', error)
    }
}

async function fetchStoreWithProduct(storeId) {
     try {
        const baseUrl = `http://localhost:8080`;
        const storeProductResponse = await fetch(`${baseUrl}/stores/${storeId}/products`);
        const storeWithProductData = await storeProductResponse.json();

        if (storeWithProductData.status === "ok!") {
            showStoreWithProducts(storeWithProductData.data);
        }

    } catch (error) {
        console.error('error fetching store data: ', error);
    }
}



fetchData();



export { fetchStoreWithProduct };