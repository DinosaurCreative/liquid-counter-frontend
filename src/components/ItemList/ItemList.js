import { prevInventaTitle } from '../../utils/constants';

function ItemList(props) {
  function sortedByFieldHandler(e) {
    props.sortByField(e.target.id);
  }
  const currentInventa = Object.entries(props.setData(props.data));

  return (
    <div className='itemList'>
      <h1 className='itemList__title'>{props.titlem}</h1>
      {props.title === prevInventaTitle && <div className='itemList__sort-btn-container'>
        <button className='itemList__sort-data-btn' type='button' id='barName' onClick={sortedByFieldHandler}>Бар &#9660;</button>
        <button className='itemList__sort-data-btn' type='button' id='date' onClick={sortedByFieldHandler}>Число &#9660;</button>
        <button className='itemList__sort-data-btn' type='button' id='nameInCharge' onClick={sortedByFieldHandler}>Ответственный &#9660;</button> 
      </div>}
      <ul className='itemList__list'>{
       currentInventa.map((item, index) => {
          return (<props.innerComponent key={index}
                                        data={item}
                                        />)
        })
      }</ul>
    </div>
  )
}

export default ItemList;