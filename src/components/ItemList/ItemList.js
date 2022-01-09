import { prevInventaTitle } from '../../utils/constants';

function ItemList(props) {
  function sortedByFieldHandler(e) {
    props.sortByField(e.target.id);
  }
  
  return (
    <div className='itemList'>
      <h1 className='itemList__title'>{props.title}</h1>
      {props.title === prevInventaTitle && <div className='itemList__sort-btn-container'>
        <button className='itemList__sort-data-btn' type='button' id='barName' onClick={sortedByFieldHandler}>Бар &#9660;</button>
        <button className='itemList__sort-data-btn' type='button' id='date' onClick={sortedByFieldHandler}>Число &#9660;</button>
        <button className='itemList__sort-data-btn' type='button' id='nameInCharge' onClick={sortedByFieldHandler}>Ответственный &#9660;</button> 
      </div>}
      <ul className='itemList__list'>{
        props.data.map((item, index) => {
          return (<props.innerComponent key={item._id ? item._id : index}
                                   props = {item}
                                   orderNumber = {index}
                                   setData = {props.setData} 
                                   />)
        })
      }</ul>
    </div>
  )
}

export default ItemList;