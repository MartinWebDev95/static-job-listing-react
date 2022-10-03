function FilterReducer(state, action) {
  switch (action.type) {
    case 'SET_FILTER':
      // Compruebo si el filtro es distinto al actual
      if (state.includes(action.payload)) {
        return state;
      }

      // Si es distinto, lo añado al array de filtros
      return [...state, action.payload];

    case 'REMOVE_FILTER':
      // Elimino el filtro del array de filtros
      return state.filter((filter) => filter !== action.payload);

    case 'CLEAR_FILTER':
      // Elimino todos los filtros del array de filtros
      return [];

    default:
      return state;
  }
}

export default FilterReducer;
