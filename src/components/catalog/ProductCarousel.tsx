"use client";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import type { Product } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
  title?: string;
}

export function ProductCarousel({ products, title = "Featured pieces" }: ProductCarouselProps) {
  return (
    <Stack spacing={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4" fontWeight={700}>{title}</Typography>
        <Stack direction="row" spacing={1}>
          <IconButton className="product-carousel-prev" aria-label="previous"><ArrowBackIosNew fontSize="small" /></IconButton>
          <IconButton className="product-carousel-next" aria-label="next"><ArrowForwardIos fontSize="small" /></IconButton>
        </Stack>
      </Stack>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ prevEl: ".product-carousel-prev", nextEl: ".product-carousel-next" }}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1.25}
        breakpoints={{ 600: { slidesPerView: 2.25 }, 900: { slidesPerView: 3.25 }, 1200: { slidesPerView: 4 } }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Box sx={{ pb: 4, height: "100%" }}><ProductCard product={product} /></Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}
