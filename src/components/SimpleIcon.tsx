interface SimpleIconProps {
  path: string;
  size?: number;
  color?: string;
  className?: string;
}

export function SimpleIcon({ path, size = 24, color = "#00ff00", className = "" }: SimpleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
}
