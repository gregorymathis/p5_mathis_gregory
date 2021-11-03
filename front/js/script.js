fetch("http://localhost:3000/api/products")
.then(function(res) {
    if (res.ok) {
     return res.json(); 

    }
  })
  .then(function(value) {
    console.log(value);
 for (let i = 0; i < value.length; i++) {
    showProduct(value[i]);

}

})
  .catch(function(err) {
    // Une erreur est survenue
  });

function showProduct(listProduct) {
    const link = document.createElement("a");
    link.setAttribute("href", "product.html?id=" + listProduct._id);

    const bloc = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", listProduct.imageUrl);
    img.setAttribute("alt", listProduct.altTxt);

    const nom = document.createElement("h3");
    nom.setAttribute("class", "productName");
    nom.innerHTML = listProduct.name;

    const description = document.createElement("p");
    description.setAttribute("class", "productDescription");
    description.innerHTML = listProduct.description;

    const blocProduct = document.getElementById("items");
    blocProduct.appendChild(link);
    link.appendChild(bloc);
    bloc.appendChild(img);
    bloc.appendChild(nom);
    bloc.appendChild(description);


}