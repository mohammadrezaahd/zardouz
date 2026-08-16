"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Close,
  Menu,
  PersonOutline,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { useSnackbar } from "notistack";

import { accountLinks } from "@/lib/navigation";
import { cartItems, formatPrice } from "@/lib/catalog";

type Panel = "search" | "account" | "cart" | "menu" | "contact" | null;

interface SiteHeaderProps {
  transparent?: boolean;
}

const panelTitle: Record<Exclude<Panel, null>, string> = {
  search: "SEARCH",
  account: "ACCOUNT",
  cart: "SHOPPING BAG",
  menu: "MENU",
  contact: "CONTACT US",
};

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const pathname = usePathname();
  const { enqueueSnackbar } = useSnackbar();
  const [activePanel, setActivePanel] = useState<Panel>(null);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const light = transparent && !scrolled;
  const iconColor = light ? "#fff" : "#131313";

  const closePanel = () => setActivePanel(null);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (query.trim()) {
      enqueueSnackbar(`Search for “${query.trim()}” will connect after the backend is added.`, {
        variant: "info",
      });
    }
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          inset: "0 0 auto",
          zIndex: (theme) => theme.zIndex.appBar,
          color: iconColor,
          backgroundColor: light ? "transparent" : "rgba(255,255,255,0.96)",
          borderBottom: light ? "none" : "1px solid rgba(19,19,19,0.08)",
          transition: "background-color 200ms ease, color 200ms ease",
          backdropFilter: light ? "none" : "blur(10px)",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 64,
            px: { md: 5, lg: 8 },
          }}
        >
          <Button
            onClick={() => setActivePanel("contact")}
            startIcon={<span aria-hidden>+</span>}
            sx={{ color: "inherit", minWidth: 0, p: 0, fontSize: 14 }}
          >
            Contact Us
          </Button>

          <Box component={NextLink} href="/" sx={{ color: "inherit", textDecoration: "none" }}>
            <Typography sx={{ fontSize: 25, letterSpacing: "0.04em", fontWeight: 500 }}>
              ZAR-DOUZ
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton aria-label="shopping bag" onClick={() => setActivePanel("cart")} sx={{ color: iconColor }}>
              <Badge badgeContent={cartItems.length} color="primary">
                <ShoppingBagOutlined />
              </Badge>
            </IconButton>
            <IconButton aria-label="account" onClick={() => setActivePanel("account")} sx={{ color: iconColor }}>
              <PersonOutline />
            </IconButton>
            <IconButton aria-label="search" onClick={() => setActivePanel("search")} sx={{ color: iconColor }}>
              <Search />
            </IconButton>
            <Button
              onClick={() => setActivePanel("menu")}
              startIcon={<Menu />}
              sx={{ color: "inherit", minWidth: 0, ml: 1 }}
            >
              Menu
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 58,
            px: 2,
          }}
        >
          <Box component={NextLink} href="/" sx={{ color: "inherit", textDecoration: "none" }}>
            <Typography sx={{ fontSize: 21, letterSpacing: "0.03em" }}>ZAR-DOUZ</Typography>
          </Box>
          <Stack direction="row" spacing={0.2}>
            <IconButton aria-label="shopping bag" onClick={() => setActivePanel("cart")} sx={{ color: iconColor }}>
              <Badge badgeContent={cartItems.length} color="primary"><ShoppingBagOutlined fontSize="small" /></Badge>
            </IconButton>
            <IconButton aria-label="account" onClick={() => setActivePanel("account")} sx={{ color: iconColor }}>
              <PersonOutline fontSize="small" />
            </IconButton>
            <IconButton aria-label="search" onClick={() => setActivePanel("search")} sx={{ color: iconColor }}>
              <Search fontSize="small" />
            </IconButton>
            <IconButton aria-label="menu" onClick={() => setActivePanel("menu")} sx={{ color: iconColor }}>
              <Menu fontSize="small" />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={activePanel !== null}
        onClose={closePanel}
        PaperProps={{ sx: { width: { xs: "100%", sm: 430 }, p: { xs: 2, sm: 3 } } }}
      >
        {activePanel && (
          <>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
              <Typography variant="h6" fontWeight={700}>{panelTitle[activePanel]}</Typography>
              <IconButton aria-label="close" onClick={closePanel}><Close /></IconButton>
            </Stack>

            {activePanel === "search" && (
              <Box component="form" onSubmit={handleSearch}>
                <TextField
                  autoFocus
                  fullWidth
                  label="What are you looking for?"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  InputProps={{ endAdornment: <InputAdornment position="end"><Search /></InputAdornment> }}
                />
                <SearchSuggestions />
              </Box>
            )}

            {activePanel === "account" && (
              <List disablePadding>
                {accountLinks.map((link) => (
                  <ListItem key={link.label} disablePadding>
                    <ListItemButton component={NextLink} href={link.href} onClick={closePanel}>
                      <ListItemText primary={link.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}

            {activePanel === "cart" && <CartPreview onClose={closePanel} />}

            {activePanel === "menu" && (
              <Stack spacing={3}>
                <Typography variant="h4" fontWeight={700}>Explore</Typography>
                <Stack spacing={1.5}>
                  {[
                    ["Women", "/archive"],
                    ["Men", "/archive"],
                    ["Accessories", "/archive"],
                    ["Zardouz Renew", "/#renew"],
                    ["Customized", "/#customized"],
                  ].map(([label, href]) => (
                    <Button key={label} component={NextLink} href={href} onClick={closePanel} sx={{ justifyContent: "flex-start", color: "text.primary", fontSize: 18, p: 0 }}>
                      {label}
                    </Button>
                  ))}
                </Stack>
                <Divider />
                <Stack direction="row" spacing={1}>
                  <Box component="img" src="/assets/images/menu-item-1.png" alt="Handbag" sx={{ width: "50%", aspectRatio: 1, objectFit: "cover" }} />
                  <Box component="img" src="/assets/images/menu-item-2.png" alt="Accessory" sx={{ width: "50%", aspectRatio: 1, objectFit: "cover" }} />
                </Stack>
              </Stack>
            )}

            {activePanel === "contact" && (
              <Stack spacing={2}>
                <Typography variant="h4" fontWeight={700}>Let&apos;s talk</Typography>
                <Typography color="text.secondary">For appointments, custom pieces and general questions, send us a message.</Typography>
                <Button component={NextLink} href="/contact-us" variant="contained" onClick={closePanel}>Open contact page</Button>
                <Typography component="a" href="mailto:hello@zardouz.com" sx={{ color: "text.primary" }}>hello@zardouz.com</Typography>
              </Stack>
            )}
          </>
        )}
      </Drawer>

      {pathname === "/" && <Box sx={{ height: { xs: 58, md: 64 } }} />}
    </>
  );
}

function SearchSuggestions() {
  return (
    <Stack spacing={1} mt={5}>
      <Typography variant="overline" fontWeight={700}>Trending searches</Typography>
      {['Handbags', 'Accessories', 'Tops & Shirts', 'Skirt'].map((item) => (
        <Typography key={item} color="text.secondary">{item}</Typography>
      ))}
    </Stack>
  );
}

function CartPreview({ onClose }: { onClose: () => void }) {
  return (
    <Stack spacing={2}>
      <Typography color="text.secondary">{cartItems.length} items in your shopping bag.</Typography>
      <Stack spacing={1.5} divider={<Divider flexItem />}>
        {cartItems.map(({ product, quantity, size }) => (
          <Stack key={product.id} direction="row" spacing={1.5} alignItems="center">
            <Box component="img" src={product.image} alt={product.name} sx={{ width: 70, height: 80, objectFit: "cover", borderRadius: 1 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" fontWeight={700}>{product.name}</Typography>
              <Typography variant="caption" color="text.secondary">Quantity: {quantity} · Size: {size}</Typography>
              <Typography variant="body2">{formatPrice(product.price)}</Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
      <Button component={NextLink} href="/checkout" variant="contained" onClick={onClose}>Checkout</Button>
      <Button component={NextLink} href="/cart" variant="outlined" onClick={onClose}>View shopping bag</Button>
    </Stack>
  );
}
