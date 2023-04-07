/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function convertNullToUndefined<T>(obj: T): {[K in keyof T]: T[K] extends null ? undefined : T[K]} {
    const newObj = {...obj} as any;
    for (const key in newObj) {
      if (newObj[key] === null) {
        newObj[key] = undefined;
      }
    }
    return newObj as {[K in keyof T]: T[K] extends null ? undefined : T[K]};
  }