import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
    <>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>
        Do sit nostrud quis amet eu ut qui. Duis labore quis cupidatat
        consectetur irure. Quis aute occaecat ex et excepteur voluptate cillum
        minim id mollit. Consectetur ullamco cillum enim excepteur do pariatur
        aliqua consequat duis. Laboris nostrud est ipsum do laborum.
        Exercitation consequat laboris do cupidatat in aliquip ut laborum
        excepteur. Nulla ex magna cillum sit exercitation deserunt eiusmod
        adipisicing laborum laborum et.
      </p>
    </>
  );
};

export default Layout;
