import { NextRequest, NextResponse } from "next/server";

const restrictedRoutes = ["/signout", "/ask/panel"];

export function middleware({ cookies, nextUrl, url }: NextRequest) {
  const isAuthenticated = cookies.get("token");

  if (!isAuthenticated && restrictedRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/signin", url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
