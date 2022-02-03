import * as React from 'react';
import styled from 'styled-components';

import { graphql, useStaticQuery } from 'gatsby';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(data);

  return (
    <Body>
      <Header>
        <h1>bebezin</h1>
      </Header>
      <Content>
        <img src="https://t.ctcdn.com.br/l_4EIHeXGXeZ1E1Glfjn3uY3SLc=/i372972.gif"></img>
      </Content>
    </Body>
  );
};

export default Layout;
