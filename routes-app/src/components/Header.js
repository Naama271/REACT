
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div >
      <Link  to="/">
        home
      </Link>
      <Link to="/products">
        products
      </Link>
    </div>
    );
  }

export default Header;