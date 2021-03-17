// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import AddButton from "./buttons/AddButton";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import productStore from "../stores/productStore";

const ProductList = observer((props) => {
  const [query, setQuery] = useState("");
  const products = toJS(productStore.products);
  const deleteProduct = toJS(productStore.deleteProduct);
  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        selectProduct={props.selectProduct}
      />
    ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>
        {productList}
        <AddButton />
      </ListWrapper>
    </div>
  );
});

export default ProductList;
