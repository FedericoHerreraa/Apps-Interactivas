import { IoArrowUp } from "react-icons/io5";

export const BackToTop = () => {
  const styles = {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    padding: "0.4rem",
    borderRadius: "9999px",
    border: "2px solid #cda45e", 
    backgroundColor: "#d4d4d8", 
    cursor: "pointer",
    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IoArrowUp size={20} />
    </div>
  );
};