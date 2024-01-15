export { default } from "next-auth";

export const config = {
  matcher: ["/profile"],
  // matcher: ["/((?!register|api|login).*)"],
};
