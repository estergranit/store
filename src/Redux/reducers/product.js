import produce from 'immer'

const initialState = {
  products: [
    {
      name: 'sneakers',
      price: '100',
      color: 'red',
      categoryId: '1',
      img:'sneakers'
    }
    , {
      name: 'boots',
      price: '200',
      color: 'brown',
      categoryId: '1'
    },
    {
      name: 'shirt',
      price: '50',
      color: 'green', 
      categoryId: '2'
    }
  ],
  category: [
    {
      categoryId: '1',
      name: 'shoes',
    },
    {
      categoryId: '2',
      name: 'clothes',
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
