import { useState } from 'react';

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  const incrementar = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <div style={{
      border: '2px solid #A0430A',
      padding: '1rem',
      borderRadius: '12px',
      maxWidth: '200px',
      textAlign: 'center',
      marginTop: '1rem',
      backgroundColor: '#DFE8E6',
    }}>
      <h3>Contador</h3>
      <p style={{ fontSize: '2rem' }}>{cuenta}</p>
      <button onClick={incrementar} style={{ padding: '0.5rem', backgroundColor: '#A0430A', color: '#fff', border: 'none', borderRadius: '8px' }}>
        Sumar
      </button>
    </div>
  );
}

export default Contador;
