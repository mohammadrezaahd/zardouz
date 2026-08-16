import { Stack, Typography } from "@mui/material";

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <Stack spacing={1} alignItems="center" textAlign="center" maxWidth={720} mx="auto">
      {eyebrow && <Typography variant="overline" color="text.secondary" letterSpacing="0.14em">{eyebrow}</Typography>}
      <Typography variant="h3" fontWeight={700}>{title}</Typography>
      {description && <Typography color="text.secondary">{description}</Typography>}
    </Stack>
  );
}
