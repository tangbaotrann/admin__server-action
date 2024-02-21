import Products from "@/app/ui/dashboard/products/Products";

function ProductsPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  return <Products qSearch={q} pagination={page} />;
}

export default ProductsPage;
