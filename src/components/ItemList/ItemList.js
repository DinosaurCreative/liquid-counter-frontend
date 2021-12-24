function ItemList(props) {

  function sortedByFieldHandler(e) {
    props.sortByField(e.target.id);
  }

  return (
    <div className='itemList'>
      <h1 className='itemList__title'>{props.title}</h1>
      {/* <div className='itemList__sort-btn-container'>
        <button className='itemList__sort-data-btn' type='button' id='barName' onClick={sortedByFieldHandler}>Бар &#9660;</button>
        <button className='itemList__sort-data-btn' type='button' id='date' onClick={sortedByFieldHandler}>Число &#9660;</button>
        <button className='itemList__sort-data-btn' type='button' id='nameInCharge' onClick={sortedByFieldHandler}>Ответственный &#9660;</button> 
      </div> */}
      <ul className='itemList__list'>{
        
        props.data.map((item, index) => {
          return (<props.component key={item._id}
                                   props = {item}
                                   title={item.title}
                                   volume={item.volume}
                                   capWeight={item.capWeight}
                                   fullWeight={item.fullWeight}
                                   emptyWeight={item.emptyWeight}
                                   barcode={item.barcode}
                                   alcoType={item.alcoType}
                                   label={item.label}
                                   origin={item.origin}
                                   btlModel={item.btlModel}
                                   nameInCharge={item.nameInCharge}
                                   barName={item.barName}
                                   date={item.date}
                                   _id={item._id}
                                   orderNumber = {index} 
                                   />)
        })
      }</ul>
    </div>
  )
}

export default ItemList;