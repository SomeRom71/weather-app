export function getСityListFromStorage() {
  const cityList = localStorage.getItem('cityList');

  if (!cityList) return [];

  return cityList.split(',');
}

export function setCityToStorage(cityName) {
  const filteredCityList = getСityListFromStorage().filter(city => city.toLowerCase() !== cityName.toLowerCase());

  const newCityList = [
    ...filteredCityList,
    cityName
  ];
  localStorage.setItem('cityList', newCityList);
}
