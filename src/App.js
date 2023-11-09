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

const aboutUs = [
  {
    question: "How does Parkname seperate itself from other domain name parkingcompanies?",
    descriptionAsk: "Your domains are a valuable online property. As in any incestment, you want the most efficient, easy way to make sure your property is going to be profitable. Do you own more than 1,000 domains? As a proffesional domainer, you will find everything you need throught Parkname to generate maximum profits for your domain portfolio."
  },  
  {
    question: "Is Parkname Parking actually free?",
    descriptionAsk: "No, Parkname Parking is not free. We offer various services with different pricing options. You can check our pricing details on our website."
  },  
  {
    question: "What you do?",
    descriptionAsk: "Parkname provides domain name parking and monetization services. We help domain owners make money from their unused domain names."
  },      
  {
    question: "When was Parkname first founded?",
    descriptionAsk: "Parkname was founded in 2018"
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
