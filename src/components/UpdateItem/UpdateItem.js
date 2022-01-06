function UpdateItem({ data, setData, emptyData, BottleForm }) {
  function setDataHandler(e) {
    setData({ ...data, [e.target.name]: e.target.value})
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    setData(emptyData);
  }

  return (
    <div className='updateItem'>
      <h1 className='updateItem__title'>Исправить позицию</h1>
      {
        <BottleForm data = {data}
                    onSubmitHandler = {onSubmitHandler}
                    setDataHandler = {setDataHandler}
        />
      }
    </div>
  )
};

export default UpdateItem;