import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { privateRoute } from '../redux/selectors';

interface Props {
  components: any
}

export const PrivateRoute = ({components}: Props) => {
  const auth = useSelector(privateRoute)
  return auth ? components : <Navigate to="/login" />;
}
