import produce from 'immer'

const initialState = {
  products: [
    {
      name: 'banana',
      price: '2.8',
      color: 'yellow'
    }
    , {
      name: 'orange',
      price: '10.9',
      color: 'orange'
    },
    {
      name: 'charry',
      price: '2.8',
      color: '19.8'
    }
  ],
  adminId: 'mimi'//?
}

const reducer = {

  ADD_PRODUCT(state, action) {
    state.products.push(action.payload)
  },
  DELETE_PRODUCT(state, action) {
    state.products.splice(action.payload, 1)
    // state.employees = state.employees.filter(x => x.id != action.payload.id)
  }
}

export default produce((state, action) => {
  if (reducer[action.type])
    reducer[action.type](state, action)
}
  , initialState)
