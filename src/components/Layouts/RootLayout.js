import Footer from "../shared/Footer";
import Navbar from "../shared/Navber";
import Sidebar from "../shared/Sidebar";

function RootLayout({ children }) {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;
