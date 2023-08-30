import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const ProtectedRoute = ({ children }) => {
  const  user  = useSelector(selectCurrentUser);
  if (!user) {
    console.log("here")
    return <Navigate to='/' />;
  }
  return children;
};
export default ProtectedRoute;
