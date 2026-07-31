export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: "15px",
        boxSizing: "border-box",
        background:
          "radial-gradient(circle at top left, rgba(212,175,55,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(212,175,55,0.12), transparent 30%), linear-gradient(145deg,#06283D,#0B3A53,#07151F)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "25px 20px",
          borderRadius: "32px",
          background: "rgba(0,0,0,0.45)",
          border: "3px solid #D4AF37",
          boxShadow:
            "0 0 35px rgba(212,175,55,0.35)",
          boxSizing: "border-box",
        }}
      >

        <img
          src="/logo.png"
          alt="DILHUX Logo"
          style={{
            width: "140px",
            height: "140px",
            objectFit: "contain",
            borderRadius: "50%",
            marginBottom: "10px",
            filter:
              "drop-shadow(0 6px 12px rgba(0,0,0,0.6))",
          }}
        />

        <h1
          style={{
            color: "#D4AF37",
            fontSize: "32px",
            margin: "8px 0",
            textShadow: "0 3px 10px #000",
          }}
        >
          دىلخۇش ئارامگاھى
        </h1>


        <div
          style={{
            width: "80%",
            height: "1px",
            background: "#D4AF37",
            margin: "12px auto",
          }}
        />


        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.8",
            margin: "10px 0",
          }}
        >
          ئەزىز مېھمان،
          <br />
          دىلخۇش ئارامگاھىغا خۇش كەپسىز
        </p>


        <a
          href="/menu"
          style={{
            display: "inline-block",
            margin: "18px 0",
            padding: "16px 42px",
            borderRadius: "50px",
            background:
              "linear-gradient(145deg,#F5D76E,#D4AF37)",
            color: "#07151F",
            fontSize: "21px",
            fontWeight: "bold",
            textDecoration: "none",
            border: "3px solid #FFE8A3",
            boxShadow:
              "0 8px 20px rgba(0,0,0,0.45)",
          }}
        >
          🍽️ تىزىملىك كۆرۈش
        </a>


        <div
          style={{
            marginTop: "10px",
            paddingTop: "15px",
            borderTop:
              "1px solid rgba(212,175,55,0.5)",
            color: "#FFE8A3",
            fontSize: "15px",
            lineHeight: "1.9",
          }}
        >
          دوستلار جەم بولۇپ كۈلكە ياڭرىغان،
          <br />
          مەززىلىك تاماق بىلەن داستىخان تولغان.
          <br />
          «يەنە كېلەيلى» دەيدۇ ھەممە مېھمان،
          <br />
          دىلخۇش ئارامگاھى — نامىغا لايىق ماكان
        </div>


        <div
          style={{
            marginTop: "15px",
            color: "#D4AF37",
            fontSize: "13px",
            letterSpacing: "3px",
          }}
        >
          ✦ DILHUX ✦
        </div>

      </div>

    </main>
  );
}
