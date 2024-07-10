const cardContainer = document.getElementById('card-container');





const showAllProducts = (productsData) => {
    const products = productsData.data.products;
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
            <div class="col" id="${product.id}">
                <div class="card">
                    <img src="http://localhost:8080/${product.image_path}" class="card-img-top" alt="card-img">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${product.name}</h5>
                        <p class="card-text fw-base">${description}</p>
                    </div>
                    <div class="mb-5 d-flex justify-content-around">
                        <h3 class="price-menu fw-semibold">Rp. ${product.price}</h3>
                        <button class="btn-card rounded text-light">Lihat</button>
                    </div>
                </div>
            </div>
        `;
    });
}
const renderStores = (storeData) => {
    cardContainer.innerHTML = '';
    storeData.forEach(store => {
        cardContainer.innerHTML += `
            <div class="col" id="${store.id}">
                <div class="card">
                    <img src="http://localhost:8080/${store.image}" class="card-img-top" alt="card-img">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${store.name}</h5>
                        <p class="card-text fw-semibold mb-0">Pemilik: ${store.owner}</p>
                        <p class="card-text fw-semibold mb-0">Kontak: ${store.kontak}</p>
                        <div class="d-flex ">
                            <button class="btn-card rounded text-light mb-5 mt-2 p-1">Lihat</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

export {
    showAllProducts,
    showProductsByCategory,
    showStores
    
}
