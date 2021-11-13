import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  margin-bottom: 4rem;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  /* @media (min-width: 1200px) {
    width: 1170px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 768px) {
    width: 750px;
  } */
`;

export const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;
`;

export const Main = styled.main`
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 992px) {
    width: 100%;
    float: left;
  }
`;

export const BreadcrumbsAndForm = styled.div`
  display: flex;
  justify-content: space-between;

  nav {
    color: #fff;
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  p {
    margin: 0 0 1em 0;
    float: left;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  margin: 0 0 1em 0;
  float: right;
  margin-bottom: 30px;
  margin-right: 15px;

  div {
    position: relative;
    width: 100%;
    font-weight: 400;
  }

  input {
    color: #000;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
