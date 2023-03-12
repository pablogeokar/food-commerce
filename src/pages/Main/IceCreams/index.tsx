import { Head } from '../../../components/Head'
import Snacks from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'
import { useEffect, useState } from 'react'
import { getIceCreams } from '../../../services/api'

export default function IceCreams() {
  const [iceCreams, setIceCreams] = useState([])

  useEffect(() => {
    ;(async () => {
      const IceCreamsRequest = await getIceCreams()
      setIceCreams(IceCreamsRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Sorvetes' />
      <SnackTitle>Sorvetes</SnackTitle>
      <Snacks snacks={iceCreams} />
    </>
  )
}
