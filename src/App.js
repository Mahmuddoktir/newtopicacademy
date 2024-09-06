import Advantage from "./components/advantage";
import Choose from "./components/choose";
import Courses from "./components/courses";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Message from "./components/message";
import Navbar from "./components/navbar";
import Results from "./components/results";
import Scholarship from "./components/scholarship";
import Showcase from "./components/showcase";
import Success from "./components/success";
import Video from "./components/video";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Showcase />
      <Choose />
      <Results />
      <Scholarship />
      <Video />
      <Success />
      <Courses />
      <Advantage />
      <Faq />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
