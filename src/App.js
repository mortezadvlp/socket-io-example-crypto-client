import { useSelector } from 'react-redux';
import SimpleCoinCard from './components/simpleCoinCard';

function App() {
  const coins = useSelector((state) => state.coins)
  return (
    <div className='flex flex-row flex-wrap gap-x-4 gap-y-4 justify-center content-center h-screen bg-lime-300' >
      {
        coins.map((coin) => 
          <SimpleCoinCard key={coin.title} title={coin.title} />
        )
      }
      
    </div>
  );
}

export default App;
