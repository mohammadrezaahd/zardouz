"use client";

import { useMemo, useState } from "react";
import { Container, FormControl, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";

import { PageShell } from "@/components/layout/PageShell";
import { FullBleedHero } from "@/components/common/FullBleedHero";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { products } from "@/lib/catalog";

export default function ArchivePage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [category, query]);

  return (
    <PageShell>
      <FullBleedHero title="Archive" image="/assets/images/main-banner.png" />
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 9 } }}>
        <Stack spacing={4}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="space-between">
            <TextField value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pieces" size="small" sx={{ minWidth: { sm: 280 } }} />
            <FormControl size="small" sx={{ minWidth: 180 }}><Select value={category} onChange={(event) => setCategory(event.target.value)}><MenuItem value="All">All collections</MenuItem><MenuItem value="Women">Women</MenuItem><MenuItem value="Accessories">Accessories</MenuItem><MenuItem value="Customized">Customized</MenuItem></Select></FormControl>
          </Stack>
          <Typography color="text.secondary">{filteredProducts.length} pieces</Typography>
          <ProductGrid products={filteredProducts} />
        </Stack>
      </Container>
    </PageShell>
  );
}
