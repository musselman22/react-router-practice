
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>

        </li>
        <li>
          <Link to="/individual-product">Individual Product</Link>

        </li>
      </ul>
    </nav>

  )
}

export default Nav




