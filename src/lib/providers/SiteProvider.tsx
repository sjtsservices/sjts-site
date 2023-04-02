import { PropsWithChildren, createContext, useState } from "react";


export type CompanyInfo = {
    name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    state: string,
    country: string
}

export type SiteContextParams = {
    info?: CompanyInfo,
    setInfo?:(companyInfo: CompanyInfo) => void
}

export const SiteContext = createContext<SiteContextParams>({});

export const SiteProvider = ({children}: PropsWithChildren) => {
    const [companyInfo, setCompanyInfo] = useState<CompanyInfo>();

    return <SiteContext.Provider value={{info: companyInfo, setInfo: setCompanyInfo}}>
        {children}
    </SiteContext.Provider>
}
