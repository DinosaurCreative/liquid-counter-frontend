import ItemList from "../ItemList/ItemList";

function ItemDataBase() {
  return (
    <div className='itemDataBase'>
      <h1 className='component-title'>Придедущие инвентаризации</h1>
      <ItemList buttonStyles='itemList__update-btn'/>
    </div>
  )
};

export default ItemDataBase;