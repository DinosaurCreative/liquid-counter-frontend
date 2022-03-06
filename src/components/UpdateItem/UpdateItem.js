import { useEffect } from 'react';

function UpdateItem(props) {
  function setDataHandler(e) {
    props.setData({ ...props.data, [e.target.name]: e.target.value})
  }
  
  function onSubmitHandler(e) {
    e.preventDefault();
    props.setData(props.emptyData);
    props.history.push('/');
  }

  return (
    <div className='updateItem'>
      <h1 className='updateItem__title'>Исправить позицию</h1>
      {
        <props.BottleForm props = {props}
                    onSubmitHandler = {onSubmitHandler}
                    setDataHandler = {setDataHandler}
        />
      }
    </div>
  )
};

export default UpdateItem;
