import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {hiddenModal} from "../redux/action";
import Form from "./Form";

function PopUp() {
  /**
   * Получение полной даты
   * @type {Date}
   */
  const date = new Date();

  /**
   * Получение дня
   * @type {number}
   */
  const day  = date.getDay();

  /**
   * Получение месяца
   * @type {number}
   */
  const month = date.getMonth();

  /**
   * Получение года
   * @type {number}
   */
  const year = date.getFullYear();

  /**
   * Получение элементов модального окна из стейта
   */
  const popUpItem = useSelector(state => state.popUpItem);

  /**
   * Получение данных о загрузке элементов модального окна из стейта
   */
  const popUpLoading = useSelector(state => state.popUpLoading);

  /**
   * Хук редакса
   */
  const dispatch = useDispatch();

  return (
    <div className="popUp_parent">
      <div className="black" onClick={() => dispatch(hiddenModal())}></div>
      <div className="picture">
        {/** Вывод данных по завершении загрузки **/}
        {popUpLoading ? ( <div className="loading"></div> ) : (
          <div className="picture_block" >
            <div className="row">
              <div className="col-sm-8">
                {/** Вывод картинки по завершении загрузки **/}
                {popUpLoading ? '' : <img src={popUpItem.url} alt=""/>}
              </div>
              <div className="col-sm-4">
                <div className="comments_block">
                  {/** Вывод комментария по завершении загрузки **/}
                  {popUpLoading ? '' : (
                    /** Проверка наличия комментария **/
                    popUpItem.comments.length !== 0 ? (
                      popUpItem.comments.map(item => {
                        return(
                          <div key={item.id} className="comments mb-2">
                            <div className="mb-2 text-muted date">
                              {/** Вывод даты  **/}
                              {day < 10 ? `0${day}` : day}.{month < 10 ? `0${month}` : month}.{year}
                            </div>
                            {item.text}
                          </div> )}) ) : ( <div className="text-muted">Нет комментариев</div> ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-8">
                <Form/>
              </div>
            </div>
          </div> )}
      </div>
    </div>
  );
}

export default PopUp;
