import { Card } from 'antd'
import React from 'react'
import PageHeader from '~/components/PageHeader'

export function getStaticProps() {
    return {
      props: {
  
      }
    }
  }

const PrivacyPolicy = () => {
    return (
        <>
            <PageHeader title='Privacy Policy' />
 
                <Card className='mx-auto w-max  my-20'>
                <article className="prose prose-slate prose-2xl">
                    <h2>Our Privacy Policies Are: </h2>
                    <p>
                        {`This Privacy Policy pertains to the website(s) hosted in INDIA by SJTS, Inc. ("SJTS"), a company headquartered in BASTI,INDIA. This includes sjts.co.in and additional SJTS, Inc. produced and managed websites (together, the "Site"). SJTS takes user privacy very seriously because we know that your privacy on the web is important to you. SJTS has implemented generally accepted standards of technology and operational security in order to protect your personally identifiable information from loss, misuse, alteration, or destruction. Despite these precautions, however, SJTS cannot guarantee that unauthorized persons will not obtain access to your personally identifiable information. SJTS reserves the right, at its sole discretion, to alter and update this Privacy Policy from time to time; therefore, we urge visitors to our Site to review the current version of the Privacy Policy each time they return to our Site. The date of the more recent update is reflected at the bottom of this document. When you request information from SJTS and/or supply information through the Site that personally identifies you and/or allows us to contact you including any and all materials submitted by you in connection with applying to SJTS for employment, including but not limited to, when you fill out a subscription form or consulting expertise inquiry, opt in to receive emails from SJTS, or agree to participate in surveys, you are agreeing to share such information, including your name, e-mail address, title, occupation, company or university affiliation, industry, region, relationship to SJTS, reason for contacting SJTS, and any message you submit, with SJTS, its agents, representatives and affiliates, and you should know that SJTS may disclose such information to its agents, representatives and affiliates for marketing and promotional purposes. SJTS may aggregate personally identifiable information and may disclose such information in aggregate for marketing and promotional purposes. However, in these situations, we do not disclose to these entities any information that could be used to personally identify you. We may collect the e-mail addresses of those who send us e-mail messages; however, we will not send unsolicited e-mail to any of the addresses we collect or share those addresses with any unaffiliated third party, except in the limited circumstances set forth below. Note, however, that you will have the ability to opt out of receiving future emails from SJTS, to unsubscribe from participating in our programs through the "preferences" page to which you may direct yourself from every email you receive from SJTS, and to correct or change personally identifiable information you have provided to SJTS by replying to any SJTS email. SJTS would like to keep your personal information accurate. We may disclose personal information if required to do so by law or in the good faith belief that such action is necessary to: (1) comply with law or comply with legal process served upon us or our agents, representatives and affiliates, (2) protect and defend our rights or property or those of our users or (3) protect the personal safety of our users or the public. If you elect to submit an employment application to us online through our Site, all of the information you submit becomes the property of SJTS and may be used for any and all purposes ordinarily associated with processing an employment application, as well as for marketing and promotional purposes. We may use cookies or other technology to obtain certain types of information when your web browser accesses our Site. "Cookies" are small pieces of information that are stored by your browser on your computer's hard drive. Our Site may use cookies and other technology to store pertinent user information during a session to speed navigation and keep track of items and to collect anonymous traffic data that we may use to enhance our Site and for marketing and promotional purposes. The "help" portion of the toolbar on most browsers will tell you how to prevent your browser from accepting new cookies, how to have the browser notify you when you receive new cookies, and how to disable cookies altogether. This Privacy Policy does not apply to any information you may disclose publicly in any chat rooms, message boards, or similar web pages, including those hosted on or linked to our Site. You should keep in mind that whenever you publicly disclose information about yourself online—for example, via message boards or chat rooms—that information could be collected and used by people whom you do not know. In addition, certain message boards and similar user forums may display IP addresses along with the message poster's name and message. SJTS bears no responsibility for any action or policies of any third parties who collect any information users may disclose on the message boards, chat areas or other user forums, if any, on the Site. This Site is not directed at children 13 years of age or younger. SJTS, therefore, will not intentionally collect information about anyone under the age of 13, and requests that no such information be submitted to us.`}
                    </p>
                </article>
                </Card>
            
        </>
    )
}

export default PrivacyPolicy