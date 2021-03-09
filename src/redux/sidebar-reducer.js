const initialState = {
  friends: [
    {id: '0', name: 'Ilya'},
    {id: '1', name: 'Anton'},
    {id: '2', name: 'Nikita'},
    {id: '3', name: 'Anton'},
    {id: '4', name: 'Nikita'}
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
}

export default sidebarReducer;
