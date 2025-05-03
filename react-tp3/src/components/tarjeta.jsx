function Tarjeta({ nombre, apellido, profesion, descripcion }) {
    return (
      <div style={{
        border: '2px solid #A0430A',
        padding: '1rem',
        borderRadius: '12px',
        maxWidth: '300px',
        backgroundColor: '#DFE8E6',
      }}>
        <h2>{nombre} {apellido}</h2>
        <h4>{profesion}</h4>
        <p>{descripcion}</p>
      </div>
    );
  }
  
  export default Tarjeta;
  