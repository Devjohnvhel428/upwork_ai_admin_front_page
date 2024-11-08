import{r as h,_ as I,R as y,b as F,c as w,P as g,q as U,k as S,j as e,B as m}from"./index-K7BRA8gO.js";import{e as A,s as E}from"./data.service-DvCPfAEo.js";import{C as P,a as B}from"./CRow-DGa8L2ab.js";import{C as W,a as V}from"./CCardBody-Bb7oBdg0.js";import{C as G}from"./CCardHeader-D985vdUT.js";import{C as H}from"./CForm-5zeddkXq.js";import{C as l}from"./CInputGroup-Cwbw8dOS.js";import{a as q,b as t,C as d,c as n}from"./CFormInput-DV9HJT9z.js";import{C as N}from"./CFormSelect-BB8CZiBd.js";import{a as k}from"./index.esm-BQ9lYq6b.js";import"./auth.service-B2nlOctG.js";var p=h.forwardRef(function(r,u){var i=r.children,s=r.className,j=r.feedback,c=r.feedbackInvalid,x=r.feedbackValid,b=r.floatingClassName,a=r.floatingLabel,o=r.id,f=r.invalid,L=r.label,R=r.plainText,D=r.text,T=r.tooltipFeedback,v=r.valid,C=I(r,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","plainText","text","tooltipFeedback","valid"]);return y.createElement(q,{describedby:C["aria-describedby"],feedback:j,feedbackInvalid:c,feedbackValid:x,floatingClassName:b,floatingLabel:a,id:o,invalid:f,label:L,text:D,tooltipFeedback:T,valid:v},y.createElement("textarea",F({className:w(R?"form-control-plaintext":"form-control",{"is-invalid":f,"is-valid":v},s),id:o},C,{ref:u}),i))});p.propTypes=F({className:g.string,id:g.string,plainText:g.bool},q.propTypes);p.displayName="CFormTextarea";const ee=()=>{const{id:r}=U(),u=S(),[i,s]=h.useState({_id:"",name:"",description:"",shortDescription:"",category:"",link:"",imgUrl:"",usecase:"",firstName:"",email:"",price:"",isEmployee:!1,registrationLink:""}),[j,c]=h.useState(!1),x=async a=>{try{c(!0);const o=await A(a);o.msg==="no-request"?(m.warning("There is no information!"),c(!1)):s({...o.request})}catch(o){m.error(o.response.data)}};h.useEffect(()=>{r&&x(r)},[r]);const b=async()=>{try{c(!0);const a=await E(i);a.msg==="no-section"?(m.warning("There is no information!"),c(!1)):a.msg==="create"?(m.success("New Request was created!"),u("/tools")):a.msg==="update"&&(m.success("The Request information was updated!"),u("/tools"))}catch(a){m.error(a.response.data)}};return e.jsx(P,{children:e.jsx(B,{xs:12,children:e.jsxs(W,{className:"mb-4",children:[e.jsx(G,{children:e.jsx("strong",{children:"Add New AI Tool"})}),e.jsxs(V,{children:[e.jsx("p",{className:"text-body-secondary small",children:"You can add new AI Tool manually."}),e.jsxs(H,{onSubmit:b,children:[e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsx(d,{placeholder:"Name",id:"name",value:i.name,required:!0,onChange:a=>{s({...i,name:a.target.value})},"aria-label":"Name","aria-describedby":"basic-addon1"}),e.jsx(n,{htmlFor:"name",children:"Name"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsx(p,{"aria-label":"Description",id:"description",value:i.description,required:!0,onChange:a=>{s({...i,description:a.target.value})},placeholder:"Description"}),e.jsx(n,{htmlFor:"description",children:"Description"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsx(p,{"aria-label":"Shot Description",id:"shortDescription",value:i.shortDescription,required:!0,onChange:a=>{s({...i,shortDescription:a.target.value})},placeholder:"Description"}),e.jsx(n,{htmlFor:"shortDescription",children:"Short Description"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(N,{id:"category",value:i.category,required:!0,onChange:a=>{s({...i,category:a.target.value})},"aria-label":"Default select example",children:[e.jsx("option",{children:"Select a Category"}),e.jsx("option",{value:"language",children:"Language"}),e.jsx("option",{value:"image",children:"Image Generation"}),e.jsx("option",{value:"writing",children:"Writing"}),e.jsx("option",{value:"audio",children:"Audio"}),e.jsx("option",{value:"video",children:"Video"}),e.jsx("option",{value:"data",children:"Data Analysis"}),e.jsx("option",{value:"productivity",children:"Productivity"}),e.jsx("option",{value:"coding",children:"Coding"}),e.jsx("option",{value:"other",children:"Other"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsx(d,{placeholder:"Website Link","aria-label":"Website Link",id:"link",type:"url",value:i.link,required:!0,onChange:a=>{s({...i,link:a.target.value})},"aria-describedby":"basic-addon1"}),e.jsx(n,{htmlFor:"link",children:"Website Link"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsx(d,{placeholder:"Banner Image URL",id:"imgUrl",value:i.imgUrl,type:"url",required:!0,onChange:a=>{s({...i,imgUrl:a.target.value})},"aria-label":"Banner Image URL","aria-describedby":"basic-addon1"}),e.jsx(n,{htmlFor:"imgUrl",children:"Banner Image URL"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsx(d,{placeholder:"Usecase",id:"usecase",value:i.usecase,required:!0,onChange:a=>{s({...i,usecase:a.target.value})},"aria-label":"Usecase","aria-describedby":"basic-addon1"}),e.jsx(n,{htmlFor:"usecase",children:"Usecase"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsx(d,{placeholder:"First Name",id:"firstName",value:i.firstName,required:!0,onChange:a=>{s({...i,firstName:a.target.value})},"aria-label":"First Name","aria-describedby":"basic-addon1"}),e.jsx(n,{htmlFor:"firstName",children:"First Name"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsx(d,{placeholder:"Email",id:"email",type:"email",value:i.email,required:!0,onChange:a=>{s({...i,email:a.target.value})},"aria-label":"Email","aria-describedby":"basic-addon1"}),e.jsx(n,{htmlFor:"email",children:"Email"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsxs(N,{id:"price",value:i.price,required:!0,onChange:a=>{s({...i,price:a.target.value})},"aria-label":"Default select example",children:[e.jsx("option",{children:"Select Price"}),e.jsx("option",{value:"Free",children:"Free"}),e.jsx("option",{value:"Freemium",children:"Freemium"}),e.jsx("option",{value:"Paid",children:"Paid"})]}),e.jsx(n,{htmlFor:"price",children:"Price"})]})}),e.jsx(l,{className:"mb-3",children:e.jsxs(t,{children:[e.jsx(d,{placeholder:"Affiliate Registration Link",id:"registrationLink",type:"url",value:i.registrationLink,required:!0,onChange:a=>{s({...i,registrationLink:a.target.value})},"aria-label":"Affiliate Registration Link","aria-describedby":"basic-addon1"}),e.jsx(n,{htmlFor:"registrationLink",children:"Affiliate Registration Link"})]})}),e.jsxs("div",{className:"d-flex justify-content-end mt-4",children:[e.jsx(k,{color:"primary",type:"submit",style:{fontWeight:"bold",borderRadius:"5px"},children:r?"Update":"Add"}),e.jsx(k,{color:"secondary",className:"me-2 mx-2",style:{fontWeight:"bold",borderRadius:"5px"},onClick:()=>{u("/tools")},children:"Cancel"})]})]})]})]})})})};export{ee as default};
