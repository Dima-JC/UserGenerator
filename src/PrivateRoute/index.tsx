import { Navigate } from 'react-router-dom';

interface Props {
  components: JSX.Element
}

export const PrivateRoute = ({components}: Props) => {
  const auth: boolean = JSON.parse(localStorage.getItem('privateRoute')!)
  
  return auth ? components : <Navigate to="/login" />;
}
