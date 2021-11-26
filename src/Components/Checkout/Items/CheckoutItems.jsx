import { Container, Footer, Table } from './styles';
import { useCart } from '../../../context/CartContext';
import { convertPrice } from '../../../utils/';

export const CheckoutCartItems = () => {
  const { cartItems, total, itemCount } = useCart();

  return (
    <>
    <Container>
      <h1>List of Cart Items</h1>
      <Table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((game) => (
            <tr key={game.id}>
              <td>{`${game.gameName} * ${game.quantity}`}</td>
              <td>{`${convertPrice(game.price * game.quantity)}`}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Items</th>
            <td>{itemCount}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{convertPrice(total)}</td>
          </tr>
        </tfoot>
      </Table>
    </Container>
    <div>
    <Footer >&copy; All rights reserved - {new Date().getFullYear()}</Footer>
    </div>
    </>
  );
};
