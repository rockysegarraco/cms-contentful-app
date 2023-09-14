// components/CustomHead.js

import React from "react";

const MNTNConversionPixel = () => {
  return (
    <>
      {/* MNTN Conversion Pixel */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
var x=null,p,q,m,
            o="34274",
            l="ORDER ID",
            i="TOTAL ORDER AMOUNT",
            c="",
            k="",
            g="",
            j="",
            u="",
            shadditional="";
            try{p=top.document.referer!==""?encodeURIComponent(top.document.referrer.substring(0,512)):""}catch(n){p=document.referrer!==null?document.referrer.toString().substring(0,512):""}try{q=window&&window.top&&document.location&&window.top.location===document.location?document.location:window&&window.top&&window.top.location&&""!==window.top.location?window.top.location:document.location}catch(b){q=document.location}try{m=parent.location.href!==""?encodeURIComponent(parent.location.href.toString().substring(0,512)):""}catch(z){try{m=q!==null?encodeURIComponent(q.toString().substring(0,512)):""}catch(h){m=""}}var A,y=document.createElement("script"),w=null,v=document.getElementsByTagName("script"),t=Number(v.length)-1,r=document.getElementsByTagName("script")[t];if(typeof A==="undefined"){A=Math.floor(Math.random()*100000000000000000)}w="dx.mountain.com/spx?conv=1&shaid="+o+"&tdr="+p+"&plh="+m+"&cb="+A+"&shoid="+l+"&shoamt="+i+"&shocur="+c+"&shopid="+k+"&shoq="+g+"&shoup="+j+"&shpil="+u+shadditional;y.type="text/javascript";y.src=("https:"===document.location.protocol?"https://":"http://")+w;r.parentNode.insertBefore(y,r)}());
          `,
        }}
      />
    </>
  );
};

export default MNTNConversionPixel;
