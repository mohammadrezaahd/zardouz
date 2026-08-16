"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";

import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/catalog";
import { QuantityControl } from "@/components/common/QuantityControl";

interface CartItemRowProps {
  product: Product;
  initialQuantity: number;
  size: string;
  color: string;
}

export function CartItemRow({ product, initialQuantity, size, color }: CartItemRowProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={3} py={3}>
      <Box component="img" src={product.image} alt={product.name} sx={{ width: { xs: "100%", sm: 180 }, height: { xs: 260, sm: 220 }, objectFit: "cover" }} />
      <Stack spacing={2} flex={1}>
        <Stack direction="row" justifyContent="space-between" gap={2}>
          <Box><Typography variant="h6" fontWeight={700}>{product.name}</Typography><Typography color="text.secondary">Variation: {color}</Typography></Box>
          <Typography fontWeight={700}>{formatPrice(product.price * quantity)}</Typography>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} divider={<Divider orientation="vertical" flexItem />}>
          <Typography>Size: {size}</Typography>
          <Typography>Color: {color}</Typography>
          {product.customized && <Typography>Customized</Typography>}
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt="auto">
          <QuantityControl value={quantity} onChange={setQuantity} />
          <Stack direction="row" spacing={2}><Button component={NextLink} href="#" color="inherit" sx={{ textDecoration: "underline", p: 0 }}>Remove</Button><Button component={NextLink} href="#" color="inherit" sx={{ textDecoration: "underline", p: 0 }}>Save item</Button></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
