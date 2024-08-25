export default function LandingPage() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "green",
          padding: "20px",
          textAlign: "center",
          maxWidth: "800px", // Agregamos un ancho máximo
          margin: "0 auto", // Centramos el contenedor
          marginTop: "20px",
        }}
      >
        <h1 style={{ color: "white" }}>
          Modulo 7: DESARROLO FRONTEND CON REACT
        </h1>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h2>Bienvenido a nuestro curso de React</h2>
        <hr />
        <p>
          En este curso, aprenderás a crear aplicaciones web dinámicas y
          escalables con React.
        </p>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h2>Temas cubiertos</h2>
        <hr />
        <ul>
          <li>Introducción a React Creación de aplicaciones web con React</li>
          <li>Componentes y JSX</li>
          <li>Estado y props</li>
          <li>Eventos y manejo de estado</li>
        </ul>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h2>Cursos Adicionales</h2>
        <hr />
        <p>
          Si estás interesado en aprender más sobre desarrollo web, te
          recomendamos nuestros cursos adicionales:
        </p>
        <ul>
          <li>Curso de JavaScript avanzado</li>
          <li>Curso de CSS y diseño web</li>
          <li>Curso de Node.js y backend</li>
        </ul>
      </div>
      <footer style={{ textAlign: "center" }}>
        <p>&copy; 2024 Desarrollo Frontend con React</p>
      </footer>
    </div>
  );
}
