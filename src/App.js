// App.js
import './App.css';
import Header from './components/Header';
import CoreApp from './components/CoreApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CoreApp />
      <Footer />
    </div>
  );
}

export default App;
