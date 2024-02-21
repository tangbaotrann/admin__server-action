import ProductDetail from "@/app/ui/dashboard/products/[id]/ProductDetail";

function SingleProduct({ params }) {
  return <ProductDetail params={params} />;
}

export default SingleProduct;
