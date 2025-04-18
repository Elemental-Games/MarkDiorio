import React, { useState } from 'react';
import Image from 'next/image';
import PlaceholderImage from './PlaceholderImage';

interface StaticImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  onLoad?: () => void;
}

export default function StaticImage({
  src,
  alt,
  width = 100,
  height = 100,
  fill = false,
  className = '',
  style = {},
  priority = false,
  onLoad
}: StaticImageProps) {
  const [error, setError] = useState(false);
  
  // Adjust src path for GitHub Pages deployment
  const adjustedSrc = src.startsWith('/') ? src : `/${src}`;
  
  // Generate fallback image
  const fallbackSrc = PlaceholderImage({
    width: fill ? 300 : width,
    height: fill ? 200 : height,
    text: alt || 'Image Not Found',
  });
  
  const handleError = () => {
    console.error(`Failed to load image: ${adjustedSrc}`);
    setError(true);
    // Still call onLoad to avoid stuck loading states
    if (onLoad) onLoad();
  };
  
  return (
    <Image
      src={error ? fallbackSrc : adjustedSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      style={style}
      priority={priority}
      onLoad={onLoad}
      onError={handleError}
      unoptimized={true}
    />
  );
} 