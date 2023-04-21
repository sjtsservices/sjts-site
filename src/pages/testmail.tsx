import { sendThankyouMail } from '@/emails/sender'
import JobApplyThankYouEmail from '@/emails/templates/JobApplyCongratesEmail'
import { Button } from 'antd'
import React from 'react'

const testmail = () => {

    
  return (
    <div className='min-h-screen'>
        <h1>Test Mail</h1>

        {/* <div className="mt-10">
            <Button onClick={ mailSend}>Send Mail</Button>
        </div> */}
        
    </div>
  )
}

export default testmail