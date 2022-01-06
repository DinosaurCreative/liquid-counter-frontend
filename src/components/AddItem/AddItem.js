// function AddItem({ data, setData, emptyData, BottleForm }) {
//   function setDataHandler(e) {
//     setData({ ...data, [e.target.name]: e.target.value})
//   }

//   function onSubmitHandler(e) {
//     e.preventDefault();
//     setData(emptyData);
//   }

//   return (
//     <div className='addItem'>
//       <h1 className='component-title'>Добавить позицию</h1>
//       {
//         <BottleForm data = {data}
//                     onSubmitHandler = {onSubmitHandler}
//                     setDataHandler = {setDataHandler}
//                     />
//       }
//     </div>
//   )
// }
function AddItem(props) {
  function setDataHandler(e) {
    props.props.setData({ ...props.props.data, [e.target.name]: e.target.value})
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    props.props.setData(props.props.emptyData);
  }

  return (
    <div className='addItem'>
      <h1 className='component-title'>Добавить позицию</h1>
      {
        <props.props.BottleForm props = {props.props}
                                setDataHandler = {setDataHandler}
                                onSubmitHandler = {onSubmitHandler}
                                />
      }
    </div>
  )
}

export default AddItem;