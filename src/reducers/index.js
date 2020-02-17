export const initialState = {
  weather: {},
  cityList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        weather: action.payload,
      };

    case 'SET_CITY_LIST':
      return {
        ...state,
        cityList: action.payload,
      };

    default:
      return state;
  }
}
