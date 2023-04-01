
export type LocalSubmissionData = {
    jobSeekerId: string,
    jobs: string[]
}

export default function saveApplicationLocally(seekerId: string, jobId: string){
    if(isAlreadyApplied(seekerId, jobId)) return;
    const prev = getLocalSubmission(seekerId);
    const forSave = prev ? prev.jobs.push(jobId): {jobSeekerId: seekerId, jobs: [jobId]};
    localStorage.setItem(seekerId, JSON.stringify(forSave));
}

export function getLocalSubmission(seekerId: string): LocalSubmissionData|undefined{
    const localSubmission = localStorage.getItem(seekerId);
    if(!localSubmission) return undefined;
    return JSON.parse(localSubmission) as LocalSubmissionData;
}

export function isAlreadyApplied(seekerId: string, jobId: string): boolean{
    const ls = getLocalSubmission(seekerId);
    if(!ls) return false;
    return (ls.jobs.find(jId => jId === jobId))? true : false;
}