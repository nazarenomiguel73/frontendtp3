import Tarjeta from './components/tarjeta';
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <Tarjeta 
        nombre="Nazareno" 
        apellido="Miguel" 
        profesion="Desarrollador Frontend" 
        descripcion="Apasionado por la tecnología y el diseño web."
      />
    </div>
  );
}

import Tarjeta from './components/tarjeta';
import Contador from './components/Contador';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      <Tarjeta 
        nombre="Nazareno" 
        apellido="Miguel" 
        profesion="Desarrollador Frontend" 
        descripcion="Apasionado por la tecnología y el diseño web."
      />
      <Contador />
    </div>
  );
}

export default App;
