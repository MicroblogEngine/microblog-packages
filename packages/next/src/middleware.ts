import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from 'jose'

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
    if(!authorization)
      return new NextResponse(null, { status: 401 });

    try{
      if(! process.env.AUTH_SECRET) {
        return new NextResponse(null, { status: 401 });
      }

      let token = authorization?.split(" ");
      if (token.length !== 2) {
        return new NextResponse(null, { status: 401 });
      } 

      const { payload: { id }} = await jwtVerify(token[1]!, 
        new TextEncoder().encode(process.env.AUTH_SECRET),
        {
          algorithms: ['HS256'],
        });
      if(id) {
        req.headers.append("user", id as string);
      }
    }
    catch{
      return new NextResponse(null, { status: 401 });
    }    
  }

  return res;
}