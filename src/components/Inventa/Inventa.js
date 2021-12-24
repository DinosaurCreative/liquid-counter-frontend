function Inventa(props) {
  const checkboxId = [...props.props._id].reverse().join('');
  return (
    <li className='inventa'>
      <div className='inventa__container'>
        <label htmlFor={checkboxId} checked>
          <h2 className='inventa__alco-type'>Белое вино</h2>
        </label>
        <input className="inventa__open-list-checkbox" type='checkbox' id={checkboxId}></input>
        <ul className='inventa__drink-list'>
          <li className="inventa__drink-item">{`1. whiskey //`}</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
          <li className="inventa__drink-item">Эт самое</li>
        </ul>
      </div>
    </li>
  )
}

export default Inventa;