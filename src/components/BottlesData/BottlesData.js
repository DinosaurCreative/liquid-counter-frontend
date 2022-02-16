import { Link } from "react-router-dom";

function BottlesData({data, setData}) {
  function getBottleData() {
    setData({
      title: data.title, 
      volume: data.volume, 
      bottleCapWeight: data.bottleCapWeight, 
      fullWeight: data.fullWeight, 
      bottleWeight: data.bottleWeight, 
      barcode: data.barcode, 
      alcoType: data.alcoType, 
      label: data.label, 
      madeIn: data.madeIn, 
      bottleModel: data.bottleModel,
    })
  }

  return (
    <li className='bottlesData__line'>
      <div className='bottlesData__container'>
        <h3 className='bottlesData__item'>{data.title + ' ' + data.volume}</h3>
        <div className='bottlesData__btn-container'>
        <input className='bottlesData__open-checkbox' name='itemInfo' type='checkbox' id={data._id}/>
          <ul className='bottlesData__item-data'>
            <li className='bottlesData__item-param' id='title'><p className='bottlesData__param-title'>Наименование позиции: <b>&#8195; {data.title.toUpperCase()}</b></p></li>
            <li className='bottlesData__item-param' id='volume'><p className='bottlesData__param-title'>Объём: <b>&#8195;{`${data.volume}`}</b></p></li>
            <li className='bottlesData__item-param' id='full-weight'><p className='bottlesData__param-title'>Вес закрытой бутылки: <b>&#8195;{data.fullWeight}</b></p></li>
            <li className='bottlesData__item-param' id='empty-btl-weight'><p className='bottlesData__param-title'>Вес пустой бутылки: <b>&#8195;{data.bottleWeight}</b></p></li>
            <li className='bottlesData__item-param' id='cap-weight'><p className='bottlesData__param-title'>Вес крышки: <b>&#8195;{data.bottleCapWeight}</b></p></li>
            <li className='bottlesData__item-param' id='barcode'><p className='bottlesData__param-title'>Штрих-код: <b>&#8195;{data.barcode}</b></p></li>
            <li className='bottlesData__item-param' id='alco-type'><p className='bottlesData__param-title'>Тип алкоголя: <b>&#8195;{data.alcoType}</b></p></li>
            <li className='bottlesData__item-param' id='label'><p className='bottlesData__param-title'>Этикетка: <b>&#8195;{data.label}</b></p></li>
            <li className='bottlesData__item-param' id='madeIn'><p className='bottlesData__param-title'>Страна производства: <b>&#8195;{data.madeIn}</b></p></li>
            <li className='bottlesData__item-param' id='btl-bottleModel'><p className='bottlesData__param-title'>Модель бутылки: <b>&#8195;{data.bottleModel}</b></p></li>
          </ul>
          <label className='bottlesData__label' htmlFor={data._id} checked>
            <span className='bottlesData__open-checkbox-overlay' />
          </label>
          <Link className='bottlesData__update-btn' onClick={getBottleData} to='/fix-bottle'></Link>
          <button className='bottlesData__delete-btn'></button>
        </div>
      </div>
    </li>
  )
}

export default BottlesData;