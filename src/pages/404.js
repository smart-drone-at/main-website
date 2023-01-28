import * as React from "react";
import ChevronLink from "../components/ChevronLink";

const pageStyles = {
  color: "#232129",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 350,
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

const NotFoundPage = () => {
  return (
    <main style={pageStyles} className="p-14 md:p-24 h-[60vh] mt-20">
      <h1 style={headingStyles}>Seite nicht gefunden</h1>
      <p style={paragraphStyles}>
        Tut uns leid 😔, wir konnten nicht finden, wonach Sie gesucht haben.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <ChevronLink to="/">Hier geht's zurück</ChevronLink>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
