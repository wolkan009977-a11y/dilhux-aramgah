export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#06283D,#0B3A53,#07151F)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "30px 15px",
      }}
    >

      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          padding: "35px 25px",
          borderRadius: "35px",
          background:
            "rgba(0,0,0,0.35)",
          border:
            "3px solid #D4AF37",
          boxShadow:
            "0 0 30px rgba(212,175,55,0.35)",
        }}
      >

        <h1
          style={{
            color:"#D4AF37",
            fontSize:"36px",
            marginBottom:"15px",
          }}
        >
          ☕ دىلخۇش ئارامگاھى
        </h1>


        <h2
          style={{
            fontSize:"22px",
            lineHeight:"1.8",
          }}
        >
          ئەزىز مېھمان،<br/>
          دىلخۇش ئارامگاھىغا خۇش كەپسىز
        </h2>


        <a
          href="/menu"
          style={{
            display:"inline-block",
            marginTop:"35px",
            padding:"18px 45px",
            borderRadius:"40px",
            background:"#D4AF37",
            color:"#07151F",
            fontSize:"22px",
            fontWeight:"bold",
            textDecoration:"none",
            border:"3px solid #FFE8A3",
            boxShadow:
              "0 8px 20px rgba(0,0,0,0.4)",
          }}
        >
          🍽️ تىزىملىك كۆرۈش
        </a>


        <p
          style={{
            marginTop:"40px",
            color:"#FFE8A3",
            fontSize:"18px",
            lineHeight:"2",
          }}
        >
          دوستلار جەم بولۇپ كۈلكە ياڭرىغان،
          <br/>
          مەززىلىك تاماق بىلەن داستىخان تولغان.
          <br/>
          «يەنە كېلەيلى» دەيدۇ ھەممە مېھمان،
          <br/>
          دىلخۇش ئارامگاھى — نامىغا لايىق ماكان
        </p>


      </div>

    </main>
  );
}
