window.FANCY=(function(){
"use strict";
var SCRIPT_U={66:0x212C,69:0x2130,70:0x2131,72:0x210B,73:0x2110,76:0x2112,77:0x2133,82:0x211B};
var SCRIPT_L={101:0x212F,103:0x210A,111:0x2134};
var FRAK_U={67:0x212D,72:0x210C,73:0x2111,82:0x211C,90:0x2128};
var DS_U={67:0x2102,72:0x210D,78:0x2115,80:0x2119,81:0x211A,82:0x211D,90:0x2124};
function alpha(U,l,d,eU,eL){return function(ch){var c=ch.codePointAt(0),cp=null;
if(c>=65&&c<=90){cp=(eU&&eU[c])||(U+c-65);}
else if(c>=97&&c<=122){cp=(eL&&eL[c])||(l+c-97);}
else if(d&&c>=48&&c<=57){cp=d+c-48;}
return cp?String.fromCodePoint(cp):ch;};}
var SMALLCAPS={a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",s:"ꜱ",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ"};
function smallcaps(ch){var l=ch.toLowerCase();return SMALLCAPS[l]||ch;}
function fullwidth(ch){var c=ch.codePointAt(0);if(c===32)return "　";if(c>=33&&c<=126)return String.fromCodePoint(c+0xFEE0);return ch;}
function circled(ch){var c=ch.codePointAt(0);
if(c>=65&&c<=90)return String.fromCodePoint(0x24B6+c-65);
if(c>=97&&c<=122)return String.fromCodePoint(0x24D0+c-97);
if(c>=49&&c<=57)return String.fromCodePoint(0x2460+c-49);
if(c===48)return "⓪";
return ch;}
var FLIP={a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",k:"ʞ",l:"l",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z",A:"∀",B:"𐐒",C:"Ɔ",D:"ᗡ",E:"Ǝ",F:"Ⅎ",G:"⅁",H:"H",I:"I",J:"ſ",K:"⋊",L:"˥",M:"Ɯ",N:"N",O:"O",P:"Ԁ",Q:"Q",R:"ᴚ",S:"S",T:"⊥",U:"∩",V:"Λ",W:"M",X:"X",Y:"⅄",Z:"Z","0":"0","1":"Ɩ","2":"ᄅ","3":"Ɛ","4":"ㄣ","5":"ϛ","6":"9","7":"ㄥ","8":"8","9":"6",".":"˙",",":"'","?":"¿","!":"¡","[":"]","]":"[","(":")",")":"(","{":"}","}":"{","<":">",">":"<","_":"‾","&":"⅋"};
function flip(text){return Array.from(text).map(function(c){return FLIP[c]||c;}).reverse().join("");}
function combiner(cp){return function(text){return Array.from(text).map(function(c){return c===" "?c:c+String.fromCodePoint(cp);}).join("");};}
var Z_UP=[0x030D,0x030E,0x0304,0x0305,0x033F,0x0311,0x0306,0x0310,0x0352,0x0357,0x0351,0x0307,0x0308,0x030A,0x0342,0x0343,0x0344,0x034A,0x034B,0x034C,0x0303,0x0302,0x030C,0x0350];
var Z_MID=[0x0315,0x031B,0x0340,0x0341,0x0358,0x0321,0x0322,0x0327,0x0328,0x0334,0x0335,0x0336,0x034F,0x035C,0x035D,0x035E,0x035F,0x0360,0x0362,0x0338,0x0337,0x0361,0x0489];
var Z_DOWN=[0x0316,0x0317,0x0318,0x0319,0x031C,0x031D,0x031E,0x031F,0x0320,0x0324,0x0325,0x0326,0x0329,0x032A,0x032B,0x032C,0x032D,0x032E,0x032F,0x0330,0x0331,0x0332,0x0333,0x0339,0x033A,0x033B,0x033C,0x0345,0x0347,0x0348,0x0349,0x034D,0x034E,0x0353,0x0354,0x0355,0x0356,0x0359,0x035A,0x0323];
function pick(arr,n){var out="";for(var i=0;i<n;i++){out+=String.fromCodePoint(arr[Math.floor(Math.random()*arr.length)]);}return out;}
function zalgo(level){var n=level===3?8:level===2?4:2;return function(text){return Array.from(text).map(function(c){if(c===" ")return c;return c+pick(Z_UP,n)+pick(Z_MID,level===3?2:1)+pick(Z_DOWN,n);}).join("");};}
function upMap(base){return function(ch){var c=ch.codePointAt(0);if(c>=65&&c<=90)return String.fromCodePoint(base+c-65);if(c>=97&&c<=122)return String.fromCodePoint(base+c-97);return ch;};}
var squaredFn=upMap(0x1F130),negsquaredFn=upMap(0x1F170),negcircledFn=upMap(0x1F150);
function parenFn(ch){var c=ch.codePointAt(0),l=-1;
if(c>=97&&c<=122)l=c-97;else if(c>=65&&c<=90)l=c-65;
if(l>=0)return String.fromCodePoint(0x249C+l);
if(c>=49&&c<=57)return String.fromCodePoint(0x2474+c-49);
return ch;}
var SUPER={a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ⁱ",j:"ʲ",k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",r:"ʳ",s:"ˢ",t:"ᵗ",u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ","0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","+":"⁺","-":"⁻","(":"⁽",")":"⁾"};
var SUB={a:"ₐ",e:"ₑ",h:"ₕ",i:"ᵢ",j:"ⱼ",k:"ₖ",l:"ₗ",m:"ₘ",n:"ₙ",o:"ₒ",p:"ₚ",r:"ᵣ",s:"ₛ",t:"ₜ",u:"ᵤ",v:"ᵥ",x:"ₓ","0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉","+":"₊","-":"₋","(":"₍",")":"₎"};
function superFn(ch){return SUPER[ch]||ch;}
function subFn(ch){return SUB[ch]||ch;}
var STYLES={
bold:{name:"Bold",map:alpha(0x1D400,0x1D41A,0x1D7CE)},
italic:{name:"Italic",map:alpha(0x1D434,0x1D44E,null,null,{104:0x210E})},
bolditalic:{name:"Bold Italic",map:alpha(0x1D468,0x1D482)},
script:{name:"Cursive",map:alpha(0x1D49C,0x1D4B6,null,SCRIPT_U,SCRIPT_L)},
boldscript:{name:"Bold Cursive",map:alpha(0x1D4D0,0x1D4EA)},
fraktur:{name:"Gothic",map:alpha(0x1D504,0x1D51E,null,FRAK_U)},
boldfraktur:{name:"Bold Gothic",map:alpha(0x1D56C,0x1D586)},
doublestruck:{name:"Double Struck",map:alpha(0x1D538,0x1D552,0x1D7D8,DS_U)},
sans:{name:"Sans",map:alpha(0x1D5A0,0x1D5BA,0x1D7E2)},
sansbold:{name:"Sans Bold",map:alpha(0x1D5D4,0x1D5EE,0x1D7EC)},
sansitalic:{name:"Sans Italic",map:alpha(0x1D608,0x1D622)},
sansbolditalic:{name:"Sans Bold Italic",map:alpha(0x1D63C,0x1D656)},
monospace:{name:"Monospace",map:alpha(0x1D670,0x1D68A,0x1D7F6)},
fullwidth:{name:"Wide (Vaporwave)",map:fullwidth},
circled:{name:"Circled",map:circled},
smallcaps:{name:"Small Caps",map:smallcaps},
flip:{name:"Upside Down",fn:flip},
strike:{name:"Strikethrough",fn:combiner(0x0336)},
underline:{name:"Underline",fn:combiner(0x0332)},
slash:{name:"Slash",fn:combiner(0x0337)},
tilde:{name:"Tilde Strike",fn:combiner(0x0334)},
squared:{name:"Squared",map:squaredFn},
negsquared:{name:"Negative Squared",map:negsquaredFn},
negcircled:{name:"Negative Circled",map:negcircledFn},
paren:{name:"Parenthesized",map:parenFn},
superscript:{name:"Superscript",map:superFn},
subscript:{name:"Subscript",map:subFn},
zalgo1:{name:"Glitch (Light)",fn:zalgo(1)},
zalgo2:{name:"Glitch (Medium)",fn:zalgo(2)},
zalgo3:{name:"Glitch (Extreme)",fn:zalgo(3)}
};
function run(text,style){if(style.fn)return style.fn(text);return Array.from(text).map(style.map).join("");}
function copyText(t,btn){function ok(){if(btn){var o=btn.textContent;btn.textContent="Copied!";btn.classList.add("done");setTimeout(function(){btn.textContent=o;btn.classList.remove("done");},1200);}}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok).catch(function(){legacy();});}else legacy();
function legacy(){var ta=document.createElement("textarea");ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand("copy");}catch(e){}document.body.removeChild(ta);ok();}}
function init(cfg){
var input=document.getElementById("in"),out=document.getElementById("out");
var ids=cfg.styles,sample=cfg.sample||"Fancy Fonts";
input.value=sample;
var rows=[];
ids.forEach(function(id){var st=STYLES[id];if(!st)return;
var row=document.createElement("div");row.className="row";
var nm=document.createElement("div");nm.className="style-name";nm.textContent=st.name;
var pv=document.createElement("div");pv.className="preview";
var btn=document.createElement("button");btn.className="copy-btn";btn.type="button";btn.textContent="Copy";
btn.addEventListener("click",function(){copyText(pv.textContent,btn);});
row.appendChild(nm);row.appendChild(pv);row.appendChild(btn);out.appendChild(row);
rows.push({st:st,pv:pv});});
function render(){var t=input.value||sample;rows.forEach(function(r){try{r.pv.textContent=run(t,r.st);}catch(e){r.pv.textContent=t;}});}
input.addEventListener("input",render);render();
}
return {init:init};
})();
