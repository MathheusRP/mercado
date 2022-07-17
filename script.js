let frutas          = document.querySelector ('.fruits')
let drinks          = document.querySelector ('.drinks')
let hygiene         = document.querySelector ('.hygiene')

let listaFruta      = document.createElement ('ul')
let listaBebida     = document.createElement ('ul')
let listahygiene    = document.createElement ('ul')

frutas.append(listaFruta)
drinks.append(listaBebida)
hygiene.append(listahygiene)

console.log(listaBebida)
function listandoProdutos(produto){
for(let i = 0; i < produto.length; i++){
    let produtos = produto[i]

    card = criandoCards(produtos)
    // listaFruta.append(card)

    if(produtos.category == "Frutas"){
    listaFruta.append(card)
    
    }
    if(produtos.category == "Bebidas"){
    listaBebida.append(card)
    }
    if(produtos.category == "Higiene"){
    listahygiene .append(card)
    }
    
}


}
console.log(listandoProdutos(products))


function criandoCards(produto){
// COLETANDO INFORMAÇÕES
nome                = produto.title
price               = produto.price
categoria           = produto.category
image               = produto.image

// CRIANDO ELEMENTOS HTML
li                  = document.createElement ('li')
foto                = document.createElement ('img')
main                = document.createElement ('main')
h1                  = document.createElement ('h1')
h5                  = document.createElement ('h5')
strong              = document.createElement ('strong')
// noImage             = "./img/products/no-img.svg"
// TRATADO ELEMENTOS
li.className        = 'product'
main.className      = 'product-main'
h1.className        = 'product-title'
h1.innerText        = nome
h5.className        = 'product-category'
h5.innerText        = categoria
strong.className    = 'product-price'
strong.innerText    = price
foto.alt            = nome
foto.className      = 'product-img'

if(produto.image !== undefined){
    foto.src = image
}
else {
    foto.src = "./img/products/no-img.svg"
}

// MONTANDO ELEMENTOS
li.append(foto, main)
main.append(h1, h5, strong)

// retornando card
return li
}

{/* <li class="product">
    <img src="./img/products/product_2.svg"alt=""title="" class="product-img"/>
    <main class="product-main">
        <h1 class="product-title">Banana</h1>
        <h5 class="product-category">Frutas</h5>
        <strong class="product-price">R$ 5.69</strong>
    </main>
</li> */}

