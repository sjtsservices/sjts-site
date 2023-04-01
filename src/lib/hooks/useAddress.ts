import { City, Country, ICity, ICountry, IState, State } from "country-state-city"
import { useState } from "react"

export type useAddressProps = {
    country?: string,
    state?: string,
    city?: string
}

const getCountryFromName = (name: string) => {
    const countries = Country.getAllCountries();
    return countries.find(d => d.name.toLowerCase() === name)
}

export const useAddress = ({country: defaultCountry}: useAddressProps) => {
    const [country, setCountry] = useState<ICountry|undefined>(defaultCountry ? getCountryFromName(defaultCountry):undefined);
    const [state, setState] = useState<IState>();
    const countries = Country.getAllCountries();
    const statesOfCountry = State.getStatesOfCountry(country?.isoCode);
    const cities = country && state ? City.getCitiesOfState(country?.isoCode, state?.isoCode): [] as ICity[];

    
    
    return {country, state, setCountry, setState, countries, statesOfCountry, cities}
}