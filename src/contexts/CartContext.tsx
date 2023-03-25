import { createContext, ReactNode, useEffect, useState } from 'react'
import { SnackData } from './../interfaces/SnackData'

interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface RemoveSnackFromCartProps {
  id: number
  snack: string
}

interface UpdateCartProps {
  id: number
  snack: string
  newQuantity: number
}

interface CartProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  //   removeSnackFromCart: ({ id, snack }: RemoveSnackFromCartProps) => void
  //   updateCart: ({ id, snack }: UpdateCartProps) => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void {
    // buscar
    const snackExistsInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id,
    )

    // atualizar
    if (snackExistsInCart) {
      const newCart = cart.map((item) => {
        if (item.id === snack.id) {
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return { ...item, quantity, subtotal }
        }

        return item
      })

      console.log('newCart Atualização', newCart)
      setCart(newCart)

      return
    }

    // adicionar

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack]

    console.log('newCart Adição', newCart)

    setCart(newCart)
  }

  return <CartContext.Provider value={{ cart, addSnackIntoCart }}>{children}</CartContext.Provider>
}
