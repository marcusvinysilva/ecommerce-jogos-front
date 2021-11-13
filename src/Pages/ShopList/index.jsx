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
export default function ShopList() {
  return (
    <section>
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
