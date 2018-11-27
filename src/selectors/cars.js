export const getCars = state => {
  return Object.keys(state.cars.list).map(id => ({
    id,
    ...state.cars.list[id]
  }));
};

export const getTotalCars = state => {
  return getCars(state).length;
};

export const getSearchTerm = state => {
  return state.cars.searchTerm;
};

export const getFilteredCars = state => {
  return getCars(state).filter(car => car.id.includes(getSearchTerm(state)));
};
