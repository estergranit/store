import produce from 'immer'

const initialState = {
  orders: [
    {
      orderId: 11,
      userId: 101,
      products: [
        {
          productId: 1,
          amount: 5
        },
        {
          productId: 2,
          amount: 10
        }
      ]

    }
    ,
    {
      orderId: 12,
      userId: 102,
      products: [
        {
          productId: 1,
          amount: 5
        },
        {
          productId: 2,
          amount: 10
        }
      ]

    }

  ],
  adminId: 'mimi'
}

const reducer = {

  ADD_ORDER(state, action) {
    state.products.push(action.payload)
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
