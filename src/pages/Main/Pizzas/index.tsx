import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useContext } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'

export default function Pizzas() {
  const { pizzas } = useContext(SnackContext)

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={pizzas}></Snacks>
    </>
  )
}
