import { ITeam } from 'interface/team'
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react'
import TeamService from 'services/team.service'

type ContextType = {
  team: ITeam | undefined
  getTeam(teamId: string): void
  postTeam(teamData: ITeam): void
  putTeam(teamData: ITeam): void
  teamLoading: boolean
}

type TeamProviderProps = {
  children: ReactNode
}

const TeamContext = createContext({} as ContextType)

export const TeamProvider = ({ children }: TeamProviderProps) => {
  const [team, setTeam] = useState<ITeam>()
  const [teamLoading, setTeamLoading] = useState<boolean>(true)

  const getTeam = async (teamId: string) => {
    setTeamLoading(true)
    const teamData = await TeamService.getTeam(teamId)
    setTeam(teamData);
    setTeamLoading(false)

  }

  const postTeam = async (teamData: ITeam) => {
    const newTeam = await TeamService.postTeam(teamData)
    setTeam(newTeam);
  }

  const putTeam = async (teamData: ITeam) => {
    const updatedTeam = await TeamService.updateTeam(teamData)
    setTeam(updatedTeam);
  }

  return (
    <TeamContext.Provider
      value={{
        team,
        teamLoading,
        getTeam,
        postTeam,
        putTeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  )
}

export const useTeam = () => useContext(TeamContext)
