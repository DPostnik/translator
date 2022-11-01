import { ROUTES } from 'constants/routes';
import { NavigationLink } from 'interfaces';

import HistoryIcon from 'icons/history-icon';
import HomeIcon from 'icons/home-icon';
import StarIcon from 'icons/star-icon';

const defaultSize = { width: 30, height: 30 };

export const navigationLinks: NavigationLink[] = [
  {
    to: ROUTES.HOME,
    label: 'Главная',
    iconPath: <HomeIcon size={defaultSize} />,
  },
  {
    to: ROUTES.FAVOURITE,
    label: 'Избранное',
    iconPath: <StarIcon size={defaultSize} />,
  },
  {
    to: ROUTES.HISTORY,
    label: 'История',
    iconPath: <HistoryIcon size={defaultSize} />,
  },
];
