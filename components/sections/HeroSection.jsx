"use client"

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          color: "black",
          padding: "40px",
          borderRadius: "12px",
          fontSize: "24px",
        }}
      >
        HERO IS VISIBLE
      </div>
    </section>
  )
}