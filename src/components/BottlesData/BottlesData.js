import { Link } from "react-router-dom";

function BottlesData(props) {
  function getBottleData(e) {
    props.setData({
      title: props.props.title, 
      volume: props.props.volume, 
      bottleCapWeight: props.props.bottleCapWeight, 
      fullWeight: props.props.fullWeight, 
      bottleWeight: props.props.bottleWeight, 
      barcode: props.props.barcode, 
      alcoType: props.props.alcoType, 
      label: props.props.label, 
      madeIn: props.props.madeIn, 
      bottleModel: props.props.bottleModel,
    })
  }

  return (
    <li className='bottlesData__line'>
      <div className='bottlesData__container'>
        <p className='bottlesData__item'>{props.props.title + ' ' + props.props.volume}</p>
        <div className='bottlesData__btn-container'>
          <label className='bottlesData__label' htmlFor={props.props._id} checked>
            <input className='bottlesData__open-checkbox' name='itemInfo' type='checkbox' id={props.props._id}/>
            <span className='bottlesData__open-checkbox-overlay' />
            <ul className='bottlesData__item-data'>
              <li className='bottlesData__item-param' id='title'><p className='bottlesData__param-title'>Наименование позиции: <b>&#8195; {props.props.title.toUpperCase()}</b></p></li>
              <li className='bottlesData__item-param' id='volume'><p className='bottlesData__param-title'>Объём: <b>&#8195;{`${props.props.volume}`}</b></p></li>
              <li className='bottlesData__item-param' id='full-weight'><p className='bottlesData__param-title'>Вес закрытой бутылки: <b>&#8195;{props.props.fullWeight}</b></p></li>
              <li className='bottlesData__item-param' id='empty-btl-weight'><p className='bottlesData__param-title'>Вес пустой бутылки: <b>&#8195;{props.props.bottleWeight}</b></p></li>
              <li className='bottlesData__item-param' id='cap-weight'><p className='bottlesData__param-title'>Вес крышки: <b>&#8195;{props.props.bottleCapWeight}</b></p></li>
              <li className='bottlesData__item-param' id='barcode'><p className='bottlesData__param-title'>Штрих-код: <b>&#8195;{props.props.barcode}</b></p></li>
              <li className='bottlesData__item-param' id='alco-type'><p className='bottlesData__param-title'>Тип алкоголя: <b>&#8195;{props.props.alcoType}</b></p></li>
              <li className='bottlesData__item-param' id='label'><p className='bottlesData__param-title'>Этикетка: <b>&#8195;{props.props.label}</b></p></li>
              <li className='bottlesData__item-param' id='madeIn'><p className='bottlesData__param-title'>Страна производства: <b>&#8195;{props.props.madeIn}</b></p></li>
              <li className='bottlesData__item-param' id='btl-bottleModel'><p className='bottlesData__param-title'>Модель бутылки: <b>&#8195;{props.props.bottleModel}</b></p></li>
            </ul>
          </label>
          <Link className='bottlesData__update-btn' onClick={getBottleData} to='/fix-bottle'></Link>
          <button className='bottlesData__delete-btn'></button>
        </div>
      </div>
    </li>
  )
}

export default BottlesData;