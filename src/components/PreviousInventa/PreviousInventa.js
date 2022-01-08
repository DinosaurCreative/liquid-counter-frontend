import { Link } from "react-router-dom";

function PreviousInventa(props) {
  return (
      <li className='previousInventa__line'>
      <div className='previousInventa__container'>
        <div className='previousInventa__item'>
          <p className='previousInventa__param-title' >{props.props.barName}</p>
          <p className='previousInventa__param-title' >{props.props.date}</p>
          <p className='previousInventa__param-title' >{props.props.nameInCharge}</p>
        </div>
        <div className='previousInventa__btn-container'>
          <Link className='previousInventa__open-btn' to='/inventa' href='#' />
          <button className='previousInventa__delete-btn' type='button'></button>
        </div>
      </div>
    </li>
  )
};

export default PreviousInventa;