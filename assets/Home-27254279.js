import{r as s,j as e}from"./index-0d9b9ae2.js";import{r}from"./index-93ef7b77.js";/* empty css                  */const n=(t=1e3)=>{const[a,c]=s.useState(!1);return s.useEffect(()=>{const l=setTimeout(()=>{c(!0)},t);return()=>clearTimeout(l)},[t]),a},o=()=>{const t=n(200);return e.jsx("section",{id:"home",className:"h-screen flex items-center justify-center",children:e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsx("div",{className:`flex items-center justify-center p-5 ${t?"animate-enter":""}`,children:t?e.jsxs("div",{className:"flex flex-col justify-center items-center gap-4",children:[e.jsx("h1",{className:"text-7xl lg:text-9xl text-center text-white",children:"MANUEL MARIN"}),e.jsx(r.Typography,{variant:"small",className:"mb-4 text-center font-normal text-blue-gray-900 md:mb-0 text-white",children:"Your nice developer"})]}):e.jsxs("div",{className:"flex flex-col justify-center items-center gap-4",children:[e.jsx("div",{className:"rounded-3xl bg-gray-200",children:e.jsx("h1",{className:"text-7xl lg:text-9xl text-center text-gray-200",children:"MANUEL MARIN"})}),e.jsx("div",{className:"rounded-3xl bg-gray-200",children:e.jsx(r.Typography,{variant:"small",className:"mb-4 text-center font-normal text-blue-gray-900 md:mb-0 text-gray-200",children:"Your nice developer"})})]})})})})};export{o as default};