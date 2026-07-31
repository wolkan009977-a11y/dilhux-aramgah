"use client";

import { useState } from "react";

export default function Menu() {

  const [category, setCategory] = useState(null);


  const kawaps = [
    {
      name: "قوي گۆشى كاۋاپ",
      price: "65 ₺",
      image: "/images/qoy-kawap.jpg",
    },
    {
      name: "بېلىق كاۋاپ",
      price: "40 ₺",
      image: "/images/balik-kawap.jpg",
    },
    {
      name: "توخۇ قانات كاۋاپ",
      price: "25 ₺",
      image: "/images/toyuq-qanat-kawap.jpg",
    },
    {
      name: "جىگەر كاۋاپ",
      price: "50 ₺",
      image: "/images/jiger-kawap.jpg",
    },
    {
      name: "بۆرەك كاۋاپ",
      price: "50 ₺",
      image: "/images/borek-kawap.jpg",
    },
    {
      name: "مەنجاڭ كاۋاپ",
      price: "10 ₺",
      image: "/images/menjang-kawap.jpg",
    },
  ];

const drinks = [
  {
    name: "موھىتو",
    price: "60 ₺",
    image: "/images/mohito.jpg",
  },
  {
    name: "دوغاپ",
    price: "30 ₺",
    image: "/images/doghap.jpg",
  },
  {
    name: "شاپتۇل چاي",
    price: "50 ₺",
    image: "/images/shaptul-chay.jpg",
  },
  {
    name: "كوكتېل",
    price: "60 ₺",
    image: "/images/kokteyl.jpg",
  },
];
  const bottleDrinks = [
  {
    name: "لىفىت ئاپ (كىچىك)",
    price: "25₺",
  },
  {
    name: "لىفىت ئاپ (چوڭ)",
    price: "30₺",
  },
  {
    name: "تاقە بىر لىتىر",
    price: "35₺",
  },
  {
    name: "مونىستىر",
    price: "75₺",
  },
  {
    name: "جوي",
    price: "25₺",
  },
  {
    name: "رانىي",
    price: "25₺",
  },
  {
    name: "كېنزا",
    price: "25₺",
  },
  {
    name: "مۇز قەھۋە",
    price: "35₺",
  },
  {
    name: "ئورىجىنال",
    price: "45₺",
  },
  {
    name: "سىلىس",
    price: "20₺",
  },
  {
    name: "باربىكان",
    price: "40₺",
  },
  {
    name: "طازج",
    price: "20₺",
  },
  {
    name: "سۈت",
    price: "55₺",
  },
  {
    name: "بۆلجۈرگەن تەملىك سۈت",
    price: "55₺",
  },
  {
    name: "بانان تەملىك سۈت",
    price: "55₺",
  },
  {
    name: "مىرىندا",
    price: "35₺",
  },
  {
    name: "تاقە ئەسلى",
    price: "30₺",
  },
  {
    name: "راۋا ئانا ئىچىملىكى",
    price: "20₺",
  },
  {
    name: "موكو كوكو",
    price: "30₺",
  },

  {
    name: "سېۋىن ئاپ",
    price: "20₺",
  },
];
  const spicyFoods = [
  {
    name: "تۇخۇم",
    price: "15₺",
  },
  {
    name: "ئۇزۇنچاق قىزا",
    price: "25₺",
  },
  {
    name: "ياپلاق قىزا",
    price: "25₺",
  },
  {
    name: "توخۇ ۋەنزىسى",
    price: "20₺",
  },
  {
    name: "موگو",
    price: "20₺",
  },
  {
    name: "ياڭيو",
    price: "10₺",
  },
  {
    name: "نان",
    price: "5₺",
  },
];
  return (

    <main
      style={{
        minHeight:"100vh",
        width:"100%",
        background:
        "linear-gradient(145deg,#06283D,#0B3A53,#07151F)",
        color:"white",
        padding:"25px 15px",
        boxSizing:"border-box",
        textAlign:"center",
      }}
    >

      <style>
        {`
        @keyframes fadeInUp {
          from {
            opacity:0;
            transform:translateY(20px);
          }
          to {
            opacity:1;
            transform:translateY(0);
          }
        }
        `}
      </style>


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

          <button
            style={buttonStyle}
            onClick={()=>setCategory("kawap")}
          >
            🍢 كاۋاپلار
          </button>


          <button
  style={buttonStyle}
  onClick={()=>setCategory("drink")}
>
  🥤 ئىچىملىكلەر
</button>


          <button
  style={buttonStyle}
  onClick={()=>setCategory("bottle")}
>
  🧃 قۇتۇلۇق ئىچىملىكلەر
</button>


          <button
style={buttonStyle}
onClick={()=>setCategory("spicy")}
>
  🌶️ ئاچچىقلار
</button>

        </div>

      )}



      {category==="kawap" && (

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
                  height:"230px",
                  objectFit:"cover",
                  borderRadius:"20px 20px 0 0",
                }}
              />


              <h3
                style={{
                  fontSize:"22px",
                  margin:"15px 0 5px",
                }}
              >
                {item.name}
              </h3>


              <p
                style={{
                  color:"#D4AF37",
                  fontSize:"23px",
                  fontWeight:"bold",
                  marginBottom:"15px",
                }}
              >
                {item.price}
              </p>


            </div>

          ))}


          </div>


        </div>

      )}

{category==="drink" && (

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
🥤 ئىچىملىكلەر
</h2>


<div
style={{
display:"grid",
gap:"20px",
}}
>

{drinks.map((item,index)=>(

<div
key={index}
style={cardStyle}
>

<img
src={item.image}
alt={item.name}
style={{
width:"100%",
height:"230px",
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
fontSize:"23px",
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
  

{category==="bottle" && (

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
🧃 قۇتۇلۇق ئىچىملىكلەر
</h2>


<div
style={{
display:"grid",
gap:"15px",
}}
>

{bottleDrinks.map((item,index)=>(

<div
key={index}
style={cardStyle}
>

<h3
style={{
fontSize:"22px",
margin:"20px",
}}
>
{item.name}
</h3>


<p
style={{
color:"#D4AF37",
fontSize:"23px",
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
 {category==="spicy" && (

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
🌶️ ئاچچىقلار
</h2>


<div
style={{
display:"grid",
gap:"15px",
}}
>

{spicyFoods.map((item,index)=>(

<div
key={index}
style={cardStyle}
>

<h3
style={{
fontSize:"22px",
margin:"20px",
}}
>
{item.name}
</h3>


<p
style={{
color:"#D4AF37",
fontSize:"23px",
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

const buttonStyle = {

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



const backStyle = {

  ...buttonStyle,
  width:"auto",
  padding:"12px 35px",

};



const cardStyle = {

  background:"rgba(0,0,0,0.45)",
  borderRadius:"20px",
  overflow:"hidden",
  border:"2px solid rgba(212,175,55,0.5)",
  boxShadow:
  "0 8px 30px rgba(212,175,55,0.25)",
  animation:"fadeInUp 0.6s ease",

};
