import { observable, makeObservable } from "mobx";
import { configure } from "mobx";
import axios from "axios";

configure({
  useProxies: "never",
});

class productStore {
  products = [];
  constructor() {
    makeObservable(this, { products: observable });
  }

  fetchProducts = async () => {
    try {
      console.log("hello");
      const response = await axios.get("http://localhost:8000/cookies");
      console.log(response);
      this.products = [...response.data];
    } catch (error) {
      console.log(error);
    }
  };

  addProduct = (product) => {
    const _product = {
      ...product,
      id: this.products.length + 1,
      slug: `ygfgfdzbsrdgdffzd${this.products.length + 1}`,
    };
    this.products = [...this.products, _product];
  };

  deleteProduct = (productSlug) => {
    const updatedProducts = this.products.filter(
      (product) => product.slug !== productSlug
    );
    this.products = updatedProducts;
  };
}

const myproductStore = new productStore();
myproductStore.fetchProducts();

export default myproductStore;
