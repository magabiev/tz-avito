import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPics, loadPopUp} from "../redux/action";

function Posts() {
  /** Состояние загрузки данных **/
  const loading = useSelector(state => state.loading);

  /** Данные из стейта **/
  const items = useSelector(state => state.items);

  /** Хук редакса  **/
  const dispatch = useDispatch();

  /** Загрузка данных **/
  useEffect(() => {
    dispatch(loadPics())
  }, []);

  return (
    /** Вывод данных относительно состояния loading **/
    loading ? ( <div>loading...</div> ) : (
      items.map(item => {
        return(
          <div key={item.id} className="col-lg-4 col-sm-6 col-12 mb-5">
            <div onClick={() => dispatch(loadPopUp(item.id))} className="post_block">
              <img src={item.url} alt=""/>
            </div>
          </div>
        )
      })
    )
  );
}

export default Posts;
