import { ROUTES } from 'constants/routes';
import { NavigationLink } from 'interfaces';

import HomeIcon from 'assets/icons/home.svg';
import StarFavouriteIcon from 'assets/icons/star-favourite.svg';
import HistoryIcon from 'assets/icons/history.svg';


export const navigationLinks: NavigationLink[] = [
  {
    to: ROUTES.HOME,
    label: 'Главная',
    iconPath: HomeIcon,
  },
  {
    to: ROUTES.FAVOURITE,
    label: 'Избранное',
    iconPath: StarFavouriteIcon,
  },
  {
    to: ROUTES.HISTORY,
    label: 'История',
    iconPath: HistoryIcon,
  },
];
