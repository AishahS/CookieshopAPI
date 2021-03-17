// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import productStore from "../stores/productStore";
import { useEffect } from "react";

const ProductDetail = observer((props) => {
  const params = useParams();
  const products = toJS(productStore.products);
  const deleteProduct = toJS(productStore.deleteProduct);
  const product = products.find((product) => {
    return product.slug == params.productSlug;
  });
  useEffect(() => {
    props.setTitle("Product Details");
  });
  return product ? (
    <DetailWrapper>
      <p onClick={props.selectProduct(params?.productID)}>Back to Products</p>
      <h1>{product?.name}</h1>
      <img src={product?.image} alt={product?.name} />
      <p>{product?.description}</p>
      <p>{product?.price} KD</p>
      <DeleteButton productSlug={product?.slug} deleteProduct={deleteProduct} />
    </DetailWrapper>
  ) : (
    <Redirect to="/products" />
  );
});

export default ProductDetail;
