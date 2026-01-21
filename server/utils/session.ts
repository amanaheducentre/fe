import { EventHandlerRequest, H3Event } from "h3";

export function setCookieWrapper(event: H3Event<EventHandlerRequest>, name: string, value: string) {
  deleteCookie(event, name);
  setCookie(event, name, value, {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    httpOnly: true,
    secure: false,
  });
}
