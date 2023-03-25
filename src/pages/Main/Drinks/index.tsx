import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useState, useEffect } from 'react'
import { getDrinks } from './../../../services/api'
import { SnackData } from './../../../interfaces/SnackData';

export default function Drinks() {
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const drinksResponse = await getDrinks()
      setDrinks(drinksResponse.data)
    })()
  }, [])

  return (
    <>
      <Head title='Drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  )
}
