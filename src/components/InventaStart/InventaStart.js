import { Form, Element, SubmitButton } from '../../utils/Forms';
import { createInventaHeader } from '../../utils/constants';


function InventaStart({ setData, data }) {
  function submitHandler(props) {
    setData({ nameInCharge: '', barName: 'SomeBar', date: '' });
  }

  return (
    <div className = 'InventaStart'>
      <div className = 'form__container'>
        <h1 className = 'form__title'>{createInventaHeader}</h1>

        <Form className = 'form' 
              type = 'submit'
              onSubmit = { submitHandler }
              values = { data }
              setFormValues = { setData }
              >

          <Element className = 'form__input' 
                   type = 'text' 
                   name = 'nameInCharge' 
                   placeholder = 'Имя ответственного'
                   >
            { ({ onChange, ...props }) => <input { ...props } onChange = { e => onChange(e.target.value) }/>}
          </Element>

          <Element className = 'form__error-span'
                   id = {'nameInCharge'}
                   >
            { (props) => <span { ...props }>{ data.nameInCharge }</span> }
          </Element>

          <Element className = 'form__input' 
                   type = 'text' 
                   name = 'date' 
                   placeholder = 'Дата'
                  >
            { ({ onChange, ...props }) => <input { ...props } onChange = { e => onChange(e.target.value) }/>}
          </Element>
          
          <Element className = 'form__error-span'
                   id = {'date'}
                   >
            { (props) => <span { ...props }>{ data.date }</span> }
          </Element>

          <SubmitButton className = 'form__submit-button form__submit-button_place_login'
                        type = 'submit'
                        > 
            { ({ isInvalid, ...props }) => <button disabled = { isInvalid } { ...props }>{ 'Начать' }</ button>}
          </SubmitButton>

        </Form>
      </div>
    </div>
  )
};

export default InventaStart;