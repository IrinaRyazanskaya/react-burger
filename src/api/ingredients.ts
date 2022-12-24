const API_DOMAIN = 'https://norma.nomoreparties.space';

function getIngredients() {
  return fetch(`${API_DOMAIN}/api/ingredients`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(`Ошибка: ${response.status}`);
    })
    .then((data) => {
      return data.data;
    });
}

export { getIngredients };
