import { createContext, ReactNode, useEffect, useState } from 'react'

import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps) {
  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCreams, setIceCreams] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      try {
        const burgersRequest = await getBurgers()
        const pizzasRequest = await getPizzas()
        const drinksRequest = await getDrinks()
        const IceCreamsRequest = await getIceCreams()

        const requests = [burgersRequest, pizzasRequest, drinksRequest, IceCreamsRequest]

        const [
          { data: burgersResponse },
          { data: pizzasResponse },
          { data: drinnksResponse },
          { data: iceCreamsResponse },
        ] = await Promise.all(requests)

        setBurgers(burgersResponse)
        setPizzas(pizzasResponse)
        setDrinks(drinnksResponse)
        setIceCreams(iceCreamsResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, pizzas, drinks, iceCreams }}>
      {children}
    </SnackContext.Provider>
  )
}
