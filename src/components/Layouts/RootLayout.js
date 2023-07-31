import Footer from "../shared/Footer";

function RootLayout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
