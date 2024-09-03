import { fetchStoreWithProduct } from "./api.js";

const navBtn = document.getElementById('nav-btn')
const navList = document.getElementById('nav-list');

navBtn.addEventListener('click', (e) => {
    console.log("oke")
    navList.classList.toggle("hidden");
    e.preventDefault();
     document.addEventListener('click', (e) => {
     if (!navBtn.contains(e.target) && !navList.contains(e.target)) {
         navList.classList.add("hidden");
         console.log("close")
     }
 });
})

const expandNavbar = () => {

 const navbarBtn = document.getElementById('nav-btn');
 const navbarList = document.getElementById('nav-list');
 document.addEventListener("DOMContentLoaded", () => {

    
 });

}


const showPopularProducts = (productsData) => {
    const products = [productsData.data.products][0].filter(item => item.rate == 5)
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

const showStoreWithProducts = (store) => {
    const modal = document.getElementById('modal');
    const imgModel = document.getElementById('modal-img').querySelector('img');
    const detailModel = document.getElementById('stall-detail')
    imgModel.src = `http://localhost:8080/${store.image_path}`;
    detailModel.querySelector('.stall-title').textContent =  store.name;
    detailModel.querySelector('.stall-owner').innerHTML = `<i class="fa-solid fa-user"></i> ${store.owner}`;
    detailModel.querySelector('.stall-contact').innerHTML = `<i class="fa-brands fa-whatsapp"></i> ${store.kontak}`;

    const listMenu = document.querySelector('.list-menu');
    listMenu.innerHTML = '';

    store.products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.classList.add('list');
        listItem.textContent = `-${product.name}`;
        listMenu.appendChild(listItem);
    });

    modal.style.display = 'flex'; 
    closeModel(modal);
}

const renderStores = (storeData) => {
    const storesContainer = document.getElementById('stall-container')
    storesContainer.innerHTML = '';
    storeData.forEach(store => {
        storesContainer.innerHTML += `
            <div id="${store.id}" class="card-stall w-40 h-52 border bg-base-color mt-14 p-2 rounded-2xl flex flex-col justify-center items-center content-center space-y-1 lg:w-64 lg:h-72">
                <img class="stall-img h-auto w-[80%] object-center border rounded-t-3xl mt-[-50px]" src="http://localhost:8080/${store.image}" alt="">
                <h3 class="text-lg font-semibold text-center text-white lg:text-xl">${store.name}</h3>
                <h3 class="text-sm text-center font-semibold text-white lg:text-lg"><i class="fa-solid fa-user"></i> ${store.owner}</h3>
                <p class="text-sm text-center font-semibold text-white lg:text-lg"><i class="fa-brands fa-whatsapp"></i> ${store.kontak}</p>
                <button class="stall-btn bg-transparent text-sm text-white border-2  w-fit rounded-3xl py-2 px-4 font-semibold hover:bg-white hover:text-black">
                    <p>MENU</p>
                </button>
            </div>
        `;
    });
    const stallCards = document.querySelectorAll('.card-stall');
    stallCards.forEach(card => {
        card.addEventListener('click', () => {
            fetchStoreWithProduct(card.id)
        });
    });
}

const renderProducts = (products) => {
    const menuContainer = document.getElementById('menu-container')
    menuContainer.innerHTML = '';
    products.forEach(product => {
        let description = product.description;
        const maxLength = 70; 
        
        if (description.length > maxLength) {
            description = `${description.slice(0, maxLength)}........`;
        }

        menuContainer.innerHTML += `
            <div id="${product.id}" class="card-menu w-40 h-52 border bg-base-color mt-20 p-2 rounded-2xl flex flex-col justify-center items-center content-center space-y-1 lg:w-72 lg:h-64">
                <img class="menu-img h-auto w-[80%] object-center border rounded-t-3xl mt-[-100px]" src="http://localhost:8080/${product.image_path}" alt="menu-img">
                <div class="rate">
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                </div>
                <h3 class="text-sm text-center font-semibold text-white lg:text-lg">${product.name}</h3>
                <h3 class="text-xl font-semibold text-white lg:text-2xl">Rp. ${product.price}</h3>
                <p class="text-xs h-10 text-white text-center font-semibold lg:text-base">${description}</p>
            </div>
        `;
    });
}

const closeModel = (modal) => {
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener('click', (e) => {
       setTimeout(() => {
         modal.style.display = 'none';
       }, 500);
    } );
}







export {
    showPopularProducts,
    showStores,
    showStoreWithProducts,
    expandNavbar,
    // showProductsByCategory,
    // closeModel
    
}
