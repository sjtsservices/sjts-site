/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {match, pathToRegexp} from 'path-to-regexp';

export function matchRoute(route1?: string, route2?: string) {
    if(!route1 || !route2) return false;
  const keys = [];
  const check = match(route1);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return check(route2) ? true : false;
}
