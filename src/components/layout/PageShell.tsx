import { Box } from "@mui/material";

import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

interface PageShellProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
  footer?: boolean;
}

export function PageShell({ children, transparentHeader = false, footer = true }: PageShellProps) {
  return (
    <>
      <SiteHeader transparent={transparentHeader} />
      <Box component="main">{children}</Box>
      {footer && <SiteFooter />}
    </>
  );
}
