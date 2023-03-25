import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useEffect, useState } from 'react'
import { getBurgers } from './../../../services/api'
import { SnackData } from './../../../interfaces/SnackData'

export default function Burgers() {
  const [burgers, setBurgers] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const burgersRequest = await getBurgers()
      setBurgers(burgersRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Burgers' description='Nossos melhores burgers' />
      <SnackTitle>Burgers</SnackTitle>
      <Snacks snacks={burgers} />
    </>
  )
}
