import { useState, useEffect, useCallback, createContext, useContext } from 'react';

const FormContext = createContext({});

function Form({ validators, className, children, onSubmit, formValues, setFormValues }) {
  const [ isInvalid, setIsInvailid ] = useState(true);

  function submitHandler(e) {
    e.preventDefault();
    onSubmit(formValues);
  }

  const onChangeInput = useCallback((name, value) => {
    if(!name) return;
    setFormValues(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }, []);

  const formContextValues = {
    onChangeInput,
    isInvalid
  };

  return (
    <form onSubmit = {submitHandler}
          className = {className}>
      <FormContext.Provider value={formContextValues}>
        {children}  
      </FormContext.Provider>            
    </form>
  )
}

function Element({ children, name, type, placeholder, className, id }) {  
  const [ value, setValue ] = useState(''); 
  const { onChangeInput } = useContext(FormContext);

  useEffect(() => {
    onChangeInput(name, value);
  }, [onChangeInput, value, name]);

  return (
    children({
      name,
      type,
      placeholder,
      className,
      value,
      onChange: setValue,
      id,
    })
  )
}

function SubmitButton({ children, className, type }) {
  const { isInvalid } = useContext(FormContext);
  return (
    children({
      type,
      className,
      isInvalid,
    })
  )
}

export { Form, Element, SubmitButton };
