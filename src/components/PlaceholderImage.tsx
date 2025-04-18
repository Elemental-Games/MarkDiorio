// Generate a placeholder image as data URL
export default function PlaceholderImage({
  width = 300,
  height = 200,
  text = 'Image Not Found',
  backgroundColor = '#1e293b',
  textColor = '#ffffff'
}: {
  width?: number;
  height?: number;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}) {
  // Generate SVG placeholder image
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${backgroundColor}" />
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="16" 
        text-anchor="middle" 
        dominant-baseline="middle" 
        fill="${textColor}"
      >
        ${text}
      </text>
    </svg>
  `;
  
  // Convert SVG to base64 data URL
  const encodedSVG = encodeURIComponent(svgContent);
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedSVG}`;
  
  return dataUrl;
} 