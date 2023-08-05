import { graphql, HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";

interface IPageData {
  homepage: Queries.PrismicHomepage;
}
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const SubscriptionConfirmedPage: React.FC<PageProps<IPageData>> = ({ data }) => {
  return (
    <Layout githubUrl={data.homepage.data.github!.url!} cvUrl={data.homepage.data.cv!.url!}>
      <main style={pageStyles}>
        <h1 style={headingStyles}>Subscription confirmed!</h1>
        <p style={paragraphStyles}>
          Boom!😀 You're officially confirmed and on the list. Expect some great emails headed your way very soon.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <b>
            <Link to="/">Go home</Link>.
          </b>
        </p>
      </main>
    </Layout>
  );
};

export default SubscriptionConfirmedPage;

export const Head: HeadFC = () => <title>ML Engineer Newsletter - Subscription Confirmed</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    homepage: prismicHomepage {
      data {
        cv {
          url
        }
        github {
          url
        }
      }
    }
  }
`;
