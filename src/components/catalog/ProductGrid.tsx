import { Grid } from "@mui/material";

import type { Product } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <Grid container spacing={0}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 6, sm: 4, lg: 3 }}>
          <ProductCard product={product} compact />
        </Grid>
      ))}
    </Grid>
  );
}
