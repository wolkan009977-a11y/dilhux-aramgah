"use client";

import { useState } from "react";

export default function Menu() {
  const [category, setCategory] = useState(null);

  const kawaps = [
    {
      name: "قوي گۆشى كاۋاپ",
      price: "65 تىل",
      image: "/images/qoy-kawap.jpg",
    },
    {
      name: "بېلىق كاۋاپ",
      price: "40 تىل",
      image: "/images/balik-kawap.jpg",
    },
    {
      name: "توخۇ قانات كاۋاپ",
      price: "25 تىل",
      image: "/images/toyuq-qanat-kawap.jpg",
    },
    {
      name: "جىگەر كاۋاپ",
      price: "50 تىل",
      image: "/images/jiger-kawap.jpg",
    },
    {
      name: "بۆرەك كاۋاپ",
      price: "50 تىل",
      image: "/images/borek-kawap.jpg",
    },
    {
      name: "مەنجاڭ كاۋاپ",
      price: "10 تىل",
      image: "/images/menjang-kawap.jpg",
    },
  ];


  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(145deg,#06283D,#0B3A53,#07151F)",
        color: "white",
        padding: "25px 15px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >

      <h1
        style={{
          color:"#D4AF37",
          fontSize:"32px",
        }}
      >
        دىلخۇش ئارامگاھى
      </h1>


      {!category && (
        <div>

          <button style={buttonStyle}
            onClick={()=>setCategory("kawap")}
          >
            🍢 كاۋاپلار
          </button>


          <button style={buttonStyle}>
            🥤 ئىچىملىكلەر
          </button>


          <button style={buttonStyle}>
            🧃 قۇتۇلۇق ئىچىملىكلەر
          </button>


          <button style={buttonStyle}>
            🌶️ ئاچچىقلار
          </button>

        </div>
      )}



      {category === "kawap" && (
        <div>

          <button
            style={backStyle}
            onClick={()=>setCategory(null)}
          >
            ← قايتىش
          </button>


          <h2
            style={{
              color:"#D4AF37",
              fontSize:"28px",
            }}
          >
            🍢 كاۋاپلار
          </h2>


          <div
            style={{
              display:"grid",
              gap:"20px",
            }}
          >

          {kawaps.map((item,index)=>(

            <div
              key={index}
              style={cardStyle}
            >

              <img
                src={item.image}
                alt={item.name}
                style={{
                  width:"100%",
                  height:"220px",
                  objectFit:"cover",
                  borderRadius:"20px 20px 0 0",
                }}
              />


              <h3>
                {item.name}
              </h3>


              <p
                style={{
                  color:"#D4AF37",
                  fontSize:"22px",
                  fontWeight:"bold",
                }}
              >
                {item.price}
              </p>

            </div>

          ))}

          </div>

        </div>
      )}

    </main>
  );
}



const buttonStyle={
  width:"100%",
  padding:"18px",
  margin:"12px 0",
  borderRadius:"25px",
  border:"2px solid #FFE8A3",
  background:"#D4AF37",
  color:"#07151F",
  fontSize:"21px",
  fontWeight:"bold",
};



const backStyle={
  ...buttonStyle,
  width:"auto",
  padding:"12px 30px",
};



const cardStyle={
  background:"rgba(0,0,0,0.45)",
  borderRadius:"20px",
  overflow:"hidden",
  border:"2px solid rgba(212,175,55,0.5)",
  boxShadow:"0 5px 20px rgba(0,0,0,0.4)",
};
