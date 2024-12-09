fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const cloth = data.filter(product => product.category === "men's clothing");

        const productList = document.getElementById('product-list');
        cloth.forEach(product => {
            const listItem = document.createElement('li');

            const productTitle = document.createElement('span');
            productTitle.textContent = product.title;

            const productPrice = document.createElement('span');
            productPrice.textContent = `$${product.price}`;
            productPrice.classList.add('price'); 

            listItem.appendChild(productTitle);
            listItem.appendChild(productPrice);

            productList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Xəta baş verdi:', error);
    });
