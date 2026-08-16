export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images?: string[];
  description?: string;
  variation?: string;
  sizes?: string[];
  colors?: string[];
  customized?: boolean;
};

export const products: Product[] = [
  {
    id: "womens-skirt-1",
    name: "WOMEN'S SKIRT",
    category: "Women",
    price: 1190,
    image: "/assets/images/0eea0cf2-8bb4-465f-a18b-425b554d5ec5.png",
    images: [
      "/assets/images/sp-1.png",
      "/assets/images/sp-2.png",
      "/assets/images/sp-3.png",
      "/assets/images/sp-4.png",
      "/assets/images/sp-5.png",
    ],
    description: "A considered silhouette designed to be worn, customized and made your own.",
    variation: "light beige",
    sizes: ["36", "38", "40"],
    colors: ["Light beige", "Black", "Brown"],
    customized: true,
  },
  {
    id: "womens-skirt-2",
    name: "WOMEN'S SKIRT",
    category: "Women",
    price: 1190,
    image: "/assets/images/6f5a17aa-1b3b-4125-b62a-71e9b282275c.png",
    variation: "light beige",
    sizes: ["36", "38", "40"],
  },
  {
    id: "womens-skirt-3",
    name: "WOMEN'S SKIRT",
    category: "Women",
    price: 1190,
    image: "/assets/images/ccd6565e39d31fcea57691d1ea7eb65c33ccc109.png",
    variation: "light beige",
    sizes: ["36", "38", "40"],
  },
  {
    id: "womens-skirt-4",
    name: "WOMEN'S SKIRT",
    category: "Women",
    price: 1190,
    image: "/assets/images/705d9a37-4fc1-4bdc-9f83-9240cdfde0dd.png",
    variation: "light beige",
    sizes: ["36", "38", "40"],
  },
  {
    id: "custom-shirt",
    name: "CUSTOMIZED SHIRT",
    category: "Customized",
    price: 890,
    image: "/assets/images/custom-1.png",
  },
  {
    id: "accessory-1",
    name: "ZARDOUZ ACCESSORY",
    category: "Accessories",
    price: 350,
    image: "/assets/images/menu-item-1.png",
  },
];

export const featuredProducts = products.slice(0, 4);
export const primaryProduct = products[0];

export const cartItems = [
  { product: products[0], quantity: 1, size: "36", color: "Light beige" },
  { product: products[1], quantity: 1, size: "36", color: "Light beige" },
  { product: products[2], quantity: 1, size: "36", color: "Light beige" },
];

export function formatPrice(price: number) {
  return `$ ${price.toLocaleString("en-US")}`;
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id) ?? primaryProduct;
}
