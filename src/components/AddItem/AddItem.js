function AddItem(props) {
  function setDataHandler(e) {
    props.setData(prevValue => ({
      ...prevValue,
      [e.target.name]: e.target.value
    }))
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