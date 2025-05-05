import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Body from "./body.jsx";
import Posts from "./posts.jsx";

function App(){
  const sample_data = 'shark logo';

  return(
    <div>
      <Header logo={sample_data} />
      <div className="hero">hero</div>
      <Body />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;