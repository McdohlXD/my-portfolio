import { useLocation, useParams } from 'react-router-dom';

type useParams = {
  id?: string;
  userName?: string;
};

export default function User() {
  const { id } = useParams();
  const location = useLocation();
  const userName = location.state.userName;
  return (
    <div>
      User's profile id of {id}, and the name is {userName}
    </div>
  );
}
