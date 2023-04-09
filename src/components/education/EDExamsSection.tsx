import { Button } from 'antd';
import { nanoid } from 'nanoid';
import React from 'react'

const content = [
    {
        title: 'TOEFL Test',
        desc: 'The TOEFL is a standardized test to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities. The test is accepted by more than 11,000 universities and other institutions in over 190 countries and territories. The TOEFL iBT (Internet-based Test) has four sections: Reading, Listening, Speaking and Writing. The total test takes about 3 hours to complete.',
        link: 'https://www.ets.org/toefl.html',
    },
    {
        title: 'GRE Test',
        desc: `The Graduate Record Examination (GRE) is a multiple-choice, computer-based, standardized exam that is often required for admission to graduate programs and graduate business programs (MBA) globally. The GRE exam measures your command of basic arithmetic, algebra, geometry, and data analysis as well as college-level vocabulary. `,
        link: 'https://www.ets.org/gre.html',
    },
    {
        title: 'IELTS Test',
        desc: 'The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. The test covers four sections: Listening, Reading, Writing and Speaking. IELTS General Training test includes extracts from books, magazines, newspapers, notices, advertisements, company handbooks and guidelines³. These are materials you are likely to encounter on a daily basis in an English-speaking environment.',
        link: 'https://takeielts.britishcouncil.org/take-ielts/what-ielts',
    },
    {
        title: 'OET Test',
        desc: `The Occupational English Test (OET) is designed to meet the specific English language needs of the healthcare sector. It assesses the language proficiency of healthcare professionals who wish to practise in an English-speaking environment. OET provides a valid and reliable assessment of all four language skills – Listening, Reading, Writing and Speaking – with an emphasis on communication in medical and health professional settings.`,
        link: 'https://www.cambridgeenglish.org/exams-and-tests/oet/',
    },
    {
        title: 'TEFL Test',
        desc: 'TEFL stands for Teaching English as a Foreign Language. It is a certification specifically for teaching English abroad or online to non-native speakers. TEFL certification is an internationally recognized qualification and a critical component of your international teaching job application.',
        link: 'https://www.tefl.org',
    },
    {
        title: 'CELTA Test',
        desc: 'CELTA stands for Certificate in English Language Teaching to Adults. It is a well-respected English Language teaching qualification certified by Cambridge English Assessment. CELTA is an internationally recognized teacher training and certification program moderated and accredited by Cambridge Assessment English (UK).It is the most sought-after TEFL certificate by employers worldwide. CELTA courses are run by authorized centers based on specifications produced by Cambridge English.',
        link: 'https://www.cambridgeenglish.org/news/view/three-quarters-of-elt-jobs-ask-for-cambridge-celta/',
    },
    {
        title: 'DHA Test',
        desc: 'DHA stands for Dubai Health Authority. DHA Exam questions are a set of questions that are asked in various exams conducted by DHA for different medical professions such as Medical Laboratory Technician, Nurses, etc. The questions are designed to test the knowledge and skills of the candidates in their respective fields.',
        link: 'https://dha.gov.ae/en/services/individual',
    },
]

const ExamCard = (props: {title: string, desc: string, index: number, link: string}) => {
    return (
        <div className='p-5 pb-14 text-primary-dark bg-white relative shadow'>
            <div className="mb-5 space-y-2">
                <a target='_blank' className='text-primary-dark text-lg font-bold hover:text-primary-dark hover:underline underline-offset-4' href={props.link} title={props.title}>{props.title}</a>
                <p className='leading-relaxed'>{props.desc}</p>
            </div>

            <div className='flex justify-end w-full absolute bottom-0 left-0 p-5'><a target='_blank' className='inline-block'  href={props.link} title={props.title}><Button type="primary" size="large" shape='round'>Learn More</Button></a></div>
        </div>
    );
}

// bg-gradient-to-tr from-fuchsia-600 via-fuchsia-600 to-indigo-600?

const EDExamsSection = () => {
  return (
    <div className='container mx-auto px-5'>
        <div className=' p-[1px]'>
        <div className='grid grid-cols-1 md:grid-cols-3  gap-[1px]'>
            {
                content.map((ct, idx) => {
                    return <ExamCard key={nanoid()} {...ct} index={idx} />
                })
            }
        </div>
        </div>
    </div>
  )
}

export default EDExamsSection