import React from 'react'
import SectionTitle from '../SectionTitle'
import { title } from 'process'

const arr = [
    {
        title : 'Business Set up',
        description: 'Company formation and Incorporation, Registration, issue of License  including other Structural arrangements   Business Set up under the Corporate Laws and the Office whether independent, shared, Hot Desk or no office required and Domicile support service in case of Offshore companies or the International Business companies.\
        New Registration, Incorporation, License and Takeover of existing and Merger of Companies and Entities, Change of Stricture with rearrangements of shareholding, transfer, sale and assignment of shares with acquisition under Agreements, Holding and Subsidiary structures, Trusts and Foundation for Assets Protection and many more.\
        Companies can be incorporated with Business set up for Commercial, Professional or Industrial activities for running an Office, Shop as retail outlet, Show Room, whole sale, Distribution, Supermarket, Business Center, Industry, Factory, Warehouse or storage with logistics, Events management, Some Regular or annual activities, Exhibition or product launching etc.\
        '
    },
    {
        title: 'Investments',
        description: 'Foreign Finance Companies can have Investments in Financial related activities in DIFC.  Major Investments in Non-financial related activities includes Real Estates on Land and Property ownership including Hotels, buildings and units with Title Deed for own use, for the  business or Renting and leasing, Developing building and complexes. Industries, Logistics, Bulk trading etc'
    },
    {
        title: 'Gold Visa ',
        description: 'Investors with AED 2 million Investment in different forms as Property or Accredited Fund or any other investment makes one person to receive gold visa.'
    },
    {
        title: 'Offshore company',
        description: 'Offshore Company Incorporation in Dubai is distinctly different as there are many diverse opportunities of business which can run under different categories structured to be linked and holding company and for ownership of property or investments in India. No office required and can be operated from any country.'
    },
    {
        title: 'Free Zone Companies ',
        description: 'There are almost 45 Free Zones in UAE in different Emirates including Dubai and other Emirates  mainly for incorporation of Companies for Business Offices for Trading, Oil and Petrochem, Metals and Minerals, Gold Bullion Trade, Diamond and Precious Stones, Bulk commodities international trading without storage facilities which can be arranged in other locations, Professional activities of Accounts, Corporate Services, Different Management and Consultancy, and other Services activities etc.'
    },
    {
        title: 'Business Set up outside Free Zones known as Mainland ',
        description: 'Company incorporation facility available outside Free Zones for any economic activity including, any permitted Trading activity, Services, import and Export, distribution and retail, Industry to set up, Warehousing etc. Scope for such activities becomes much wider outside the Free Zones as the choice and preference the size and location for infrastructure facilities becomes much larger and wider.'
    },
    {
        title: 'Ownership of Property',
        description: 'Freehold Property  ownership of Properties for own use, business purposes of Renting and Developing, other requirements for Gold Visa or International Business through Holding Company arrangements.'
    },
    {
        title: 'Projects ',
        description: 'Project Plan, Economic and Market study Report, Investment Proposal with Concept, Estimates for different categories of Projects including Developing Complexes, Construction, Set up Industries, Erection, Installation.\
        Corporate Service and Management Consulting, with Human Resource, Marketing and Market Research for International Clients.'
    },
    {
        title: 'Academic Institution ',
        description: 'For academic Academic  Study, Research, Education, Training, Business Development for setting up Universities, Institutions, Structure, Registration, License for Professional Course programs of Medical and Health, Maritime and Shipping, Management, Legal and Corporate Governance.'
    },
    {
        title: 'Immigration ',
        description: 'Advice and guidance for Immigration, Citizenship, Students Enrolment, and Admission for Professional courses, selection procedure and Study Integrated professional courses.'
    },

]
const ProfessionalDiv = ({title: title, description:description}: {title: string, description: string}) => {
return (
        <div className='p-5 max-w-2xl'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
)
}
const ProfessionalDescription = () => {

  return (
    <div className='container mx-auto text-primary-dark px-5'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 justify-items-center'>
        {arr.map((item, index) => (
            <ProfessionalDiv key={index} title={item.title} description={item.description} />
        ))}
        </div>
    </div>
  )
}

export default ProfessionalDescription