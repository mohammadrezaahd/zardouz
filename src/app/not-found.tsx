import NextLink from "next/link";
import { Button, Container, Stack, Typography } from "@mui/material";

import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return <PageShell footer={false}><Container sx={{ minHeight: "100vh", display: "grid", placeItems: "center" }}><Stack alignItems="center" spacing={2} textAlign="center"><Typography variant="h1" sx={{ fontSize: { xs: "7rem", md: "11rem" }, lineHeight: 1 }}>4<span style={{ display: "inline-block", animation: "spin 5s linear infinite" }}>0</span>4</Typography><Typography variant="h4">Page not found</Typography><Button component={NextLink} href="/" variant="contained">Back to shop</Button></Stack></Container></PageShell>;
}
