export const USERS_API = "/api/users";
export const REVERSE_LOCATION_API = "https://nominatim.openstreetmap.org/reverse";

export const CREATE_ROUTE_APPENDIX = "create";
export const EDIT_ROUTE_APPENDIX = "edit";

export const USER_SLUG = "userdId";

export const ROOT_ROUTE = "/";
export const USERS_ROUTE = "/users";
export const USERS_CREATE_ROUTE = `${USERS_ROUTE}/${CREATE_ROUTE_APPENDIX}`;
export const USER_VIEW_ROUTE = `${USERS_ROUTE}/:${USER_SLUG}`;
export const USER_EDIT_ROUTE = `${USERS_ROUTE}/:${USER_SLUG}/${EDIT_ROUTE_APPENDIX}`;
