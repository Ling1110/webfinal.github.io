/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "BC001",
    title: "Jade Hare Bracelet",
    description:
            "Size: length around 220mm, diameter around 8mm,Main Material: Jade + Amber + S925 silver + Fresh Water Pearls,Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 8800,
    discontinued: false,
    categories: ["SNK-Home"]
  },

  {
    id: "BC002",
    title: "Radiant Rutile Bracelet",
    description:
            "Size: length around 170mm, diameter around 8mm.\rMain Material: Golden Rutilated Quartz + Amber + 18k Gold + Jade.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",

      price: 16800,
    discontinued: false,
      categories: ["SNK-Home"]
  },

  {
    id: "BC003",
    title: "Crystal Shanlan bracelet",
    description:
            "Size: length around 170mm, diameter 10mm.Main Material: Green Crystal + S925 silver.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 16800,
    discontinued: false,
      categories: ["SNK-Bracelet"]
  },

  {
    id: "BC004",
    title: "Amethyst Dream Bracelet",
    description:
            "Size: length around 190mm, diameter around 10mm.Main Material: Amethyst + S925 silver + Fresh Water Pearl.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 8800,
    discontinued: false,
    categories: ["SNK-Bracelet"]
  },

  {
    id: "BC005",
    title: "Agate Ruyuan bracelet",
    description:
            "Size: length around 260mm.Main Material: Agate + S925 Silver + Beeswax.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 3800,
    discontinued: false,
    categories: ["SNK-Bracelet"]
  },

  {
    id: "NC001",
    title: "Indigo Necklace",
    description:
            "Size: length about 450mm, bead diameter 3mm.Main Material: Lapis Lazuli + Fresh Water Pear + S925 silver.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 8800,
    discontinued: false,
      categories: ["SNK-Necklace"]
  },

  {
    id: "NC002",
    title: "Daffodil Dreams",
    description:
            "Size: length ajustable, diameter 8mm.Main Material: Hetian jade + S925 silver.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 3800,
    discontinued: false,
      categories: ["SNK-Necklace"]
  },

  {
    id: "NC003",
      title: "Sunny Daydreams",
    description:
            "Size: length about 65cm, diameter 6mm.Main Material: Hetian jade + Fresh Water Pearls.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 16800,
    discontinued: false,
    categories: ["SNK-Necklace"]
  },

  {
    id: "NC004",
      title: "Pure Serenity Necklace",
    description:
            "Size: length about 470mm, bead diameter 12mm.Main Material: Natural Fresh Water Pear + S925 silver.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 5800,
    discontinued: false,
    categories: ["SNK-Necklace"]
  },

  {
    id: "NC005",
      title: "Spring Tea Necklace",
    description:
          "Size: length around 30mm.Main Material: Jade + S925 silver.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 2800,
    discontinued: false,
      categories: ["SNK-Necklace"]
  },

  {
    id: "ER001",
    title: "Lily Of The Valley Earrings",
    description:
      "Look legendary in the Nike Air Max 270 G. The silhouette is a stitch-for-stitch reconstruction of the original big Air icon, with the addition of breathable mesh and innovative traction that performs at the highest level of play.",
    price: 19500,
    discontinued: false,
    categories: ["SNK-Earrings"]
  },

  {
    id: "ER002",
    title: "White Magnolia Earrings",
    description:
            "Size: length around 80mm*8mm.  white jade: 17.8mm*7.5mm.Main Material: White jade + gold - plated copper.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 2800,
    discontinued: false,
      categories: ["SNK-Earrings"]
  },

  {
    id: "ER003",
    title: "Cube Malachite Earrings",
    description:
            "Size: length about 35mm.Main Material: Malachite + Fresh Water Pear + S925 silver.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 2800,
    discontinued: false,
    categories: ["SNK-Earrings"]
  },

  {
    id: "ER004",
    title: "Malachite Earrings",
    description:
            "Size: length around 220mm, diameter  around 4-4.5mm.Main Material: Malachite + S925 silver + Fresh Water Pearls.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 2800,
    discontinued: false,
    categories: ["SNK-Earrings"]
  },

  {
    id: "ER005",
    title: "Moonlit Pearls Earrings",
    description:
            "Size: length about 22mm.Main Material: Fresh Water Pear + S925 silver.Handmade products may have slight variations in measurements, please refer to the actual product for accuracy.",
    price: 2800,
    discontinued: false,
      categories: ["SNK-Earrings"]
  }
];
