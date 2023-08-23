import Cookies from "js-cookie";

export const getCookie = (name: string) => Cookies.get("token");

export const deleteCookie = (name: string) => Cookies.remove("token");

export const setCookie = (name: string, value: string) => Cookies.set(name, value, { expires: 7 });