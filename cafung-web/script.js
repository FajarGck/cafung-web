import { fetchStoreWithProduct } from "./api.js";
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const cardContainer = document.getElementById('shop-container');
const storesContainer = document.getElementById('stores-container')
 const modelCard = document.getElementById('model-card');
const imgModel = document.getElementById('img-model').querySelector('img');
const detailModel = document.getElementById('detail-model');



menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};


const showPopularProducts = (productsData) => {
    const products = [productsData.data.products][0].filter(item => item.rate == 5)
    renderProducts(products);
}

const showProductsByCategory = (productsData, categoryName) => {
    const products = [productsData.data.products][0].filter(item => item.category.id == categoryName)
    renderProducts(products);
}
const showStores = (storesData) => {
    const stores = [storesData.data][0].stores
    .map(item => ({
        id: item.id,
        name: item.name,
        image: item.image_path,
        owner: item.owner,
        kontak: item.kontak
    }))
    const uniqueStores = [];

    const storeIds = new Set();
    stores.forEach(store => {
        if (!storeIds.has(store.id)) {
            storeIds.add(store.id);
            uniqueStores.push(store);
        }
    });
    renderStores(uniqueStores);
    
    
}

const renderProducts = (products) => {
    cardContainer.innerHTML = '';
    products.forEach(product => {
        let description = product.description;
        const maxLength = 70; 
        
        if (description.length > maxLength) {
            description = `${description.slice(0, maxLength)}........`;
        }

        cardContainer.innerHTML += `
            <div class="box mb-2 mb-md-5" id="${product.id}">
                <div class="box-img">
                    <img src="http://localhost:8080/${product.image_path}" class="card-img" alt="menu-img" />
                </div>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <h2 class="text-light">${product.name}</h2>
                <span class="text-light">Rp. ${product.price}</span>
                <h5 class="text-light mb-2 fs-6">${description}</h5>
                <a href="#menu" class="btn">Order now</a>
            </div>
        `;
    });
}

const showStoreWithProducts = (store) => {
    imgModel.src = `http://localhost:8080/${store.image_path}`;
    detailModel.querySelector('.model-title').textContent = store.name;
    detailModel.querySelector('.model-text').textContent = `Owner: ${store.owner}`;
    detailModel.querySelector('.model-text + .model-text').textContent = store.kontak;

    const listMenu = detailModel.querySelector('.list-menu');
    listMenu.innerHTML = ''; // Kosongkan list menu sebelumnya

    store.products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.classList.add('list');
        listItem.textContent = `-${product.name}`;
        listMenu.appendChild(listItem);
    });

    modelCard.classList.remove('d-none'); 
}

const renderStores = (storeData) => {
    storesContainer.innerHTML = '';
    storeData.forEach(store => {
        storesContainer.innerHTML += `
            <div class="box mb-2 mb-md-5" id="${store.id}">
                <div class="box-img">
                    <img src="http://localhost:8080/${store.image}" class="card-img" alt="menu-img" />
                </div>
                <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                </div>
                <h2 class="text-light">${store.name}</h2>
                <span class="text-light"><span class="fs-5">Owner:</span> ${store.owner}</span>
                <h5 class="text-light mb-2 fs-6">${store.kontak}</h5>
                <a href="#store" id="btn-store" class="btn-store text-decoration-none p-2 rounded">See more >></a>
            </div>
        `;
    });
    const storeCards = document.querySelectorAll('.box');
    storeCards.forEach(card => {
        card.addEventListener('click', () => {
            fetchStoreWithProduct(card.id)
        });
    });
}

const closeModel = () => {
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', () => {
        modelCard.classList.add('d-none');
    });
}
document.addEventListener('DOMContentLoaded', () => {
    closeModel();
});

export {
    showPopularProducts,
    showProductsByCategory,
    showStores,
    showStoreWithProducts,
    closeModel
    
}
