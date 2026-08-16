"use client";

import { useState } from "react";
import { Button, Checkbox, Container, Divider, FormControlLabel, Grid, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";

import { PageShell } from "@/components/layout/PageShell";

export default function CheckoutPage() {
  const { enqueueSnackbar } = useSnackbar();
  const [country, setCountry] = useState("France");

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    enqueueSnackbar("Checkout is ready for backend integration.", { variant: "info" });
  };

  return (
    <PageShell>
      <Container maxWidth="xl" sx={{ pt: { xs: 10, md: 13 } }}>
        <Grid container spacing={{ xs: 5, md: 10 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack component="form" onSubmit={submit} spacing={3}>
              <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}>Checkout</Typography>
              <Typography variant="h5">Contact information</Typography>
              <TextField required label="Email" type="email" fullWidth />
              <Typography variant="h5">Shipping address</Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}><TextField required label="First name" fullWidth /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField required label="Last name" fullWidth /></Grid>
                <Grid size={{ xs: 12 }}><TextField required label="Address" fullWidth /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField required label="City" fullWidth /></Grid>
                <Grid size={{ xs: 12, sm: 6 }}><TextField required label="Postal code" fullWidth /></Grid>
                <Grid size={{ xs: 12 }}><Select fullWidth value={country} onChange={(event) => setCountry(event.target.value)}>{["France", "Georgia", "United States"].map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}</Select></Grid>
              </Grid>
              <FormControlLabel control={<Checkbox />} label="Save this information for next time" />
              <Button type="submit" variant="contained" size="large" sx={{ py: 1.5 }}>Continue to payment</Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3} sx={{ bgcolor: "#f7f7f7", p: { xs: 3, md: 5 } }}>
              <Typography variant="h5" fontWeight={700}>Your order</Typography>
              <OrderRow title="Women&apos;s skirt × 3" value="$ 3,570" />
              <Divider />
              <OrderRow title="Shipping" value="Free" />
              <OrderRow title="Estimated tax" value="$ 357" />
              <Divider />
              <OrderRow title="Total" value="$ 3,927" strong />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </PageShell>
  );
}

function OrderRow({ title, value, strong = false }: { title: string; value: string; strong?: boolean }) {
  return <Stack direction="row" justifyContent="space-between"><Typography fontWeight={strong ? 700 : 400}>{title}</Typography><Typography fontWeight={strong ? 700 : 400}>{value}</Typography></Stack>;
}
