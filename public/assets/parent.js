const u=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};u();function s(){return window.innerWidth<=800&&window.innerHeight<=930}const m={desktop:{"account-setup":{height:"334px",width:"375px"},timeline:{height:"60vh",width:"375px"}},mobile:{"account-setup":{height:"100vh",width:"100vw"},timeline:{height:"100vh",width:"100vw"}}};function c(t){const e=document.querySelector(".chatterbox-iframe"),n=document.querySelector(".start");if(t&&e.style.display==="block"){e.contentWindow.postMessage({action:"minimize"},"*"),e.contentWindow.postMessage({action:"maximize"},"*");return}e.style.display&&e.style.display!=="none"?(e.style.display="none",e.contentWindow.postMessage({action:"minimize"},"*"),s()&&(n.style.display="block")):(e.contentWindow.postMessage({action:"maximize"},"*"),e.style.display="block",s()&&(n.style.display="none"))}function h(t){const{view:e}=t,n=s()?"mobile":"desktop",r=m[n][e];if(!r)return;const{height:i,width:o}=r,a=document.querySelector(".chatterbox-iframe");i&&(a.style.height=i),o&&(a.style.width=o)}function p(){const t=document.querySelector(".chatterbox-iframe");t==null||t.remove(),document.querySelector(".start").remove()}const d=document.querySelector("#chatterbox-script").src,l=new URL(d).origin;async function w(){var r;x();const t=document.createElement("div");t.className="start";const e=window.CHATTERBOX_CONFIG_LOCATION;let n=[];try{const o=await(await fetch(new URL(e,l))).json();if(n=o==null?void 0:o.invite_users,!(o!=null&&o.button_class_name))throw new Error("button_class_name is not defined in the config");n.length===0&&n.push(null),n.forEach(a=>{g(o==null?void 0:o.button_class_name,a)}),(r=window.parent)==null||r.postMessage({action:"chatterbox-loaded"},"*")}catch(i){console.error("Can not load config",i)}document.body.appendChild(t),window.localStorage.getItem("chatterbox-should-load-in-background")&&f(!0)}function g(t,e){const n=document.getElementById(`${t}-${e}`);if(!n)return null;n.onclick=()=>{const r=!!window.CURRENT_USERNAME&&window.CURRENT_USERNAME!==e;window.CURRENT_USERNAME=e,window.isIframeLoaded?c(r):f()},n.appendChild(b(e))}function b(t){const e=document.createElement("span");return e.className="notification-badge hidden",e.id=`notification-badge-${t}`,e}function x(){const t=document.createElement("link");t.rel="stylesheet",t.href=new URL("parent.e652a97c.css",d).href,document.head.appendChild(t)}function f(t=!1){const e=document.createElement("iframe"),n=window.CHATTERBOX_CONFIG_LOCATION;if(!n)throw new Error("CHATTERBOX_CONFIG_LOCATION is not set");e.src=new URL(`../chatterbox.html?config=${n}${t?"&minimized=true":""}`,l).href,e.className="chatterbox-iframe",document.body.appendChild(e),window.isIframeLoaded=!0,s()&&(document.querySelector(".start").style.display="none")}window.isIframeLoaded=!1;window.__chatterbox=()=>{var t;return(t=document.querySelector(".chatterbox-iframe"))==null?void 0:t.contentWindow};function y({userId:t,count:e}){const n=document.getElementById(`notification-badge-${t}`);!n||(e===0?n.classList.add("hidden"):(n.innerText=`${e}`,n.classList.remove("hidden")))}window.addEventListener("message",t=>{console.log(" chilren event.data",t.data);const{action:e}=t.data;switch(e){case"init-chatterbox":w();break;case"resize-iframe":t.data.view==="timeline"&&window.localStorage.setItem("chatterbox-should-load-in-background","true"),h(t.data);break;case"minimize":c(!1);break;case"unread-message":y(t.data.payload);break;case"error":p();break}});
