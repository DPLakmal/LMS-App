import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token!.role);



    if (req.nextUrl.pathname.startsWith("/lecturer") &&
        req.nextauth.token!.role != "lecturer"
    ) {
        return NextResponse.rewrite(new URL("/Denided", req.url))
    }


    if (req.nextUrl.pathname.startsWith("/admin") &&
        req.nextauth.token!.role != "admin"
    ) {
        return NextResponse.rewrite(new URL("/Denided", req.url))
    }
},
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);



export const config = {
    matcher: ['/admin/:path*', '/lecturer/:path*'],
}