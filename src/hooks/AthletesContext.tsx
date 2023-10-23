import { IAthlete } from 'interface/athletes'
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react'
import AthletesService from 'services/athletes.service'

type ContextType = {
  athletesList: IAthlete[] | undefined
  athlete: IAthlete | undefined
  getAthletes(status?: string): void
  getAthlete(athleteId: string): void
  postAthlete(athleteData: IAthlete): void
  putAthlete(athleteData: IAthlete): void
  athletesLoading: boolean
}

type AthletesProviderProps = {
  children: ReactNode
}

const AthletesContext = createContext({} as ContextType)

export const AthletesProvider = ({ children }: AthletesProviderProps) => {
  const [athletesList, setAthletesList] = useState<IAthlete[]>()
  const [athlete, setAthlete] = useState<IAthlete>()
  const [athletesLoading, setAthletesLoading] = useState<boolean>(true)

  const getAthletes = async (status?: string) => {
    setAthletesLoading(true)
    const athletes = await AthletesService.getAthletes(status)
    setAthletesList(athletes)
    setAthletesLoading(false)
  }

  const getAthlete = async (athleteId: string) => {
    const athleteData = await AthletesService.getAthlete(athleteId)
    setAthlete(athleteData);
  }

  const postAthlete = async (athleteData: IAthlete) => {
    const newAthlete = await AthletesService.postAthlete(athleteData)
    setAthlete(newAthlete);
  }

  const putAthlete = async (athleteData: IAthlete) => {
    const updatedAthlete = await AthletesService.updateAthlete(athleteData)
    setAthlete(updatedAthlete);
  }

  return (
    <AthletesContext.Provider
      value={{
        athletesList,
        athlete,
        athletesLoading,
        getAthletes,
        getAthlete,
        postAthlete,
        putAthlete,
      }}
    >
      {children}
    </AthletesContext.Provider>
  )
}

export const useAthletes = () => useContext(AthletesContext)
