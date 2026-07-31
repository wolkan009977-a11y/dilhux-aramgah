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
          }}
        />

        <h1
          style={{
            color: "#D4AF37",
            fontSize: "32px",
            margin: "8px 0",
          }}
        >
          دىلخۇش ئارامگاھى
        </h1>


        <p
          style={{
            fontSize:"19px",
            lineHeight:"1.8",
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
            margin:"18px 0",
            padding:"16px 42px",
            borderRadius:"50px",
            background:"#D4AF37",
            color:"#07151F",
            fontSize:"21px",
            fontWeight:"bold",
            textDecoration:"none",
          }}
        >
          🍽️ تىزىملىك كۆرۈش
        </a>


        <div
          style={{
            color:"#FFE8A3",
            fontSize:"15px",
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


        {/* ئادرېس بۆلىكى */}

        <div
          style={{
            marginTop:"20px",
            paddingTop:"18px",
            borderTop:
              "1px solid rgba(212,175,55,0.5)",
            color:"#FFE8A3",
            fontSize:"15px",
            lineHeight:"2",
          }}
        >

          ✦ ───────── ✦
          <br/>

          <span
            style={{
              color:"#D4AF37",
              fontSize:"18px",
            }}
          >
            📍 بىزنىڭ ئورنىمىز
          </span>

          <br/>

          كەفەر جالىس،
          <br/>
          ئۇيغۇر مەھەللىسى،
          <br/>
          خەلىق ئىشلار ئىدارىسىنىڭ ئۇدۇلىدا

          <br/><br/>

          <span
            style={{
              color:"#D4AF37",
              fontSize:"18px",
            }}
          >
            📞 ئالاقىلىشىش
          </span>

          <br/>

          +963968363799

          <br/>

          ✦ ───────── ✦

        </div>


        <div
          style={{
            marginTop:"15px",
            color:"#D4AF37",
            fontSize:"13px",
            letterSpacing:"3px",
          }}
        >
          ✦ DILHUX ✦
        </div>

      </div>

    </main>
  );
              }
