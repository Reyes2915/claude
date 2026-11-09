export const mapEmbedUrl = (address: string) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(address)}&z=15&output=embed`;

export const directionsUrl = (address: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
