function PreviousInventa(props) {
  return (
      <li className='previousInventa__line'>
      <div className='previousInventa__container'>
        <div className='previousInventa__item'>
          <p className='previousInventa__param-title' >{props.barName}</p>
          <p className='previousInventa__param-title' >{props.date}</p>
          <p className='previousInventa__param-title' >{props.nameInCharge}</p>
        </div>
        <div className='previousInventa__btn-container'>
          <button className='previousInventa__open-btn'></button>
          <button className='previousInventa__delete-btn'></button>
        </div>
      </div>
    </li>
  )
};

export default PreviousInventa;