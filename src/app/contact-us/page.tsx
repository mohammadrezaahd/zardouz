"use client";

import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";

import { PageShell } from "@/components/layout/PageShell";
import { FullBleedHero } from "@/components/common/FullBleedHero";

export default function ContactPage() {
  const { enqueueSnackbar } = useSnackbar();
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    enqueueSnackbar("Your message is ready to be connected to the backend.", { variant: "success" });
  };

  return (
    <PageShell>
      <FullBleedHero title="Contact us" image="/assets/images/contact-us.png" />
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 10 } }}>
        <Grid container spacing={{ xs: 5, md: 10 }}>
          <Grid size={{ xs: 12, md: 5 }}><Stack spacing={3}><Typography variant="h3">Get in touch</Typography><Typography color="text.secondary">Whether you have a question about a piece, need a custom appointment or want to collaborate, we would love to hear from you.</Typography><Typography component="a" href="mailto:hello@zardouz.com">hello@zardouz.com</Typography><Typography component="a" href="tel:+33123456789">+33 1 23 45 67 89</Typography><Typography color="text.secondary">10:00–18:00, Monday to Saturday</Typography></Stack></Grid>
          <Grid size={{ xs: 12, md: 7 }}><Stack component="form" onSubmit={submit} spacing={2}><Typography variant="h3">Send a message</Typography><TextField required label="Name" fullWidth /><TextField required label="Email" type="email" fullWidth /><TextField label="Subject" fullWidth /><TextField required label="Message" multiline minRows={6} fullWidth /><Button type="submit" variant="contained" sx={{ alignSelf: "flex-start", px: 5, py: 1.3 }}>Send message</Button></Stack></Grid>
        </Grid>
        <Stack mt={{ xs: 7, md: 12 }} spacing={2}><Typography variant="h4">Visit the studio</Typography><BoxMap /></Stack>
      </Container>
    </PageShell>
  );
}

function BoxMap() {
  return <iframe title="Zardouz studio map" src="https://www.google.com/maps?q=Paris%2C%20France&output=embed" style={{ width: "100%", height: 380, border: 0 }} loading="lazy" />;
}
