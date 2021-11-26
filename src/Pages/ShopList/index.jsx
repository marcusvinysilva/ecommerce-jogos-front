import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Breadcrumbs } from '@mui/material';

import { useGames } from '../../context/GameContext';

import { GamesShopList } from '../../Components/ShopList';
import { Hero } from '../../Components/Hero';
import { Footer } from '../../Components/Footer';
import Header from '../../Components/Header';

import {
Container,
BreadcrumbsAndForm,
Content,
Form,
  Main,
  Row,
} from './style';



export default function ShopList() {
  const { selectedGame, getSelectedGame } = useGames();
  const { id } = useParams();

  useEffect(() => {
    getSelectedGame(id);
  }, []);
  return (
    <section>
      <Header />
      <Hero image={selectedGame.images} title={selectedGame.gameName} />
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
      <Footer />
    </section>
  );
}
