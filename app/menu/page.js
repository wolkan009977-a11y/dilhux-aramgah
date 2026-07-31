"use client";

import { useState } from "react";

export default function Menu() {
  const [category, setCategory] = useState(null);

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(145deg,#06283D,#0B3A53,#07151F)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        padding: "25px 15px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >

      <div
        style={{
          width:"100%",
          maxWidth:"450px",
        }}
      >

        <h1
          style={{
            color:"#D4AF37",
            fontSize:"32px",
            marginBottom:"10px",
          }}
        >
          دىلخۇش ئارامگاھى
        </h1>

        <p
          style={{
            fontSize:"20px",
            marginBottom:"35px",
          }}
        >
          يىمەك-ئىچمەك تىزىملىكى
        </p>


        {!category && (
          <div>

            <button
              onClick={() => setCategory("kawap")}
              style={buttonStyle}
            >
              🍢 كاۋاپلار
            </button>


            <button
              onClick={() => setCategory("drink")}
              style={buttonStyle}
            >
              🥤 ئىچىملىكلەر
            </button>


            <button
              onClick={() => setCategory("spicy")}
              style={buttonStyle}
            >
              🌶️ ئاچچىقلار
            </button>

          </div>
        )}


        {category && (
          <button
            onClick={() => setCategory(null)}
            style={{
              ...buttonStyle,
              fontSize:"16px",
              padding:"12px 25px",
              marginBottom:"20px",
            }}
          >
            ← قايتىش
          </button>
        )}

      </div>

    </main>
  );
}


const buttonStyle = {
  width:"100%",
  padding:"18px",
  margin:"12px 0",
  borderRadius:"25px",
  border:"2px solid #FFE8A3",
  background:
    "linear-gradient(145deg,#F5D76E,#D4AF37)",
  color:"#07151F",
  fontSize:"22px",
  fontWeight:"bold",
  cursor:"pointer",
};
