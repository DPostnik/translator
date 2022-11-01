import { IconProps } from 'interfaces';

export default function ExchangeIcon({
  fill,
  size = { width: 25, height: 25 },
  stroke,
  onClick,
}: IconProps) {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 477.426 477.426"
      width={size.width}
      height={size.height}
      fill={fill}
      stroke={stroke}
      onClick={onClick}
      strokeWidth="1rem"
    >
      <polygon points="86.213,143.435 476.213,143.435 476.213,113.435 86.213,113.435 86.213,41.892 0,128.387 86.213,214.319" />
      <polygon points="477.426,349.202 391.654,263.43 391.424,334.364 1.213,334.364 1.213,364.364 391.326,364.364 391.095,435.533" />
    </svg>
  );
}
