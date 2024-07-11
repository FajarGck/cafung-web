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


const dummy = () => {
    const dummy = document.getElementById('dummy')
    for (let i = 0; i < 6 ; i++) {
        dummy.innerHTML += `
        <div class="col" id="1">
                        <div class="card">
                            <img src="./assets/menu-dummy.jpeg" class="card-img-top" alt="card-img">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">Tahu Bulat</h5>
                                <p class="card-text fw-base">Lorem ipsum elit. quidem aliquam nisi dolores!</p>
                            </div>
                            <div class="mb-5 d-flex justify-content-around">
                                <h3 class="price-menu fw-semibold">Rp. 10000</h3>
                                <button class="btn-card rounded text-light">Lihat</button>
                            </div>
                        </div>
                    </div>
        `
    }
}



fetchData();
dummy();



