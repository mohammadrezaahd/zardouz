"use client";

import { Box } from "@mui/material";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  return (
    <Box sx={{ width: "100%", height: { xs: "70vh", md: "calc(100vh - 64px)" }, minHeight: 500 }}>
      <Swiper
        direction="vertical"
        modules={[Mousewheel, Pagination]}
        mousewheel
        pagination={{ clickable: true }}
        slidesPerView={1}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Box component="img" src={image} alt={name} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
