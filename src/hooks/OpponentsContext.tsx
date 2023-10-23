import { IOpponent } from 'interface/opponents'
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react'
import OpponentsService from 'services/opponents.service'

type ContextType = {
  opponentsList: IOpponent[] | undefined
  opponent: IOpponent | undefined
  getOpponents(status?: string): void
  getOpponent(opponentId: string): void
  postOpponent(opponentData: IOpponent): void
  putOpponent(opponentData: IOpponent): void
  opponentsLoading: boolean
}

type OpponentsProviderProps = {
  children: ReactNode
}

const OpponentsContext = createContext({} as ContextType)

export const OpponentsProvider = ({ children }: OpponentsProviderProps) => {
  const [opponentsList, setOpponentsList] = useState<IOpponent[]>()
  const [opponent, setOpponent] = useState<IOpponent>()
  const [opponentsLoading, setOpponentsLoading] = useState<boolean>(true)

  const getOpponents = async (status?: string) => {
    setOpponentsLoading(true)
    const opponents = await OpponentsService.getOpponents(status)
    setOpponentsList(opponents)
    setOpponentsLoading(false)
  }

  const getOpponent = async (opponentId: string) => {
    const opponentData = await OpponentsService.getOpponent(opponentId)
    setOpponent(opponentData);
  }

  const postOpponent = async (opponentData: IOpponent) => {
    const newOpponent = await OpponentsService.postOpponent(opponentData)
    setOpponent(newOpponent);
  }

  const putOpponent = async (opponentData: IOpponent) => {
    const updatedOpponent = await OpponentsService.updateOpponent(opponentData)
    setOpponent(updatedOpponent);
  }

  return (
    <OpponentsContext.Provider
      value={{
        opponentsList,
        opponent,
        opponentsLoading,
        getOpponents,
        getOpponent,
        postOpponent,
        putOpponent,
      }}
    >
      {children}
    </OpponentsContext.Provider>
  )
}

export const useOpponents = () => useContext(OpponentsContext)
