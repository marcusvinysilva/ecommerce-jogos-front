import {
  Container,
  BreadcrumbsAndForm,
  Content,
  Form,
  Main,
  Row,
} from './style';
import { GamesShopList } from '../../Components/ShopList';
import { Hero } from '../../Components/Hero';
import { Breadcrumbs } from '@mui/material';
import Header from '../../Components/Header';
export default function ShopList() {
  return (
    <section>
      <Header />
      <Hero />
      <Container className="container">
        <Row className="row">
          <Main className="main">
            <BreadcrumbsAndForm>
              <Breadcrumbs>
                <a href="/#">Breadcrumbs</a>
              </Breadcrumbs>
              <Form>
                <div>Input Form</div>
              </Form>
            </BreadcrumbsAndForm>
            <Content>
              <GamesShopList />
            </Content>
          </Main>
        </Row>
      </Container>
    </section>
  );
}
