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
    socket.connect()
    console.log(socket.connected);
    socket.onAny((data) => {
      console.log('Hi');
    })
    socket.on('updateCoins', (data) => {
      console.log(data);
      updateCoins(data, dispatch);
    });

    return socket.disconnect();
  }, [])

  return (
    <TopCoins />
  );
}

export default App;
