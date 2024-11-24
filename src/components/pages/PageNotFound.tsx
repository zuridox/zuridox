import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";
import { useTheme } from "../../ThemeContext";

export default function PageNotFound() {
  const { theme } = useTheme();

  // Dynamic colors for light and dark themes
  const isDark = theme === "dark";
  const textColor = isDark ? "#ffffff" : "#333333";
  const backgroundColor = isDark ? "#1a1a1a" : "#f8f8f8";
  const gradientOverlay = isDark
    ? "linear-gradient(to right, #6a11cb, #2575fc)"
    : "linear-gradient(to right, #ff7eb3, #ff758c)";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        color: textColor,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Animation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: gradientOverlay,
          opacity: 0.2,
          transform: "scale(1.5)",
          animation: "spin 15s linear infinite",
        }}
      />

      {/* Animated Icon */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: "20px" }}>
        <XCircle
          style={{
            width: "128px",
            height: "128px",
            color: isDark ? "#ff4d4d" : "#ff6f61",
            animation: "bounce 3s infinite",
          }}
        />
      </div>

      {/* Heading */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Oops! Page Not Found
      </h1>

      {/* Description */}
      <p
        style={{
          fontSize: "1.25rem",
          color: isDark ? "#aaaaaa" : "#555555",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        The page you're looking for doesn't exist or may have been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          background: "linear-gradient(to right, #007bff, #0056b3)",
          color: "#ffffff",
          fontWeight: "bold",
          borderRadius: "9999px",
          textDecoration: "none",
          transition: "transform 0.3s, opacity 0.3s",
          zIndex: 1,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.opacity = "0.9";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.opacity = "1";
        }}
      >
        Go to Home
      </Link>

      {/* Floating Particles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "24px",
            height: "24px",
            backgroundColor: "#6a11cb",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
            opacity: "0.7",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "20%",
            width: "32px",
            height: "32px",
            backgroundColor: "#2575fc",
            borderRadius: "50%",
            animation: "float 4s ease-in-out infinite",
            opacity: "0.7",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "20%",
            width: "16px",
            height: "16px",
            backgroundColor: "#ff7eb3",
            borderRadius: "50%",
            animation: "float 5s ease-in-out infinite",
            opacity: "0.7",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "20px",
            height: "20px",
            backgroundColor: "#ff758c",
            borderRadius: "50%",
            animation: "float 7s ease-in-out infinite",
            opacity: "0.7",
          }}
        />
      </div>

      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes spin {
            0% { transform: scale(1.5) rotate(0deg); }
            100% { transform: scale(1.5) rotate(360deg); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
}
