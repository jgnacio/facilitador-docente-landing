import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/((?!fd-panel|api|_next/static|_next/image|favicon|images|apple-touch-icon|web-app-manifest|.*\\.(?:png|jpg|jpeg|svg|ico|webp|css|js|woff2?|ttf)).*)",
  ],
};
