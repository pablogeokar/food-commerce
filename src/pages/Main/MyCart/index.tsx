import { Container } from './styles'

import { Head } from '../../../components/Head'
import { OrderHeader } from '../../../components/OrderHeader'
import { Table } from './Table'
import { ConfirmOrder } from '../../../components/ConfirmOrder'

export default function MyCart() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
      <Table />
      <ConfirmOrder />
    </Container>
  )
}
