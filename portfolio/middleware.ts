import { NextRequest, NextResponse } from "next/server";

const restrictedRoutes = [
  "/ask/answer-question",
  "/ask/panel",
  "/ask/update-answer",
  "/signout"
];

export const middleware = ({ cookies, nextUrl, url }: NextRequest) => {
  const isAuthenticated = cookies.get("token");

  if (!isAuthenticated && restrictedRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/403", url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
