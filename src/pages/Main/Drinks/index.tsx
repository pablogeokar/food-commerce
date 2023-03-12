import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useState, useEffect } from 'react'
import { getDrinks } from './../../../services/api'

export default function Drinks() {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    ;(async () => {
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
