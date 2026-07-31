export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(145deg,#06283D,#0B3A53,#07151F)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          padding: "28px 20px",
          borderRadius: "28px",
          background:
            "rgba(0,0,0,0.45)",
          border:
            "2px solid #D4AF37",
          boxShadow:
            "0 0 25px rgba(212,175,55,0.35)",
        }}
      >

        <div
          style={{
            color:"#D4AF37",
            fontSize:"22px",
          }}
        >
          ✦ ☕ ✦
        </div>


        <h1
          style={{
            margin:"10px 0",
            color:"#D4AF37",
            fontSize:"34px",
            textShadow:
              "0 3px 8px #000",
          }}
        >
          دىلخۇش ئارامگاھى
        </h1>


        <p
          style={{
            fontSize:"20px",
            lineHeight:"1.8",
            margin:"15px 0",
          }}
        >
          ئەزىز مېھمان،
          <br/>
          دىلخۇش ئارامگاھىغا خۇش كەپسىز
        </p>


        <a
          href="/menu"
          style={{
            display:"inline-block",
            margin:"22px 0",
            padding:"16px 42px",
            borderRadius:"50px",
            background:"#D4AF37",
            color:"#07151F",
            textDecoration:"none",
            fontSize:"21px",
            fontWeight:"bold",
            border:
              "2px solid #FFE8A3",
            boxShadow:
              "0 8px 18px rgba(0,0,0,0.4)",
          }}
        >
          🍽️ تىزىملىك كۆرۈش
        </a>


        <div
          style={{
            marginTop:"20px",
            paddingTop:"18px",
            borderTop:
              "1px solid rgba(212,175,55,0.5)",
            color:"#FFE8A3",
            fontSize:"16px",
            lineHeight:"1.9",
          }}
        >
          دوستلار جەم بولۇپ كۈلكە ياڭرىغان،
          <br/>
          مەززىلىك تاماق بىلەن داستىخان تولغان.
          <br/>
          «يەنە كېلەيلى» دەيدۇ ھەممە مېھمان،
          <br/>
          دىلخۇش ئارامگاھى — نامىغا لايىق ماكان
        </div>

      </div>

    </main>
  );
              }
