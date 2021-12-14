import { bottles } from '../../utils/constants';

function ItemList(props) {

  return (

    <div className='itemList'>
      <h1 className='itemList__title'>Придедущие инвентаризации</h1>
      <ul className='itemList__list'>{
        bottles.map(item => {
          return <props.component key = {item._id}
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
                            />
        })
      }</ul>
    </div>
  )
}

export default ItemList;