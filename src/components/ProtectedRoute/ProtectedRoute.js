import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute(props) {
  return (
    <Route>
      {
        () => props.isLogged ? <props.component props = {props} /> : <Navigate to = '/'/>
      }
    </Route>
  )
}

export default ProtectedRoute