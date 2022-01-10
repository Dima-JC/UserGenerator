import { Navigate } from 'react-router-dom';

import { LOGIN } from '../constants/path';

interface Props {
  components: JSX.Element
}

export const PrivateRoute = ({components}: Props) => {
  const auth: boolean = JSON.parse(localStorage.getItem('isAuth')!)
  
  return auth ? components : <Navigate to={LOGIN} />;
}
