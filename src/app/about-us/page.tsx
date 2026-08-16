import { Container, Stack, Typography } from "@mui/material";

import { PageShell } from "@/components/layout/PageShell";
import { FullBleedHero } from "@/components/common/FullBleedHero";

export default function AboutPage() {
  return <PageShell><FullBleedHero title="About Zardouz" image="/assets/images/main-banner.png" /><Container maxWidth="md" sx={{ py: { xs: 6, md: 12 } }}><Stack spacing={3}><Typography variant="h3">A wardrobe with a point of view.</Typography><Typography color="text.secondary">Zardouz is a fashion studio built around considered design, personal expression and the belief that a good piece can keep evolving.</Typography><Typography color="text.secondary">This page is intentionally content-first for now. Brand storytelling and CMS-backed content can be connected once the backend phase begins.</Typography></Stack></Container></PageShell>;
}
