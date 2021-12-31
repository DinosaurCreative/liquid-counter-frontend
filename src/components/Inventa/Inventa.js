function Inventa(props) {
  const checkboxId = Math.random(Math.random());
  return (
    <li className='inventa'>
      <div className='inventa__container'>
        <label htmlFor={checkboxId} checked>
          <h2 className='inventa__alco-type'>{props.props.type}</h2>
        </label>
        <input className="inventa__open-list-checkbox" type='checkbox' id={checkboxId}></input>
        <ul className='inventa__drink-list'>{
          props.props.values.map((item, index) => {
            return (
              <li className="inventa__drink-item">{`${index + 1}. ${item.title} ,	остаток  - ${item.totalVolume} л. , открытых бутылок - ${item.openedBottles} , полных бутылок - ${item.fullBottles}`}</li>
            )
          })
        }
        </ul>
      </div>
    </li>
  )
}

export default Inventa;