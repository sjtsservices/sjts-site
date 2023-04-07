/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

export type CursorType = {
  id?: any
}


export interface PaginatedResult<T> {
    data: T[]
    meta: {
      nextCoursor: CursorType,
      limit: number,
      total: number
    }
  }

{}
  
  export type PaginateOptions = { cursor?: CursorType, limit?: number | string }
  export type PaginateFunction = <T, K>(model: any, args?: K, options?: PaginateOptions) => Promise<PaginatedResult<T>>
  
  export const createInfinitePaginator = (defaultOptions: PaginateOptions): PaginateFunction => {
    return async (model, args: any = { where: undefined }, options) => {
   
      const limit = Number(options?.limit || defaultOptions?.limit) || 10
    
      const skip = 1
      const [total, data] = await Promise.all([
        model.count({ where: args.where }),
        model.findMany({
          ...args,
          take: limit,
          skip,
        }),
      ])
      return {
        data,
        meta: {
            nextCoursor: (data && data !== null) ? (data.length > limit) ? data[limit-1].id : undefined  : undefined,
            limit,
            total
        },
      }
    }
  }

