import { EventHandlerRequest, H3Event } from "h3";

export function setCookieWrapper(event: H3Event<EventHandlerRequest>, name: string, token: string) {
  setCookie(event, name, token, {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    httpOnly: false,
    secure: false,
  });
}
