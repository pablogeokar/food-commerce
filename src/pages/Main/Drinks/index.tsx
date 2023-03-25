import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useContext } from 'react'
import { SnackContext } from '../../../App'

export default function Drinks() {
  const { drinks } = useContext(SnackContext)

  return (
    <>
      <Head title='Drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  )
}
