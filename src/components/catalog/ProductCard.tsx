import NextLink from "next/link";
import { Box, Card, CardContent, Link, Stack, Typography } from "@mui/material";

import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/catalog";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 0, height: "100%", overflow: "visible" }}>
      <Link component={NextLink} href={`/product/${product.id}`} underline="none" color="inherit">
        <Box sx={{ position: "relative", aspectRatio: compact ? "1 / 1.15" : "1 / 1.25", overflow: "hidden" }}>
          <Box component="img" src={product.image} alt={product.name} className="hover-image" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
        <CardContent sx={{ p: 2 }}>
          <Stack spacing={0.5}>
            <Typography variant="body2" fontWeight={700}>{product.name}</Typography>
            <Typography variant="body2" color="text.secondary">{formatPrice(product.price)}</Typography>
          </Stack>
        </CardContent>
      </Link>
    </Card>
  );
}
