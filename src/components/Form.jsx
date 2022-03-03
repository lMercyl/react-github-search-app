import React from "react";

const Form = ({ disableButton, inputValue, submit, changeInput }) => {
  return (
    <form onSubmit={submit} className="app-form">
      <input
        onChange={changeInput}
        value={inputValue}
        type="text"
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
      />
      <button type="submit" className="app-form_btn" disabled={disableButton}>
        {disableButton ? "Загрузка.." : "Найти"}
      </button>
    </form>
  );
};

export default Form;
