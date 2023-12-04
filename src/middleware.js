require("dotenv");
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const tokenObj = request.cookies.get("token");
    const typeUser = request.cookies.get("typeUser");

    if (
        request.nextUrl.pathname.includes("/admin") ||
        request.nextUrl.pathname.includes("/add") ||
        request.nextUrl.pathname.includes("/edit")
    ) {
        if (tokenObj === undefined) {
            console.log("No hay token");
            return NextResponse.redirect(new URL("/store", request.url));
        }

        const { payload } = await jwtVerify(
            tokenObj.value,
            new TextEncoder().encode(process.env.JWT_SECRET)
        );

        try {
            console.log(typeUser);
            if (typeUser.value !== "Administrador") {
                console.log("No es admin");
                return NextResponse.redirect(new URL("/store", request.url));
            }
            return NextResponse.next();
        } catch (error) {
            console.log(error);
            return NextResponse.redirect(new URL("/store", request.url));
        }
    }
}
