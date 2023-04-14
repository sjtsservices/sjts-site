/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { api } from "@/utils/api";
import { type SiteConfig } from "@prisma/client";
import { type PropsWithChildren, createContext, useEffect, useState } from "react";
import { type IPApiData, initCountry } from "../initCountry";
import { IntlProvider } from "react-intl";


// export type SiteConfig = {
//     email: string,
//     phone: string,
//     address: string,
//     city: string,
//     state: string,
//     country: string,
//     socialLinks: {name: string, link: string}[]
// }

export type SiteContextParams = {
    info?: SiteConfig,
    visitorInfo?: any,
    setVisitorInfo?: (visitorInfo: any) => void,
    setInfo?: (siteConfig: SiteConfig) => void,

}

export const SiteContext = createContext<SiteContextParams>({});

export const SiteProvider = ({ children }: PropsWithChildren) => {
    const [siteConfig, setCompanyInfo] = useState<SiteConfig>();
    const [visitorInfo, setVisitorInfo] = useState<IPApiData | undefined>();
    const { data: setting } = api.setting.get.useQuery();

    useEffect(() => {
        if (setting === null) {
            setCompanyInfo(undefined);
        } else {
            setCompanyInfo(setting)
        }
    }, [setting])

    useEffect(() => {
        initCountry().then(value => {
            setVisitorInfo(value);
        })
    }, [])

    return <SiteContext.Provider value={{ info: siteConfig, setInfo: setCompanyInfo, visitorInfo, setVisitorInfo }}>
        <IntlProvider defaultLocale="en" locale={visitorInfo?.languages.split(',')[0] || 'en'}>
            {children}
        </IntlProvider>
    </SiteContext.Provider>
}
