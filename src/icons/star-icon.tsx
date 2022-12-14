import { IconProps } from 'interfaces';

export default function StarIcon({
  fill,
  size = { width: 25, height: 25 },
  stroke,
  className,
}: IconProps) {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 43.128 43.128"
      width={size.width}
      height={size.height}
      fill={fill}
      stroke={stroke}
      className={className}
    >
      <path
        d="M39.199,15.197H27.668L24.105,4.232c-1.404-4.326-3.68-4.326-5.084,0l-3.563,10.965H3.928
		c-4.545,0-5.25,2.164-1.571,4.836l9.326,6.775L8.121,37.775c-1.404,4.322,0.438,5.662,4.116,2.988l9.326-6.775l9.328,6.775
		c3.678,2.674,5.52,1.334,4.116-2.988l-3.564-10.967l9.326-6.775C44.449,17.361,43.744,15.197,39.199,15.197z"
      />
    </svg>
  );
}
