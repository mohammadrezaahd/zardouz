import { Container, Grid } from "@mui/material";

import { PageShell } from "@/components/layout/PageShell";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { getProductById } from "@/lib/catalog";

export function ProductPage({ productId }: { productId: string }) {
  const product = getProductById(productId);
  const images = product.images?.length ? product.images : [product.image];

  return (
    <PageShell footer>
      <Container maxWidth="xl" disableGutters sx={{ pt: { xs: 7, md: 8 } }}>
        <Grid container>
          <Grid size={{ xs: 12, md: 7 }}><ProductGallery images={images} name={product.name} /></Grid>
          <Grid size={{ xs: 12, md: 5 }}><ProductInfo product={product} /></Grid>
        </Grid>
      </Container>
    </PageShell>
  );
}
