/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Transporter from "~/lib/nodemailer";
import { render } from '@react-email/render';
import { env } from "~/env.mjs";
import { ReactElement } from "react";
import JobApplyThankYouEmail, { JobApplyThankYouEmailProps } from "./templates/JobApplyCongratesEmail";


export async function sender(template: ReactElement, to: string, subject: string) {
    const emailHtml = render(template);
    const res = await Transporter.sendMail({
        from: env.EMAIL_FROM,
        to,
        subject,
        html: emailHtml,
    });
    return res;
}

export async function sendThankyouMail(info: {name: string, email: string, jobTitle: string}){
    const template = <JobApplyThankYouEmail applicant={{name: info.name, jobTitle: info.jobTitle}}/>;
    return sender(template, info.email, 'For Job Application')
}