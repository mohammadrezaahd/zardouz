import { ProductPage } from "../ProductPage";

export default async function ProductRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductPage productId={slug} />;
}
