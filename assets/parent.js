const u=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}};u();function s(){return window.innerWidth<=800&&window.innerHeight<=930}const m={desktop:{"account-setup":{height:"334px",width:"375px"},timeline:{height:"595px",width:"375px"}},mobile:{"account-setup":{height:"100vh",width:"100vw"},timeline:{height:"100vh",width:"100vw"}}};function c(){const e=document.querySelector(".chatterbox-iframe"),t=document.querySelector(".start");e.style.display!=="none"?(e.style.display="none",document.querySelector(".start-chat-btn").classList.remove("start-background-minimized"),e.contentWindow.postMessage({action:"minimize"},"*"),s()&&(t.style.display="block")):(e.contentWindow.postMessage({action:"maximize"},"*"),e.style.display="block",document.querySelector(".start-chat-btn").classList.add("start-background-minimized"),s()&&(t.style.display="none"))}function f(e){const{view:t}=e,i=s()?"mobile":"desktop",a=m[i][t];if(!a)return;const{height:o,width:n}=a,r=document.querySelector(".chatterbox-iframe");o&&(r.style.height=o),n&&(r.style.width=n)}function h(){const e=document.querySelector(".chatterbox-iframe");e==null||e.remove(),document.querySelector(".start").remove()}const d=document.querySelector("#chatterbox-script").src,p=d.replace("assets/parent.js","");function b(){w();const e=document.createElement("div");e.className="start";const t=g();e.appendChild(t),document.body.appendChild(e),window.localStorage.getItem("chatterbox-should-load-in-background")&&(l(!0),c())}function g(){const e=document.createElement("button");return e.className="start-chat-btn",e.setAttribute("aria-label","Start chat"),e.onclick=()=>window.isIframeLoaded?c():l(),e.appendChild(x()),e}function x(){const e=document.createElement("span");return e.className="notification-badge hidden",e}function w(){const e=document.createElement("link");e.rel="stylesheet",e.href=new URL("parent.3389c99e.css",d).href,document.head.appendChild(e)}function l(e=!1){const t=document.createElement("iframe"),i=window.CHATTERBOX_CONFIG_LOCATION;if(!i)throw new Error("CHATTERBOX_CONFIG_LOCATION is not set");t.src=`${p}../chatterbox.html?config=${i}${e?"&minimized=true":""}`,t.className="chatterbox-iframe",document.body.appendChild(t),window.isIframeLoaded=!0,document.querySelector(".start-chat-btn").classList.add("start-background-minimized"),s()&&(document.querySelector(".start").style.display="none")}window.isIframeLoaded=!1;window.__chatterbox=()=>{var e;return(e=document.querySelector(".chatterbox-iframe"))==null?void 0:e.contentWindow};function y(e){const t=document.querySelector(".notification-badge");e===0?t.classList.add("hidden"):(t.innerText=e,t.classList.remove("hidden"))}window.addEventListener("message",e=>{const{action:t}=e.data;switch(t){case"resize-iframe":e.data.view==="timeline"&&window.localStorage.setItem("chatterbox-should-load-in-background","true"),f(e.data);break;case"minimize":c();break;case"unread-message":y(e.data.count);break;case"error":h();break}});b();
