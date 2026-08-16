"use client";

import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, FormControl, MenuItem, Select, Stack, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useSnackbar } from "notistack";

import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/catalog";

export function ProductInfo({ product }: { product: Product }) {
  const { enqueueSnackbar } = useSnackbar();
  const [size, setSize] = useState(product.sizes?.[0] ?? "One size");
  const [color, setColor] = useState(product.colors?.[0] ?? "Default");

  const addToBag = () => {
    enqueueSnackbar(`${product.name} was added to your shopping bag.`, { variant: "success" });
  };

  return (
    <Stack spacing={4} sx={{ p: { xs: 3, md: 6 }, maxWidth: 700, mx: "auto" }}>
      <Stack spacing={1} textAlign="center">
        <Typography variant="h3" fontWeight={700} sx={{ fontSize: { xs: "2rem", md: "2.6rem" } }}>{product.name}</Typography>
        <Typography color="text.secondary">{formatPrice(product.price)}</Typography>
        <Typography variant="overline" color="secondary.main">Few items left</Typography>
      </Stack>

      <Button variant="contained" onClick={addToBag} fullWidth sx={{ py: 1.5 }}>Add to bag</Button>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        {product.sizes && <FormControl fullWidth size="small"><Typography variant="caption" mb={0.5}>Size</Typography><Select value={size} onChange={(event) => setSize(event.target.value)}>{product.sizes.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}</Select></FormControl>}
        {product.colors && <FormControl fullWidth size="small"><Typography variant="caption" mb={0.5}>Color</Typography><Select value={color} onChange={(event) => setColor(event.target.value)}>{product.colors.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}</Select></FormControl>}
      </Stack>

      <Box>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>Description</AccordionSummary>
          <AccordionDetails><Typography color="text.secondary">{product.description ?? "Designed with a quiet, considered approach to fit and finish."}</Typography></AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>Shipping & returns</AccordionSummary>
          <AccordionDetails><Typography color="text.secondary">Shipping and returns will be connected to the store backend in the next phase.</Typography></AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>Customization</AccordionSummary>
          <AccordionDetails><Typography color="text.secondary">Ask our studio about available custom colors, materials and adjustments.</Typography></AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
}
