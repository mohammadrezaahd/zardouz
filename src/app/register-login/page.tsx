"use client";

import { useEffect, useState } from "react";
import { Box, Button, Card, CardContent, Container, Divider, Stack, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";

import { PageShell } from "@/components/layout/PageShell";

const slides = [
  ["Improve your persona", "/assets/images/c0127876-d771-43ec-bb09-6a34b783be42.png"],
  ["Customize", "/assets/images/0eea0cf2-8bb4-465f-a18b-425b554d5ec5.png"],
  ["Live clothes", "/assets/images/705d9a37-4fc1-4bdc-9f83-9240cdfde0dd.png"],
];

export default function RegisterLoginPage() {
  const [tab, setTab] = useState(0);
  const [slide, setSlide] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((current) => (current + 1) % slides.length), 2500);
    return () => window.clearInterval(timer);
  }, []);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    enqueueSnackbar(tab === 0 ? "Sign in will connect to the backend in the next phase." : "Registration will connect to the backend in the next phase.", { variant: "info" });
  };

  return (
    <PageShell footer={false}>
      <Container maxWidth="md" sx={{ pt: { xs: 10, md: 14 }, pb: 8 }}>
        <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider", overflow: "hidden" }}>
          <Stack direction={{ xs: "column", md: "row" }}>
            <Box sx={{ display: { xs: "none", md: "block" }, width: "45%", minHeight: 560, position: "relative", color: "white" }}>
              {slides.map(([title, image], index) => <Box key={title} component="img" src={image} alt="" sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: slide === index ? 1 : 0, transition: "opacity 500ms ease" }} />)}
              <Stack sx={{ position: "absolute", inset: 0, justifyContent: "flex-end", p: 4, background: "linear-gradient(transparent, rgba(0,0,0,.65))" }}><Typography variant="h4">{slides[slide][0]}</Typography></Stack>
            </Box>
            <CardContent sx={{ flex: 1, p: { xs: 3, md: 5 } }}>
              <Stack spacing={3} component="form" onSubmit={submit}>
                <Typography variant="h4" fontWeight={700}>Welcome to Zardouz</Typography>
                <Tabs value={tab} onChange={(_, value: number) => setTab(value)} variant="fullWidth"><Tab label="Sign in" /><Tab label="Register" /></Tabs>
                <TextField required label="Email" type="email" fullWidth />
                {tab === 1 && <TextField required label="Name" fullWidth />}
                <TextField required label="Password" type="password" fullWidth />
                <Button type="submit" variant="contained" size="large" sx={{ py: 1.4 }}>{tab === 0 ? "Sign in" : "Create account"}</Button>
                <Divider><Typography variant="caption" color="text.secondary">or continue as guest</Typography></Divider>
                <Button variant="outlined" href="/">Continue shopping</Button>
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </Container>
    </PageShell>
  );
}
