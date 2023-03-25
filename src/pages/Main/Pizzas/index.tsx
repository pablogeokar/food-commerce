import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useEffect, useState } from 'react'
import { getPizzas } from '../../../services/api'
import { SnackData } from './../../../interfaces/SnackData';

export default function Pizzas() {
  const [pizzas, setPizzas] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const pizzasRequest = await getPizzas()

      setPizzas(pizzasRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
