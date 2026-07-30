export default function Menu() {
  const categories = [
    {
      title: "🔥 كاۋاپلار",
      items: [
        ["قوي گۆشى كاۋاپ", "250₺"],
        ["توخۇ كاۋاپ", "200₺"],
        ["جىگەر كاۋاپ", "180₺"],
      ],
    },
    {
      title: "☕ قەھۋەلەر",
      items: [
        ["قارا قەھۋە", "90₺"],
        ["سۈتلۈك قەھۋە", "110₺"],
        ["ئالاھىدە قەھۋە", "130₺"],
      ],
    },
    {
      title: "🥤 ئىچىملىكلەر",
      items: [
        ["سوغۇق ئىچىملىك", "70₺"],
        ["چاي", "50₺"],
        ["شەربەت", "80₺"],
      ],
    },
  ];

  return (
    <main
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#c9a227" }}>
        🍽️ DILHUX Aramgah Menu
      </h1>

      {categories.map((cat, index) => (
        <section key={index} style={{ marginTop: "35px" }}>

          <h2 style={{ color: "#c9a227" }}>
            {cat.title}
          </h2>

          {cat.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#171717",
                padding: "15px",
                margin: "12px auto",
                maxWidth: "350px",
                borderRadius: "15px",
              }}
            >
              <h3>{item[0]}</h3>
              <p style={{ color: "#c9a227" }}>
                {item[1]}
              </p>
            </div>
          ))}

        </section>
      ))}

    </main>
  );
        }
