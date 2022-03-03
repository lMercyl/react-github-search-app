import React from "react";
import axios from "axios";
import Form from "./components/Form";
import User from "./components/User";

const App = () => {
  const [user, setUser] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

  const timeRef = React.useRef(null);

  const onChangeInput = (event) => {
    setSearch(event.target.value);
  };

  const setUrlParams = (login) => {
    window.history.pushState(null, null, `?login=${login.toLowerCase()}`);
  };

  const setUrlError = () => {
    window.history.pushState(null, null, `?login=error`);
  };

  const handleSubmit = async () => {
    setDisable(true);
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${search}`
      );
      setUser(data);
      setError(false);
      setUrlParams(search);
    } catch (err) {
      setUser(null);
      setError(true);
      setUrlError();
    }
    setSearch("");
    setDisable(false);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    handleSubmit();
    event.target.reset();
  };

  React.useEffect(() => {
    if (search) {
      clearInterval(timeRef.current);
      timeRef.current = setTimeout(handleSubmit, 500);
    }
    return () => clearInterval(timeRef.current);
  }, [search]);

  return (
    <div id="app">
      <div className="app-container">
        <Form
          disableButton={disable}
          valueInput={search}
          submit={onClickSubmit}
          changeInput={onChangeInput}
        />
        {user && !error && <User userGitHub={user} />}
        {error && <h3>Пользователь не найден</h3>}
      </div>
    </div>
  );
}

export default App;