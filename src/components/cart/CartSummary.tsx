import NextLink from "next/link";
import { Button, Divider, Stack, Typography } from "@mui/material";

export function CartSummary() {
  return (
    <Stack spacing={2} sx={{ border: "1px solid", borderColor: "divider", p: { xs: 2, md: 4 } }}>
      <Typography variant="h5" fontWeight={700}>Order summary</Typography>
      <SummaryRow label="Subtotal" value="$ 3,570" />
      <SummaryRow label="Shipping" value="Free" />
      <SummaryRow label="Estimated tax" value="$ 357" />
      <Divider />
      <SummaryRow label="Estimated total" value="$ 3,927" strong />
      <Button component={NextLink} href="/checkout" variant="contained" fullWidth sx={{ py: 1.5 }}>Checkout</Button>
    </Stack>
  );
}

function SummaryRow({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return <Stack direction="row" justifyContent="space-between"><Typography fontWeight={strong ? 700 : 400}>{label}</Typography><Typography fontWeight={strong ? 700 : 400}>{value}</Typography></Stack>;
}
