interface GoogleMapProps {
  address: string;
  title?: string;
}

export const GoogleMap = ({ address, title = "Google Maps" }: GoogleMapProps) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(address)}`;

  return <iframe title={title} src={src} width="100%" height="350" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />;
};
