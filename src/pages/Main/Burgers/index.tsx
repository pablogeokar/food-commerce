import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useContext } from 'react'
import { SnackContext } from '../../../contexts/SnackContext'


export default function Burgers() {
  const { burgers } = useContext(SnackContext)

  return (
    <>
      <Head title='Burgers' description='Nossos melhores burgers' />
      <SnackTitle>Burgers</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  )
}
