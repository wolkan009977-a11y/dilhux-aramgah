"use client";

import { useState } from "react";

export default function Menu() {
  const [active, setActive] = useState("كاۋاپلار");

  const menus = {
    "كاۋاپلار": [
      ["🔥 قوي گۆشى كاۋاپ", "65₺"],
      ["🐟 بېلىق كاۋاپ", "40₺"],
      ["🍗 توخۇ قانات كاۋاپ", "25₺"],
      ["🥩 جىگەر كاۋاپ", "50₺"],
      ["🥩 بۆرەك كاۋاپ", "50₺"],
      ["🔥 مەنجاڭ كاۋاپ", "10₺"],
    ],

    "ئىچىملىكلەر": [
      ["🥛 دوغاپ", "30₺"],
      ["🍹 موھىتو", "60₺"],
      ["🍑 شاپتۇل چاي", "50₺"],
    ],

    "ئاچچىقلار": [
      ["🍞 نان", "5₺"],
      ["🔥 مەنجاڭ", "10₺"],
      ["🌶️ ئۇزۇنچاق قىيزا", "25₺"],
      ["🌶️ ياپلاق قىيزا", "25₺"],
      ["🥚 تۇخۇم", "15₺"],
      ["🍗 توخۇ ۋەنزىسى", "20₺"],
    ],
  };

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

      <div>
        {Object.keys(menus).map((name) => (
          <button
            key={name}
            onClick={() => setActive(name)}
            style={{
              margin: "8px",
              padding: "12px 20px",
              borderRadius: "25px",
              border: "none",
              background:
                active === name ? "#c9a227" : "#333",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <h2 style={{ color: "#c9a227", marginTop: "30px" }}>
        {active}
      </h2>

      {menus[active].map((item, index) => (
        <div
          key={index}
          style={{
            background: "#171717",
            padding: "18px",
            margin: "15px auto",
            maxWidth: "350px",
            borderRadius: "15px",
          }}
        >
          <h3>{item[0]}</h3>
          <p
            style={{
              color: "#c9a227",
              fontSize: "20px",
            }}
          >
            {item[1]}
          </p>
        </div>
      ))}
    </main>
  );
              }
