/**
 * Загрузка фотографий и отправка соответствующего кейса
 * @returns {function(...[*]=)}
 */
export function loadPics() {
  return (dispatch) => {
    dispatch({type: "loading"});
    fetch('https://boiling-refuge-66454.herokuapp.com/images')
      .then((data) => data.json())
      .then((json) => dispatch({
        type: "loading_success",
        payload: json
      }))
  };
}

/**
 * Прием id и загрузка фотографии соответствующей данному id всплывающего окна
 * @param id
 * @returns {function(...[*]=)}
 */
export function loadPopUp(id) {
  return (dispatch) => {
    dispatch({type: 'loading_popUp_img'});
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((data) => data.json())
      .then((json) =>
        dispatch({
          type: 'modal_on',
          payload: json
        }));
  }
}

/**
 * Скрытие всплывающего окна
 * @returns {{type: string}}
 */
export function hiddenModal() {
  return {type: 'popUp_hide'};
}

