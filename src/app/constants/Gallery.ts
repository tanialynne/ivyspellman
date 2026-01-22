/**
 * Gallery/Instagram section content
 * Static gallery data for CMS migration
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  link?: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "/images/gallery-1.jpg",
    alt: "Forest path at dusk",
  },
  {
    id: "2",
    src: "/images/gallery-2.jpg",
    alt: "Autumn leaves and candles",
  },
  {
    id: "3",
    src: "/images/gallery-3.jpg",
    alt: "Mysterious cottage in the woods",
  },
  {
    id: "4",
    src: "/images/gallery-4.jpg",
    alt: "Ancient spell book",
  },
  {
    id: "5",
    src: "/images/gallery-5.jpg",
    alt: "Moonlit clearing",
  },
];

export const GALLERY_SECTION = {
  title: "Glimpses From the Forest",
};
