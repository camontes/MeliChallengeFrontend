const express = require("express");
const axios = require("axios")

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  console.log('')
    res.json({ message: "Hola desde el servidor node"});
  });

  async function getCategories (categoryId){
    let categories = await axios.get(`https://api.mercadolibre.com/categories/${categoryId}`);
    
    if(categories.data.path_from_root){
      return categories.data.path_from_root.map(p => p.name);
    }
    return [];

  }

  function setProducts(products, currency, decimals, categories){

    let productsFilter = products.results.slice(0,4).map((p)=>{
      return {
        author:{
          name: p.seller.nickname
        },
        id:p.id,
        title: p.title,
        price:{
          amount: p.price,
          currency: currency,
          decimals: decimals
        },
        picture: p.thumbnail,
        condition: p.condition,
        free_shipping: p.shipping.free_shipping
      };
    });

    return {
      categories: categories,
      items: productsFilter
    };

  }

  function setProductDetail(
    product,
    symbol,
    decimal_places,
    authorName,
    categories,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description
  ){
    let item = {
      id: product.id,
      title: product.title,
      price:{
        currency: symbol,
        amount: product.base_price,
        decimals: decimal_places
      }
    };

    return {
      author:{
        name: authorName
      },
      categories: categories,
      item: item,
      picture: picture,
      condition: condition,
      free_shipping: free_shipping,
      sold_quantity: sold_quantity,
      description: description

    };
  }
  
  async function getCurrencies(currencyId){
    let currencies = await axios.get(`https://api.mercadolibre.com/currencies/${currencyId}`);

    return currencies.data;
  }
  async function getAuthor(sellerId){
    let author = await axios.get(`https://api.mercadolibre.com/users/${sellerId}`);

    return author.data;
  }

  async function getProductDetail(productId){

    let description = await axios.get(`https://api.mercadolibre.com/items/${productId}/description`);

    return description.data.plain_text;
  }

  app.get('/api/items/:id', async(req, res) => {

    const {id} = req.params;

    let data = {item:{}};
    let productDetail =  {};
    let authorName = "";
    let symbol = "";
    let decimal_places = 0;
    let picture = "";
    let description = "";
    let condition = "";
    let free_shipping = false;
    let sold_quantity = 0;
    let categories = [];

    try{
      productDetail = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    }
    catch{
      productDetail = {}
    }


    if(productDetail.data){
      let {seller_id} = productDetail.data;
      let {currency_id} = productDetail.data;
      let{category_id} = productDetail.data;
      let productId = productDetail.data.id;

      let author = await getAuthor(seller_id);

      authorName = author.nickname;

      let currencies = await getCurrencies(currency_id);
      
      symbol = currencies.symbol;
      decimal_places = currencies.decimal_places;

      if(productDetail.data.pictures){
        let pictures = productDetail.data.pictures.map(p => p.url);
        let[firstPicture] = pictures;
        picture = firstPicture;
      }

      description = await getProductDetail(productId);
      categories = await getCategories(category_id);

      condition = productDetail.data.condition;
      free_shipping = productDetail.data.free_shipping;
      sold_quantity = productDetail.data.sold_quantity;

      data = setProductDetail(productDetail.data,symbol,decimal_places,authorName,categories,picture,condition,free_shipping,sold_quantity,description,);

    }
    
    res.json(data);
  });

 app.get('/api/items', async  function(req, res){

  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

  let data = {
    categories: [],
    items: []
  };

  let products = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`);
  let decimals = 0;
  let currency = "";
  let currencies = "";
  let categories = [];

  if(products.data.results.length > 0){
    products = products.data;
    let currencyId = products.results[0].currency_id;
    let categoryId = products.results[0].category_id;

    currencies = await getCurrencies(currencyId);
    decimals = currencies.decimal_places;
    currency = currencies.symbol;

    //get categories
    categories = await getCategories(categoryId);

    data = setProducts(products,currency,decimals,categories);

  }

  res.json(data);
});
  
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
  });