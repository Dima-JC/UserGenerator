import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { privateRoute } from '../redux/selectors';

export const PrivateRoute = ({components}: any) => {
  const auth = useSelector(privateRoute)

  return auth ? components : <Navigate to="/login" />;
}
