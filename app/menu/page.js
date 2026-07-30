export default function Menu() {
  const items = [
    {
      name: "🔥 قوي گۆشى كاۋاپ",
      desc: "ساپ قوي گۆشىدىن تەييارلانغان",
      price: "250₺",
    },
    {
      name: "☕ قارا قەھۋە",
      desc: "ئالاھىدە پىشۇرۇلغان قەھۋە",
      price: "90₺",
    },
    {
      name: "🥤 سوغۇق ئىچىملىك",
      desc: "تازە ۋە سۈپەتلىك ئىچىملىك",
      price: "70₺",
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

      <p>تەملىك يېمەكلىك ۋە ئالاھىدە قەھۋە</p>

      {items.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#171717",
            padding: "20px",
            margin: "20px auto",
            maxWidth: "350px",
            borderRadius: "15px",
          }}
        >
          <h2>{item.name}</h2>
          <p>{item.desc}</p>
          <h3 style={{ color: "#c9a227" }}>
            {item.price}
          </h3>
        </div>
      ))}

    </main>
  );
}
