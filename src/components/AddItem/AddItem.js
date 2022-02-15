// this syntax is for the regular usage

// import { useEffect } from "react/cjs/react.development";

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

// this syntax is for ProtectedRoute component
function AddItem(props) {
  function setDataHandler(e) {
    props.setData({ ...props.data, [e.target.name]: e.target.value})
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    props.setData(props.emptyData);
  }

  return (
    <div className='addItem'>
      <h1 className='component-title'>Добавить позицию</h1>
      {
        <props.BottleForm props = {props}
                                setDataHandler = {setDataHandler}
                                onSubmitHandler = {onSubmitHandler}
                                />
      }
    </div>
  )
}

export default AddItem;