const express = require("express");
const axios = require("axios")

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
  console.log('')
    res.json({ message: "Hola desde el servidor node"});
  });

  app.get('/:id', (req, res) => {
    res.send({Id:req.params.id});
  });

 app.get('/api/items', async  function(req, res){

  const category = "category";
  let products = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`);
  let decimals = 0;
  let currency = "";
  let currencies = "";
  let categories = [];

  if(products.data.results.length > 0){
    let currencyId = products.data.results[0].currency_id;
    currencies = await axios.get(`https://api.mercadolibre.com/currencies/${currencyId}`);
    decimals = currencies.data.decimal_places;
    currency = currencies.data.symbol;

    //get categories
    if(products.data.filters.length > 0){
      categories = products.data.filters.find(x => x.id === category).values;
      if(categories.length > 0){
        categories = categories[0].path_from_root.map(p => p.name);
      }
    }

    console.log(categories);

  }
  let productsFilter = products.data.results.slice(0,4).map((p)=>{
    return {
      author:{
        name: p.seller.nickname,
        lastname: p.seller_address.state.name
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

  let data = {
    categories: categories,
    items: productsFilter
  }

  res.json(data);
});
  
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
  });