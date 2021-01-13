import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running Shoes.", price: "$5", image: 'https://cdn.sportsshoes.com/product/A/ADI11004/ADI11004_1000_1.jpg'},
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook Laptop.",
    price: "$10",
    image: 'https://cdn2.macworld.co.uk/cmsdata/reviews/3660144/macbook_pro_201700.jpg'
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} medium={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
