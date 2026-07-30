export default function Home() {
  return (
    <main style={{
      background:"#0b0b0b",
      color:"white",
      minHeight:"100vh",
      textAlign:"center",
      padding:"30px"
    }}>

      <header style={{
        color:"#c9a227",
        fontSize:"28px",
        fontWeight:"bold",
        padding:"20px"
      }}>
        ☕ DILHUX Aramgah
      </header>


      <section style={{padding:"50px 10px"}}>

        <h1 style={{color:"#c9a227"}}>
          تەم ۋە ئارام بىرلەشكەن جاي
        </h1>

        <p>
          Premium Cafe Digital Menu
        </p>


        <a href="#menu">
          <button style={{
            background:"#c9a227",
            border:"none",
            padding:"15px 35px",
            borderRadius:"30px",
            fontWeight:"bold",
            cursor:"pointer"
          }}>
            🍽️ Menu كۆرۈش
          </button>
        </a>

      </section>



      <section id="menu">

        <h2 style={{color:"#c9a227"}}>
          🍽️ Menu
        </h2>


        <div style={{
          background:"#171717",
          padding:"20px",
          margin:"20px auto",
          maxWidth:"350px",
          borderRadius:"15px"
        }}>
          <h3>🔥 قوي گۆشى كاۋاپ</h3>
          <p>ساپ قوي گۆشىدىن تەييارلانغان</p>
          <b>₺250</b>
        </div>


        <div style={{
          background:"#171717",
          padding:"20px",
          margin:"20px auto",
          maxWidth:"350px",
          borderRadius:"15px"
        }}>
          <h3>☕ قارا قەھۋە</h3>
          <p>ئالاھىدە پىشۇرۇلغان قەھۋە</p>
          <b>₺90</b>
        </div>


        <div style={{
          background:"#171717",
          padding:"20px",
          margin:"20px auto",
          maxWidth:"350px",
          borderRadius:"15px"
        }}>
          <h3>🥤 سوغۇق ئىچىملىك</h3>
          <p>سۈپەتلىك ئىچىملىك</p>
          <b>₺70</b>
        </div>


      </section>

    </main>
  );
}
