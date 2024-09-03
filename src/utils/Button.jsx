function Button({ title, padding, onClick }) {
  const myStyle = {
    backgroundColor: "teal",
    padding: padding,
    borderRadius: "3rem",
    color: "#fff",
    wordSpacing: "1px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const hoverStyle = {
    backgroundColor: "teal",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-2px)",
  };

  const activeStyle = {
    transform: "scale(0.95)",
  };

  return (
    <button
      style={myStyle}
      type="submit"
      onClick={onClick}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = hoverStyle.backgroundColor)
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = myStyle.backgroundColor)
      }
      onMouseDown={(e) => (e.target.style.transform = activeStyle.transform)}
      onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
    >
      {title}
    </button>
  );
}

export default Button;
