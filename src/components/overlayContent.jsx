function OverlayContent() {
  return (
    <div style={overlayStyle}>
      <h1 style={titleStyle}>Invierta en Casos</h1>
      <p style={descriptionStyle}>Obtenga beneficios al invertir en casos legales</p>
      <button style={buttonStyle}>Invierta hoy</button>
    </div>
  );
}

const overlayStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
  zIndex: 2,
};

const titleStyle = {
  fontSize: "3rem",
  fontWeight: "bold",
  margin: 0,
};

const descriptionStyle = {
  fontSize: "1.25rem",
  marginTop: "1rem",
};

const buttonStyle = {
  marginTop: "2rem",
  padding: "0.75rem 1.5rem",
  backgroundColor: "#D4A373",
  border: "none",
  color: "white",
  fontSize: "1rem",
  cursor: "pointer",
  borderRadius: "5px",
};

export default OverlayContent;
