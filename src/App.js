import ColorPicker from "./components/colorPicker";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <main className="w-72 h-[400px] text-center mx-auto justify-center items-center border-gray-600">
      <Header />
      <hr className="h-px mb-6 bg-gray-100 border-0" />
      <ColorPicker />
      <hr className="h-px bg-gray-100 border-0" />
      <Footer />
    </main>
  );
}

export default App;
