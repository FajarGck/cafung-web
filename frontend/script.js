const container = document.querySelector('.container');
        const btn = document.getElementById('btn');

        btn.addEventListener('click', () => {
            fetchStores();
        });

            const storesUrl = `stores`;
            const apiUrl = `http://localhost:8080/${storesUrl}`;


       async function fetchData() {
            try {
                const response = await fetch(apiUrl);
                const result = await response.json();

                if (result.status === "ok!") {
                    displayStores(result.data.stores);
                } else {
                    console.error("Error: Status bukan ok!");
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        // Fungsi untuk menampilkan daftar toko
        function displayStores(stores) {
            const storeList = document.querySelector('.container');

            stores.forEach(store => {
                const storesHtml = `
            <div class="card">
            <img src="${store.image_path}" alt="storesImg">
             <ul>
                <li>${store.id}</li>
                <li>${store.name}</li>
                <li>${store.owner}</li>
            </ul>
        </div>
                `
            storeList.innerHTML += storesHtml;
            });
        }

        // Memanggil fungsi fetchData ketika halaman dimuat
        window.onload = fetchData;