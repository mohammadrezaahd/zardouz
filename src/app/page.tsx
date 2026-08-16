"use client";

import NextLink from "next/link";
import { useState } from "react";
import { Box, Button, Container, FormControl, Grid, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";

import { PageShell } from "@/components/layout/PageShell";
import { ProductCarousel } from "@/components/catalog/ProductCarousel";
import { SectionTitle } from "@/components/common/SectionTitle";
import { featuredProducts } from "@/lib/catalog";

const collections = [
  { title: "MEN", image: "/assets/images/men-collection.png", href: "/archive" },
  { title: "SUMMER COLLECTION", image: "/assets/images/summer-collection.png", href: "/archive" },
  { title: "ZARDOUZ ACCESSORIES", image: "/assets/images/zardouz-accessories.png", href: "/archive" },
];

export default function HomePage() {
  return (
    <PageShell transparentHeader>
      <Hero />
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 8 } }}>
        <Stack spacing={{ xs: 8, md: 14 }}>
          <CollectionGrid />
          <RenewSection />
          <CustomizedSection />
          <ProductCarousel products={featuredProducts} title="Latest pieces" />
        </Stack>
      </Container>
    </PageShell>
  );
}

function Hero() {
  const [language, setLanguage] = useState("English");
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Box sx={{ minHeight: { xs: "80vh", md: "100vh" }, backgroundImage: "url('/assets/images/main-banner.png')", backgroundPosition: "top center", backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center", color: "white", px: 3 }}>
      <Stack spacing={4} alignItems="center" sx={{ width: "min(100%, 360px)" }}>
        <Typography variant="h1" textAlign="center" sx={{ fontSize: { xs: "3rem", md: "5.5rem" }, letterSpacing: "0.04em" }}>ZAR-DOUZ</Typography>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <FormControl fullWidth>
            <Select value={language} onChange={(event) => setLanguage(event.target.value)} sx={{ color: "white", borderColor: "white", ".MuiOutlinedInput-notchedOutline": { borderColor: "white" }, ".MuiSvgIcon-root": { color: "white" } }}>
              <MenuItem value="English">ENGLISH</MenuItem>
              <MenuItem value="Georgia">GEORGIA</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" onClick={() => enqueueSnackbar(`${language} selected`, { variant: "success" })} sx={{ color: "white", borderColor: "white", py: 1.5 }}>GO</Button>
        </Stack>
      </Stack>
    </Box>
  );
}

function CollectionGrid() {
  return (
    <Grid container spacing={1}>
      {collections.map((collection, index) => (
        <Grid key={collection.title} size={{ xs: 12, md: index === 2 ? 12 : 6 }}>
          <Box sx={{ position: "relative", minHeight: { xs: 420, md: index === 2 ? 600 : 720 }, overflow: "hidden" }}>
            <Box component="img" src={collection.image} alt={collection.title} className="hover-image" sx={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }} />
            <Stack sx={{ position: "absolute", inset: 0, alignItems: "center", justifyContent: "flex-end", p: { xs: 3, md: 6 }, background: "linear-gradient(transparent 50%, rgba(0,0,0,.5))", color: "white" }} spacing={2}>
              <Typography variant="h3" textAlign="center" sx={{ fontSize: { xs: "1.7rem", md: "2.3rem" } }}>{collection.title}</Typography>
              <Button component={NextLink} href={collection.href} variant="outlined" sx={{ borderColor: "white", color: "white" }}>Explore collection</Button>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

function RenewSection() {
  return (
    <Box id="renew">
      <SectionTitle title="Zardouz Renew" description="We give existing pieces a second life through thoughtful repair, rework and new styling." />
      <Grid container spacing={{ xs: 3, md: 8 }} alignItems="center" mt={2}>
        <Grid size={{ xs: 12, md: 6 }}><Box component="img" src="/assets/images/renew-home.png" alt="Zardouz Renew" sx={{ width: "100%", maxHeight: 600, objectFit: "cover" }} /></Grid>
        <Grid size={{ xs: 12, md: 6 }}><Stack spacing={3} alignItems={{ xs: "center", md: "flex-start" }} textAlign={{ xs: "center", md: "left" }}><Typography variant="h4">Make what you have matter.</Typography><Typography color="text.secondary">In publishing and graphic design Lorem ipsum is a placeholder. Here, it is an invitation to imagine a piece differently.</Typography><Button component={NextLink} href="/contact-us" className="animated-underline" sx={{ color: "text.primary", p: 0 }}>Discover more</Button></Stack></Grid>
      </Grid>
    </Box>
  );
}

function CustomizedSection() {
  return (
    <Box id="customized">
      <SectionTitle title="Zardouz Customized" description="Choose a starting point, then make it yours." />
      <Grid container spacing={2} mt={2}>
        {["custom-1.png", "custom-2.png", "custom-3.png"].map((image, index) => (
          <Grid key={image} size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Box component="img" src={`/assets/images/${image}`} alt={`Customization ${index + 1}`} className="hover-image" sx={{ width: "100%", maxHeight: 500, objectFit: "cover" }} />
              <Typography variant="h5">{["Cloth", "Form", "Finish"][index]}</Typography>
              <Typography color="text.secondary">A flexible canvas for your personal point of view.</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
