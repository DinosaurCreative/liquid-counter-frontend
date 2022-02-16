function Inventa(...props) {
  const checkboxId = Math.random(Math.random());
  return (
    <li className='inventa'>
      <div className='inventa__container'>
        <label htmlFor={checkboxId} checked>
          <h2 className='inventa__alco-type'>{props[0].data[0]}</h2>
        </label>
        <input className="inventa__open-list-checkbox" type='checkbox' id={checkboxId}></input>
        <ul className='inventa__drink-list'>{
          props[0].data[1].map((item, index) => {
            return (
              <li className="inventa__drink-item" key={index}>{`${index + 1}. ${item.title} ,	остаток  - ${item.totalVolume} л. , открытых бутылок - ${item.openedBottle} , полных бутылок - ${item.fullBottle}`}</li>
            )
          })
        }
        </ul>
      </div>
    </li>
  )
}

export default Inventa;