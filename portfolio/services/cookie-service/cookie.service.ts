import Cookies from "js-cookie";

export const getCookie = (name: string) => Cookies.get(name);

export const deleteCookie = (name: string) => Cookies.remove(name);

export const setCookie = (name: string, value: string) => Cookies.set(name, value, { expires: 7 });