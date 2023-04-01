import { api } from "@/utils/api";

export function useJobMutation(){
    const createMutation = api.jobs.create.useMutation();
    const updateMutation = api.jobs.update.useMutation();
    const deleteMutation = api.jobs.delete.useMutation();


    return {createMutation, updateMutation, deleteMutation};
}