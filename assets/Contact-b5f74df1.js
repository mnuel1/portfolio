import{r as c,j as e}from"./index-0d9b9ae2.js";import{r as o}from"./index-93ef7b77.js";/* empty css                  */const l=({labelText:t,inputType:a})=>{const[r,s]=c.useState(!1),n=()=>{s(!0)},i=()=>{s(!1)};return e.jsxs("div",{className:"relative w-full",children:[e.jsx("input",{type:a,className:"w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black",onFocus:n,onBlur:i}),e.jsx("label",{className:`absolute transition-all left-2 ${r?"top-1 text-xs text-blue-500 bg-transparent":"top-2/4 -translate-y-2/4 text-gray-500 bg-white"}`,children:t})]})};function m(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h1",{className:"align-left w-full text-5xl mb-12",children:" Contact Me "}),e.jsxs("div",{className:"flex flex-col gap-6 md:flex-row md:justify-between md:gap-12",children:[e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(l,{labelText:"Name",inputType:"text"})}),e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(l,{labelText:"Email Address",inputType:"email"})})]}),e.jsx("div",{className:"w-full mt-4",children:e.jsx(l,{labelText:"Message",inputType:"text"})}),e.jsx("div",{children:e.jsx(o.Button,{variant:"filled",color:"green",className:"rounded-full w-full",children:"Submit"})})]})})}export{m as default};