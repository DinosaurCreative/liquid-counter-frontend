function WrongPath({ history }) {
  
  function goBack() {
    if(history.goBack() === undefined) {
      return history.push('/');
    }
    history.goBack();
  }

  return (
    <div className="wrong-path">
      <h1 className="wrong-path__title">404</h1>
      <p className="wrong-path__text">Страница не найдена</p>
      <button className="wrong-path__button" onClick={goBack}>Вернуться</button>
    </div>
  )
}

export default WrongPath;