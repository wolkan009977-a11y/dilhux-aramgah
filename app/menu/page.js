"use client";

import { useState } from "react";

export default function Menu() {
  const menus = {
    "🔥 كاۋاپلار": [
      ["قوي گۆشى كاۋاپ", "65₺"],
      ["بېلىق كاۋاپ", "40₺"],
      ["توخۇ قانات كاۋاپ", "25₺"],
      ["جىگەر كاۋاپ", "50₺"],
      ["بۆرەك كاۋاپ", "50₺"],
      ["مەنجاڭ كاۋاپ", "10₺"],
    ],

    "🥤 ئىچىملىكلەر": [
      ["دوغاپ", "30₺"],
      ["موھىتو", "60₺"],
      ["شاپتۇل چاي", "50₺"],
    ],

    "🌶️ ئاچچىقلار": [
      ["نان", "5₺"],
      ["مەنجاڭ", "10₺"],
      ["ئۇزۇنچاق قىيزا", "25₺"],
      ["ياپلاق قىيزا", "25₺"],
      ["تۇخۇم", "15₺"],
      ["توخۇ ۋەنزىسى", "20₺"],
    ],
  };

  const [active, setActive] = useState("🔥 كاۋاپلار");

  return (
    <main
      style={{
        background: "linear-gradient(#0b2a3d, #07151f)",
        color: "white",
        minHeight: "100vh",
        padding: "30px",
        textAlign: "center",
      }}
    >

      <h1
        style={{
          color: "#d4af37",
          fontSize: "30px",
        }}
      >
        ☕ دىلخۇش ئارامگاھى
      </h1>

      <h2>
        يىمەك-ئىچمەك تىزىملىكى
      </h2>


      <div>
        {Object.keys(menus).map((name) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            style={{
              margin: "8px",
              padding: "12px 18px",
              borderRadius: "25px",
              border: "1px solid #d4af37",
              background:
                active === name
                  ? "#d4af37"
                  : "#12384d",
              color:
                active === name
                  ? "#07151f"
                  : "white",
              fontSize: "16px",
            }}
          >
            {name}
          </button>
        ))}
      </div>


      <div style={{ marginTop: "30px" }}>
        {menus[active].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#8b5a2b",
              margin: "15px auto",
              padding: "20px",
              maxWidth: "350px",
              borderRadius: "20px",
              border: "2px solid #d4af37",
            }}
          >
            <h3>
              {item[0]}
            </h3>

            <p
              style={{
                color: "#ffe08a",
                fontSize: "22px",
              }}
            >
              {item[1]}
            </p>

          </div>
        ))}
      </div>

    </main>
  );
}
