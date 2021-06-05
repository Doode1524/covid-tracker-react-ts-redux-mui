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

}