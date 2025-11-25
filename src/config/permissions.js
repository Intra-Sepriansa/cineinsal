export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
};

export const PERMISSIONS = {
  VIEW_ADMIN_DASHBOARD: 'view_admin_dashboard',
  MANAGE_VIDEOS: 'manage_videos',
  MANAGE_USERS: 'manage_users',
  WATCH_PREMIUM_CONTENT: 'watch_premium_content',
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    PERMISSIONS.VIEW_ADMIN_DASHBOARD,
    PERMISSIONS.MANAGE_VIDEOS,
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.WATCH_PREMIUM_CONTENT,
  ],
  [ROLES.USER]: [
    PERMISSIONS.WATCH_PREMIUM_CONTENT, // Assuming standard users can watch if subbed
  ],
  [ROLES.GUEST]: [],
};
