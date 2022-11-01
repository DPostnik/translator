import { IconProps } from 'interfaces';

export default function MoonIcon({
  size = { width: 25, height: 25 },
}: IconProps) {
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 81.289 81.289"
      fill="#fff75e"
    >
      <path
        d="M79.248,38.668c-1.246-0.464-2.669-0.088-3.518,0.95c-4.791,5.84-11.858,9.192-19.403,9.192
		c-13.833,0-25.083-11.255-25.083-25.083c0-6.963,2.808-13.441,7.908-18.242c0.977-0.918,1.26-2.357,0.705-3.579
		c-0.552-1.222-1.818-1.959-3.157-1.826C15.778,2.112,0,19.511,0,40.555c0,22.424,18.245,40.669,40.672,40.669
		c22.16,0,40.002-17.363,40.616-39.528C81.324,40.355,80.508,39.136,79.248,38.668z M40.671,74.953
		c-18.971,0-34.402-15.43-34.402-34.4c0-14.93,9.389-27.69,22.859-32.43c-2.714,4.689-4.156,10.022-4.156,15.605
		c0,17.292,14.065,31.355,31.357,31.355c6.317,0,12.373-1.882,17.479-5.322C69.82,64.399,56.557,74.953,40.671,74.953z"
      />
    </svg>
  );
}
