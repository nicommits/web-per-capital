const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

if (!CLOUD_NAME) {
  console.warn("Falta NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME en .env.local");
}

export function buildCloudinaryUrl(
  publicId: string,
  options?: string
): string {
  const transformation = options ? `${options}/` : "";
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformation}${publicId}`;
}
