import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
        padding: "40px",
      }}
    >

      <img
        src="/logo.png"
        alt="DILHUX Aramgah"
        style={{
          width: "120px",
          marginBottom: "20px",
          borderRadius: "50%",
        }}
      />

      <h1 style={{ color: "#c9a227" }}>
        ☕ DILHUX Aramgah
      </h1>

      <p>
        تەم ۋە ئارام بىرلەشكەن جاي
      </p>


      <Link href="/menu">
        <button
          style={{
            background: "#c9a227",
            color: "#000",
            border: "none",
            padding: "15px 35px",
            borderRadius: "30px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          🍽️ تىزىملىك
        </button>
      </Link>


    </main>
  );
}
