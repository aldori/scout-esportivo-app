import { IPosition } from 'interface/positions'
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react'
import PositionsService from 'services/positions.service'

type ContextType = {
  positionsList: IPosition[] | undefined
  position: IPosition | undefined
  getPositions(status?: string): void
  getPosition(positionId: string): void
  postPosition(positionData: IPosition): void
  putPosition(positionData: IPosition): void
  positionsLoading: boolean
}

type PositionsProviderProps = {
  children: ReactNode
}

const PositionsContext = createContext({} as ContextType)

export const PositionsProvider = ({ children }: PositionsProviderProps) => {
  const [positionsList, setPositionsList] = useState<IPosition[]>()
  const [position, setPosition] = useState<IPosition>()
  const [positionsLoading, setPositionsLoading] = useState<boolean>(true)

  const getPositions = async (status?: string) => {
    setPositionsLoading(true)
    const positions = await PositionsService.getPositions(status)
    setPositionsList(positions)
    setPositionsLoading(false)
  }

  const getPosition = async (positionId: string) => {
    const positionData = await PositionsService.getPosition(positionId)
    setPosition(positionData);
  }

  const postPosition = async (positionData: IPosition) => {
    const newPosition = await PositionsService.postPosition(positionData)
    setPosition(newPosition);
  }

  const putPosition = async (positionData: IPosition) => {
    const updatedPosition = await PositionsService.updatePosition(positionData)
    setPosition(updatedPosition);
  }

  return (
    <PositionsContext.Provider
      value={{
        positionsList,
        position,
        positionsLoading,
        getPositions,
        getPosition,
        postPosition,
        putPosition,
      }}
    >
      {children}
    </PositionsContext.Provider>
  )
}

export const usePositions = () => useContext(PositionsContext)
