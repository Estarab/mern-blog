import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function OnlySuperUserPrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser && currentUser.isSuperUser ? (
    <Outlet />
  ) : (
    <Navigate to='/sign-in' />
  );
}


// import { useSelector } from 'react-redux';
// import { Outlet, Navigate } from 'react-router-dom';

// export default function OnlyAdminPrivateRoute() {
//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser && currentUser.isAdmin ? (
//     <Outlet />
//   ) : (
//     <Navigate to='/sign-in' />
//   );
// }