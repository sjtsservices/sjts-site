import { api } from '@/utils/api';
import { useRouter } from 'next/router';
import React, { type ReactElement, useState } from 'react'

export type DeleteJobActionProps = {
    id?: string,
    children: ((state: string) => ReactElement) | ReactElement;
}


// const DeleteJobAction = ({ children }: DeleteJobActionProps) => {
//     const router = useRouter()
//     const {} = api.jobs.delete.useMutation({id: ''})

//   if (typeof children === 'function') {
//     return <div>{children(state)}</div>;
//   }

//   return <div>{React.cloneElement(children, { parentState: state })}</div>;
// };

