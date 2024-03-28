import Footer from "../components/footer";
import Meta from "../components/meta";
import Nav from "../components/nav";
import Toaster from "../components/toaster";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Nav />
      <Toaster />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
