import { HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";

import Layout from "../components/layout/confirm-subscription";

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

const SubscriptionConfirmedPage: React.FC<PageProps> = () => {
  return (
    <Layout>
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
