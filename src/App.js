import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import TopCoins from './components/topCoins';
import { socketAddress } from './features/api';
import { updateCoins } from './features/utilities';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    
    const socket = io(socketAddress);

    socket.on('updateCoins', (data) => {
      updateCoins(data.coins, dispatch);
    });

    return () => { return socket.disconnect(); }
  }, [])

  return (
    <TopCoins />
  );
}

export default App;
