import NextLink from "next/link";
import { Box, Container, Divider, Grid, Link, Stack, TextField, Typography } from "@mui/material";

import { footerLinks } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <Box component="footer" sx={{ mt: 10, py: 7, borderTop: "1px solid", borderColor: "divider" }}>
      <Container maxWidth="xl">
        <Stack spacing={4}>
          <Typography variant="h4" textAlign="center" fontWeight={700}>ZARDOUZ</Typography>
          <Typography textAlign="center" color="text.secondary" sx={{ maxWidth: 620, mx: "auto" }}>
            Thoughtful fashion, customization and pieces designed to stay with you.
          </Typography>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Stay in the loop</Typography>
              <Typography color="text.secondary" mb={2}>Sign up for new collections and studio news.</Typography>
              <TextField fullWidth size="small" placeholder="Email address" type="email" />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Stack direction="row" flexWrap="wrap" gap={2.5} justifyContent={{ xs: "flex-start", md: "flex-end" }}>
                {footerLinks.map((label) => (
                  <Link key={label} component={NextLink} href="#" color="text.primary" underline="hover">{label}</Link>
                ))}
                <Link component={NextLink} href="/contact-us" color="text.primary" underline="hover">Contact us</Link>
              </Stack>
            </Grid>
          </Grid>
          <Divider />
          <Typography variant="caption" color="text.secondary" textAlign="center">© 2025 Zardouz. All rights reserved.</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
