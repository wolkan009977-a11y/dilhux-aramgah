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
        minHeight: "100vh",
        padding: "30px 15px",
        textAlign: "center",
        color: "#fff",
        background:
          "linear-gradient(135deg,#06283D,#0B3A53,#07151F)",
      }}
    >

      <div
        style={{
          border: "3px solid #D4AF37",
          borderRadius: "30px",
          padding: "25px",
          maxWidth: "500px",
          margin: "auto",
          background:
            "rgba(0,0,0,0.35)",
          boxShadow:
            "0 0 25px rgba(212,175,55,0.35)",
        }}
      >

        <h1
          style={{
            color:"#D4AF37",
            fontSize:"32px",
            marginBottom:"5px",
          }}
        >
          ☕ دىلخۇش ئارامگاھى
        </h1>

        <p
          style={{
            fontSize:"20px",
            color:"#FFE8A3",
          }}
        >
          ✦ يىمەك-ئىچمەك تىزىملىكى ✦
        </p>


        <div style={{marginTop:"25px"}}>
          {Object.keys(menus).map((name)=>(
            <button
              key={name}
              onClick={()=>setActive(name)}
              style={{
                margin:"6px",
                padding:"13px 18px",
                borderRadius:"30px",
                border:
                  "2px solid #D4AF37",
                background:
                  active===name
                  ? "#D4AF37"
                  : "transparent",
                color:
                  active===name
                  ? "#07151F"
                  : "#fff",
                fontSize:"16px",
              }}
            >
              {name}
            </button>
          ))}
        </div>


        <h2
          style={{
            marginTop:"35px",
            color:"#D4AF37",
          }}
        >
          {active}
        </h2>


        {menus[active].map((item,index)=>(
          <div
            key={index}
            style={{
              margin:"18px auto",
              padding:"18px",
              maxWidth:"360px",
              borderRadius:"22px",
              background:
                "linear-gradient(145deg,#8B5A2B,#5C3515)",
              border:
                "2px solid #D4AF37",
              boxShadow:
                "0 8px 20px rgba(0,0,0,0.4)",
            }}
          >

            <h3
              style={{
                fontSize:"21px",
                margin:"5px",
              }}
            >
              {item[0]}
            </h3>

            <div
              style={{
                color:"#FFE8A3",
                fontSize:"24px",
                fontWeight:"bold",
              }}
            >
              {item[1]}
            </div>

          </div>
        ))}

      </div>

    </main>
  );
}
