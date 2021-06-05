export type Dispatch = React.Dispatch<IAction>

export interface IAction {
    type: string
    payload: Array<any>   /// wtf to do for ICases
}

export interface ICountry {
    continent: string
    population: number
    deaths: number
    recovered: number
    confirmed: number
    country: string
    sq_km_area: number
    life_expectancy: string
    elevation_in_meters: number
    abbreviation: string
    location: string
    iso: number
    capital_city: string
    lat: string
    long: string
    updated: string

}