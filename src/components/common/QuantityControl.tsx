"use client";

import { IconButton, Stack, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

interface QuantityControlProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

export function QuantityControl({ value, onChange, max = 10 }: QuantityControlProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1} sx={{ border: "1px solid", borderColor: "divider", width: "fit-content", px: 0.5 }}>
      <IconButton aria-label="decrease quantity" size="small" onClick={() => onChange(Math.max(1, value - 1))}><Remove fontSize="small" /></IconButton>
      <Typography sx={{ minWidth: 24, textAlign: "center" }}>{value}</Typography>
      <IconButton aria-label="increase quantity" size="small" onClick={() => onChange(Math.min(max, value + 1))}><Add fontSize="small" /></IconButton>
    </Stack>
  );
}
