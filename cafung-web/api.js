import {
    showAllProducts,
    showProductsByCategory,
    showStores
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
        const drink = await productDrink.json();
        const food = await productFood.json();

        if (products.status === "ok!" && categories.status === "ok!" && stores.status === "ok!") {
            let productsData = products;
            let storesData = stores
            document.getElementById('allMenu').addEventListener('click', (e) => {
            e.preventDefault();
                });

                document.getElementById('menuMakanan').addEventListener('click', (e) => {
                    e.preventDefault();
                    showProductsByCategory(productsData, 2);
                });

                document.getElementById('menuMinuman').addEventListener('click', (e) => {
                    e.preventDefault();
                    showProductsByCategory(productsData, 3);
                });

                document.getElementById('btnStores').addEventListener('click', (e) => {
                    e.preventDefault();
                    showStores(storesData)
                })
                showAllProducts(productsData);
        }

    } catch (error) {
        console.error('error fetching data: ', error)
    }
}


fetchData();


