import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <div>
      <h1>Page Not found</h1>
      <Link to={'/'}>Return</Link>
    </div>
  );
}
