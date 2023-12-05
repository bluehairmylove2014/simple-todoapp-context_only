import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    !request.nextUrl.pathname.startsWith("/login") &&
    (!request.cookies.has("token") || !request.cookies.get("token"))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
    // return NextResponse.next();
  } else return NextResponse.next();
}

export const config = {
  matcher: ["/today/:path*"],
};
