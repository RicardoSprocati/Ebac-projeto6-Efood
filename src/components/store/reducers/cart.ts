import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Menu } from '../../../Home'

type CartState = {
  isOpen: boolean
  items: Menu[]
}

const initialState: CartState = {
  isOpen: false,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state: { isOpen: boolean }) => {
      state.isOpen = true
    },
    close: (state: { isOpen: boolean }) => {
      state.isOpen = false
    },
    add: (state, action: PayloadAction<Menu>) => {
      const game = state.items.find((item) => item.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('o prato ja foi adicionado!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { open, close, add, remove } = cartSlice.actions
export default cartSlice.reducer
