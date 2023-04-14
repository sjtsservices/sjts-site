/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function convertNullToUndefined<T>(obj: T): any {
    const newObj = {...obj} as any;
    for (const key in newObj) {
      if (newObj[key] === null) {
        newObj[key] = undefined;
      }
    }
    return newObj as any;
  }