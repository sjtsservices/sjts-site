import TailwindWrapper from './components/TailwindWrapper';


export type JobApplyThankYouEmailProps = {
    applicant?: {
        name?: string,
        jobTitle?: string,
    }
}


const JobApplyThankYouEmail = ({
    applicant
}: JobApplyThankYouEmailProps) => {
  return (
    <TailwindWrapper>
        <div className="max-w-xl  w-full rounded-xl border border-gray-200 border-solid ">
            <div className="border-0 border-b border-b-gray-300 border-solid">
                <h1 className='text-center text-3xl'>Thank You</h1>
            </div>

            <div className="pros pros-xl p-3">
                <p >Dear {applicant?.name},</p>
                <p>Thank you for submitting your application for the {applicant?.name}. We appreciate your interest in our company and the time and effort you have put into your application.</p>
                <p>We would like to inform you that we have received your application and are currently processing the information provided. Our recruitment team is carefully reviewing your qualifications, experience, and other relevant factors to determine your suitability for the role.</p>
                <p>We will be in touch with you soon to discuss the next steps in the application process. If you are selected for further consideration, we will arrange an interview to learn more about your skills, experience, and aspirations.</p>
                <p>In the meantime, if you have any questions or require further information about our company or the position you applied for, please do not hesitate to contact us. We are always available to assist you and provide you with the necessary information.</p>
                <p>Thank you again for your interest in our company and for taking the time to apply for the position. We appreciate your application and look forward to the opportunity to learn more about your qualifications and skills.</p>
                
                <p className='mt-5'>
                    Best regards,<br></br>
                    Vijay Tripathi (Owner AryanIntl) <br></br>
                    Aryan International LLC
                </p>
            </div>
        </div>
    </TailwindWrapper>
  );
};

export default JobApplyThankYouEmail;