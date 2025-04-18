import React from 'react';
import Image from 'next/image';

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
  // No need for complex path adjustments or error handling
  // Just use the image directly as provided
  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      style={style}
      priority={priority}
      onLoad={onLoad}
      unoptimized={true}
    />
  );
} 