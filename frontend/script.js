async function fetchData() {
    try {
        const baseUrl = `http://localhost:8080`;
        const productsResponse = await fetch(`${baseUrl}/products`);
        const categoriesResponse = await fetch(`${baseUrl}/categories`);
        const storesResponse = await fetch(`${baseUrl}/stores`);

        const productsData = await productsResponse.json();
        const categoriesData = await categoriesResponse.json();
        const storesData = await storesResponse.json();

        if (productsData.status === "ok!") {
            console.log(productsData);
            console.log(categoriesData);
            console.log(storesData);
        }

    } catch (error) {
        console.error('error fetchng data: ', error)
    }
}

fetchData();