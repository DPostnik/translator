import { IconProps } from 'interfaces';

export default function RemoveIcon({
  fill,
  size = { width: 25, height: 25 },
  onClick,
  className,
}: IconProps) {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      width={size.width}
      height={size.height}
      fill={fill}
      onClick={onClick}
      className={className}
    >
      <rect id="view-box" width="24" height="24" fill="none" />
      <path
        id="Shape"
        d="M0,9.75A9.75,9.75,0,1,1,9.75,19.5,9.761,9.761,0,0,1,0,9.75Zm1.5,0A8.25,8.25,0,1,0,9.75,1.5,8.259,8.259,0,0,0,1.5,9.75Zm5.365.751A.813.813,0,0,1,6,9.75.813.813,0,0,1,6.865,9h5.769a.814.814,0,0,1,.866.75.814.814,0,0,1-.866.751Z"
        transform="translate(2.25 2)"
      />
    </svg>
  );
}
