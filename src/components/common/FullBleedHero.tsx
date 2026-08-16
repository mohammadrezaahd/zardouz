import { Box, Container, Stack, Typography } from "@mui/material";

interface FullBleedHeroProps {
  title: string;
  image: string;
  children?: React.ReactNode;
}

export function FullBleedHero({ title, image, children }: FullBleedHeroProps) {
  return (
    <Box className="page-hero" sx={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.1), rgba(0,0,0,.45)), url("${image}")`, display: "flex", alignItems: "flex-end" }}>
      <Container maxWidth="xl" sx={{ pb: { xs: 6, md: 10 }, color: "white" }}>
        <Stack spacing={2}>
          <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "5rem" } }}>{title}</Typography>
          {children}
        </Stack>
      </Container>
    </Box>
  );
}
