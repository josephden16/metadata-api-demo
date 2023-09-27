import { MetadataRoute } from "next";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await fetchProducts();
  return [
    {
      url: "https://example.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://example.com/products",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...products.map((product: any) => ({
      url: `https://example.com/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    })),
  ];
}
