import routeConfig from './routeConfig';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const mainNavigation = [
  {
    label: 'Home',
    path: routeConfig.home,
    icon: HomeIcon,
  },
  {
    label: 'Explore',
    path: routeConfig.explore,
    icon: ExploreIcon,
  },
];

export const userNavigation = [
  {
    label: 'Profile',
    path: routeConfig.profile,
    icon: PersonIcon,
  },
  {
    label: 'Settings',
    path: routeConfig.settings,
    icon: SettingsIcon,
  },
];

export const adminNavigation = [
  {
    label: 'Dashboard',
    path: routeConfig.admin.dashboard,
    icon: AdminPanelSettingsIcon,
  },
  {
    label: 'Videos',
    path: routeConfig.admin.videos,
  },
  {
    label: 'Users',
    path: routeConfig.admin.users,
  },
];
