function getParam(){
    const param = window.location.search.replace("?id=","");
    return param;
}

fetch("http://localhost:3000/api/products" + "/" + getParam())
.then(function(res) {
    if (res.ok) {
     return res.json(); 
    }
  })
  .then(function(value) {
      showItem(value);
})
  .catch(function(err) {
    // En cas d'erreur
  });

  function showItem(item){

    // On change le titre de la page
    const itemTitle = document.getElementById('titre-product');
    itemTitle.textContent = item.name;

    // On change l'image
    const itemImg = document.createElement("img");
    itemImg.setAttribute("src", item.imageUrl);
    itemImg.setAttribute("alt", item.altTxt);

    const blocItem = document.getElementsByClassName("item__img");
    blocItem[0].appendChild(itemImg);

    // On change le nom de produit
    const itemName = document.getElementById('title');
    itemName.textContent = item.name;

    // On change le prix
    const itemPrice = document.getElementById('price');
    itemPrice.textContent = item.price;

    // On change la description
    const itemDescription = document.getElementById('description');
    itemDescription.textContent = item.description;

    // On change la couleur du produit
    const itemColors = document.getElementById('colors');
    itemColors.innerHTML = '<option value="vert">vert</option> <option value="blanc">blanc</option>';

  }