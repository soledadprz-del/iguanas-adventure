page.jsx
export default function IguanasAdventureWebsite() {
return (
<div style={{
backgroundColor: 'black',
color: 'white',
minHeight: '100vh',
fontFamily: 'Arial',
padding: '40px',
textAlign: 'center'
}}>

```
  <img
    src="https://i.imgur.com/0y0y0y0.png"
    alt="Iguanas Adventure"
    style={{
      width: '220px',
      borderRadius: '20px',
      marginBottom: '20px'
    }}
  />

  <h1 style={{
    fontSize: '60px',
    fontWeight: 'bold',
    color: '#ff7b00'
  }}>
    Iguanas Adventure
  </h1>

  <p style={{
    fontSize: '24px',
    maxWidth: '800px',
    margin: '20px auto',
    color: '#cccccc'
  }}>
    Renta premium de RZR y Can-Am en Bahía de Banderas.
    Tours privados, lodadas extremas y aventuras inolvidables.
  </p>

  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '40px',
    flexWrap: 'wrap'
  }}>
    <a
      href="https://wa.me/523223694727"
      style={{
        backgroundColor: '#25D366',
        color: 'white',
        padding: '15px 30px',
        borderRadius: '15px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px'
      }}
    >
      Reservar por WhatsApp
    </a>

    <a
      href="tel:+523223694727"
      style={{
        backgroundColor: '#ff7b00',
        color: 'white',
        padding: '15px 30px',
        borderRadius: '15px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px'
      }}
    >
      Llamar Ahora
    </a>
  </div>

  <div style={{
    marginTop: '80px'
  }}>
    <h2 style={{
      fontSize: '40px',
      color: '#ff7b00'
    }}>
      Tours Disponibles
    </h2>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
      gap: '30px',
      marginTop: '40px'
    }}>
      
      <div style={{
        backgroundColor: '#111',
        padding: '30px',
        borderRadius: '20px'
      }}>
        <h3>Ruta Lodadas</h3>
        <p>2-4 Horas</p>
        <h2>$3,500 MXN</h2>
      </div>

      <div style={{
        backgroundColor: '#111',
        padding: '30px',
        borderRadius: '20px'
      }}>
        <h3>Tour Miradores</h3>
        <p>3 Horas</p>
        <h2>$2,800 MXN</h2>
      </div>

      <div style={{
        backgroundColor: '#111',
        padding: '30px',
        borderRadius: '20px'
      }}>
        <h3>Sunset Adventure</h3>
        <p>2 Horas</p>
        <h2>$2,500 MXN</h2>
      </div>

    </div>
  </div>

  <footer style={{
    marginTop: '100px',
    color: '#666'
  }}>
    © 2026 Iguanas Adventure • Bahía de Banderas
  </footer>

</div>
```

)
}
