export const CATEGORIES = [
  { slug: "canas", label: "Cañas" },
  { slug: "reels", label: "Reels" },
  { slug: "senuelos", label: "Señuelos" },
  { slug: "accesorios", label: "Accesorios" },
];

export const getCategoryLabel = (slug) =>
  CATEGORIES.find((category) => category.slug === slug)?.label ?? slug;

export const formatPrice = (price) => `$${price.toLocaleString("es-AR")}`;
