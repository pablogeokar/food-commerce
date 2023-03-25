import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useSnack } from '../../../hooks/useSnack'

export default function Drinks() {
  const { drinks } = useSnack()

  return (
    <>
      <Head title='Drinks' />
      <SnackTitle>Drinks</SnackTitle>
      <Snacks snacks={drinks} />
    </>
  )
}
