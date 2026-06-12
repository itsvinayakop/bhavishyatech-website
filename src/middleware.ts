import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  // Rewrite careers.bhavishyatech.com/* to /careers-portal/*
  if (host.startsWith("careers.")) {
    url.pathname = `/careers-portal${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - file.svg, globe.svg, etc. (static files in public folder)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
