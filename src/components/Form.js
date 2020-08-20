import React, {useState} from 'react';

function Form() {
  /**
   * Стейт для значения поля ввода имени
   */
  const [name, setName] = useState('');

  /**
   * Стейт для значения поля ввода комментария
   */
  const [comment, setComment] = useState('');

  /**
   * Обработчик для формы ввода имени
   * @param e
   */
  const handleName = (e) => {
      setName(e.target.value);
  }

  /**
   * Обработчик для формы ввода комментария
   * @param e
   */
  const handleComment = (e) => {
    setComment(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleName} className="form-control mb-2 mt-4" placeholder="Ваше имя"/>
      <input value={comment} onChange={handleComment} className="form-control mb-3" placeholder="Ваш комментарий"/>
      <div className="sub_btn">Оставить комментарий</div>
    </div>
  );
}

export default Form;
