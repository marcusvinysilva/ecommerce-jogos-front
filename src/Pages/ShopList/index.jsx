import { Container, Content, Form, Main, Row } from './style';
import { GamesShopList } from '../../Components/ShopList';
export default function ShopList() {
  return (
    <section>
      <Container className="container">
        <Row className="row">
          <Main className="main">
            <div>
              <nav>
                <a href="/#">links</a>
              </nav>
              <Form>
                <div>
                  <input type="select" />
                </div>
              </Form>
            </div>
            <Content>
              <GamesShopList />
            </Content>
          </Main>
        </Row>
      </Container>
    </section>
  );
}
