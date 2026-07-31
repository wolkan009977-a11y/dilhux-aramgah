export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(212,175,55,0.18), transparent 25%), radial-gradient(circle at bottom right, rgba(212,175,55,0.12), transparent 25%), linear-gradient(145deg,#06283D,#0B3A53,#07151F)",
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
          padding: "30px 22px",
          borderRadius: "30px",
          background:
            "rgba(0,0,0,0.45)",
          border:
            "3px solid #D4AF37",
          boxShadow:
            "0 0 35px rgba(212,175,55,0.35)",
        }}
      >

        <img
          src="/logo.png"
          alt="DILHUX Logo"
          style={{
            width:"150px",
            height:"150px",
            objectFit:"contain",
            marginBottom:"10px",
            filter:
              "drop-shadow(0 6px 12px rgba(0,0,0,0.6))",
          }}
        />


        <h1
          style={{
            color:"#D4AF37",
            fontSize:"34px",
            margin:"10px 0",
            textShadow:
              "0 3px 10px #000",
          }}
        >
          دىلخۇش ئارامگاھى
        </h1>


        <div
          style={{
            width:"80%",
            height:"1px",
            background:"#D4AF37",
            margin:"15px auto",
            opacity:"0.6",
          }}
        />


        <p
          style={{
            fontSize:"20px",
            lineHeight:"1.9",
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
            margin:"25px 0",
            padding:"18px 48px",
            borderRadius:"50px",
            background:
              "linear-gradient(145deg,#F5D76E,#D4AF37)",
            color:"#07151F",
            fontSize:"22px",
            fontWeight:"bold",
            textDecoration:"none",
            border:
              "3px solid #FFE8A3",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.45)",
          }}
        >
          🍽️ تىزىملىك كۆرۈش
        </a>


        <div
          style={{
            marginTop:"15px",
            paddingTop:"20px",
            borderTop:
              "1px solid rgba(212,175,55,0.5)",
            color:"#FFE8A3",
            fontSize:"16px",
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
        </div>


        <div
          style={{
            marginTop:"18px",
            color:"#D4AF37",
            fontSize:"14px",
            letterSpacing:"3px",
          }}
        >
          ✦ DILHUX ✦
        </div>


      </div>

    </main>
  );
}
