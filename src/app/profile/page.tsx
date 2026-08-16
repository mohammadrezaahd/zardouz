"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, TextField, Typography } from "@mui/material";
import { Menu, PersonOutline } from "@mui/icons-material";
import { useSnackbar } from "notistack";

import { PageShell } from "@/components/layout/PageShell";

const sections = ["Overview", "My orders", "Saved items", "Account settings", "Appointments"];

export default function ProfilePage() {
  const [active, setActive] = useState("Overview");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const sidebar = (
    <Stack sx={{ width: { xs: 280, md: 250 }, height: "100%", p: 3 }}>
      <Stack direction="row" alignItems="center" spacing={1} mb={4}><PersonOutline /><Typography fontWeight={700}>My account</Typography></Stack>
      <List disablePadding>
        {sections.map((section) => <ListItemButton key={section} selected={active === section} onClick={() => { setActive(section); setMobileOpen(false); }} sx={{ borderRadius: 1, mb: 0.5 }}><ListItemText primary={section} /></ListItemButton>)}
      </List>
      <Button component={NextLink} href="/" sx={{ justifyContent: "flex-start", mt: "auto", color: "text.primary" }}>Back to shop</Button>
    </Stack>
  );

  return (
    <PageShell footer={false}>
      <Container maxWidth="xl" sx={{ pt: { xs: 9, md: 11 }, pb: 6 }}>
        <Stack direction="row" spacing={{ xs: 0, md: 5 }} sx={{ minHeight: "calc(100vh - 150px)" }}>
          <Box component="aside" sx={{ display: { xs: "none", md: "block" }, borderRight: "1px solid", borderColor: "divider" }}>{sidebar}</Box>
          <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
          <Stack flex={1} spacing={4}>
            <IconButton onClick={() => setMobileOpen(true)} sx={{ display: { xs: "inline-flex", md: "none" }, alignSelf: "flex-start" }} aria-label="open account menu"><Menu /></IconButton>
            <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}>{active}</Typography>
            {active === "Overview" ? <Overview /> : <AccountSection section={active} onSave={() => enqueueSnackbar(`${active} saved locally for now.`, { variant: "success" })} />}
          </Stack>
        </Stack>
      </Container>
    </PageShell>
  );
}

function Overview() {
  return <Stack spacing={4}><Typography variant="h5">Welcome back.</Typography><Stack direction={{ xs: "column", sm: "row" }} spacing={2}>{["3 orders", "2 saved items", "1 appointment"].map((item) => <Box key={item} sx={{ border: "1px solid", borderColor: "divider", p: 3, flex: 1 }}><Typography variant="h5" fontWeight={700}>{item}</Typography><Typography color="text.secondary">View details in your account.</Typography></Box>)}</Stack></Stack>;
}

function AccountSection({ section, onSave }: { section: string; onSave: () => void }) {
  if (section === "My orders") return <Stack spacing={2}>{["Order #ZD-1024", "Order #ZD-1009"].map((order) => <Stack key={order} direction="row" justifyContent="space-between" sx={{ borderBottom: "1px solid", borderColor: "divider", py: 2 }}><Typography>{order}</Typography><Typography color="text.secondary">Processing</Typography></Stack>)}</Stack>;
  return <Stack spacing={3} maxWidth={650}><Typography color="text.secondary">This section is ready for the next data and authentication phase.</Typography><TextField label="Name" defaultValue="Zardouz customer" fullWidth /><TextField label="Email" defaultValue="hello@example.com" fullWidth /><Button variant="contained" onClick={onSave} sx={{ alignSelf: "flex-start", px: 4 }}>Save changes</Button></Stack>;
}
