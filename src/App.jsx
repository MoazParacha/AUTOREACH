import Header from "./components/header";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Subscription from "./components/subscription";
import Prospecting from "./components/prospecting";
import Successmatrix from "./components/successmatrix";
import  Featureheighlights from "./components/featureheighlights";
import Emailsubscription from "./components/emailsubscription";
import Usesalesmarketing from "./components/usesalesmarketing";
import Footer from "./components/footer";


const App = () => {
  
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Subscription />
      <Prospecting />
      <Successmatrix />
      <Featureheighlights/>
      <Emailsubscription />
      <Usesalesmarketing />
      <Footer />
    </div>
  );
};


export default App;
