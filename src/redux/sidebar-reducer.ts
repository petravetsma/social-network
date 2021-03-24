type Friend = {
  id: number
  name: string
}

export const initialState = {
  friends: [
    {id: 0, name: 'Ilya'},
    {id: 1, name: 'Anton'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Anton'},
    {id: 4, name: 'Nikita'}
  ] as Array<Friend>
}

type InitialState = typeof initialState

const sidebarReducer = (state = initialState, action: any): InitialState => {
  return state
}

export default sidebarReducer
