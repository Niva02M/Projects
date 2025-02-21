import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <nav className="bg-blue-500 text-white p-4 flex gap-4 justify-end">
      <Link to="/" className="hover:underline">
        Dashboard
      </Link>
      <Link to="/cart" className="hover:underline">
        My Cart ({cartProducts.length})
      </Link>
    </nav>
  );
};

export default Nav;
