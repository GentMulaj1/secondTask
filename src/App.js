import './App.css';
import AboutUs from './components/AboutUs';
import MainAsk from './components/MainAsk';
import TabsPage from './pages/TabsPage';

       
const elements = [
    {
      id: 1,
      question: "Why park a domain name in Parkname?",
      descriptionAsk: "Parkname is the leading industry standard for domain name parking and monetization services. We offer a wide varienty of services to help you achieve success."
    },
    {
      id: 2,
      question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      descriptionAsk: "Plants absorb carbon dioxide (CO2) from the atmosphere during photosynthesis."
    },
    {
      id: 3,
      question: "What is the largest mammal in the world?",
      descriptionAsk: "The largest mammal in the world is the blue whale."
    },
]

function App() {
  return (
    <div className="App">
      <div className='first'>
        <h2>1.</h2>
        <TabsPage />
      </div>

      <div className='second'>
        <h2>2.</h2>
        <div className='MainAsk'>
          {elements.map((element) => (
            <MainAsk 
              key={element.id}
              id={element.id} 
              question={element.question} 
              descriptionAsk={element.descriptionAsk}
            />
          ))}
        </div>
      </div>

      <div className='third'>
        <h2>3.</h2>
        <AboutUs/>
      </div>


    </div>
  );
}

export default App;
