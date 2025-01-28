import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from 'jose'

type JWT = {
  id: string;
  role: string;
}

export async function middleware(req:NextRequest) {
  const res = NextResponse.next();

  /*
  const origin = req.headers.get("origin");
  if (! origin)
    return res;

  // if the origin is an allowed one,
  // add it to the 'Access-Control-Allow-Origin' header
  if (allowedOrigins.includes(origin)) {
    res.headers.append('Access-Control-Allow-Origin', origin);
  }

  // add the remaining CORS headers to the response
  res.headers.append('Access-Control-Allow-Credentials', "true")
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.headers.append(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  */
 
  if(! req.url.includes('/health') && 
    ! req.url.includes('/metrics') && 
    ! req.url.includes('/auth')) {
    const authorization = req.headers.get('authorization');
    if(!authorization) {
      console.error("Missing authorization header");
      return new NextResponse(JSON.stringify({ errors: { auth: ["Could not authenticate"] } }), { status: 401 });
    }

    if(! process.env.AUTH_SECRET) {
      console.error("Missing auth secret");
      return new NextResponse(JSON.stringify({ errors: { auth: ["Could not authenticate"] } }), { status: 401 });
    }

    const token = authorization?.split(" ");
    if (token.length !== 2) {
      console.error("Missing auth token");
      return new NextResponse(JSON.stringify({ errors: { auth: ["Could not authenticate"] } }), { status: 401 });
    } 

    const { payload } = await jwtVerify(token[1]!, 
      new TextEncoder().encode(process.env.AUTH_SECRET),
      {
        algorithms: ['HS256'],
      });
    if(payload) {
      const jwt = payload as JWT;
      res.headers.set("user", jwt.id);
      res.headers.set("role", jwt.role);
    }
  }

  return res;
}