import { Container, Grid, Stack, Typography } from "@mui/material";

import { PageShell } from "@/components/layout/PageShell";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { CartSummary } from "@/components/cart/CartSummary";
import { cartItems } from "@/lib/catalog";

export default function CartPage() {
  return (
    <PageShell>
      <Container maxWidth="xl" sx={{ pt: { xs: 10, md: 13 }, pb: 4 }}>
        <Stack spacing={5}>
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}>Shopping bag</Typography>
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack divider={<div />}>
                {cartItems.map(({ product, quantity, size, color }) => <CartItemRow key={product.id} product={product} initialQuantity={quantity} size={size} color={color} />)}
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}><CartSummary /></Grid>
          </Grid>
          <Typography variant="h5" textAlign="center" sx={{ maxWidth: 800, mx: "auto" }}>You can always change your mind. Start your return or exchange within 30 days.</Typography>
        </Stack>
      </Container>
    </PageShell>
  );
}
