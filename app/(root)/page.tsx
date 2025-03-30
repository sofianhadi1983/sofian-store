import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action"; 

export const metadata = {
  title: "Home",
}

const Home = async () => {
  const latesProducts = await getLatestProducts();
  return <>
    <ProductList 
      data={latesProducts} 
      title="Newest Arrival"
    />
  </>
}
 
export default Home;