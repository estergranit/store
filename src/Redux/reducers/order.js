import produce from 'immer'

const initialState = {
  orders: [
    {
      orderId: 11,
      userId: 101,
      products: [
        {
          productName: 'sneakers',
          quantity: 5
        },
        {
          productName: 'boots',
          quantity: 10
        }
      ]

    }
    ,
    {
      orderId: 12,
      userId: 102,
      products: [
        {
          productName: 'boots',
          quantity: 5
        },
        {
          productName: 'shirt',
          quantity: 10
        }
      ]

    }

  ],
  adminId: 'mimi'
}

const reducer = {

  ADD_ORDER(state, action) {
    state.orders.push(action.payload)
  },
  DELETE_ORDER(state, action) {
    state.products.splice(action.payload, 1)
    // state.employees = state.employees.filter(x => x.id != action.payload.id)
  }
}

export default produce((state, action) => {
  if (reducer[action.type])
    reducer[action.type](state, action)
}
  , initialState)
