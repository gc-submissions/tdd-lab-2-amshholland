(()=>{var e={14:e=>{e.exports=class{constructor(e){this.amountDue=e,this.cashTendered=0}insertCoin(e){"quarter"===e&&(this.cashTendered+=25),"dime"===e&&(this.cashTendered+=10),"nickel"===e&&(this.cashTendered+=5),"penny"===e&&(this.cashTendered+=1)}isPaymentSufficient(){return this.amountDue<=this.cashTendered}giveChange(){let e=this.cashTendered-this.amountDue;console.log(e);let n={quarters:0,dimes:0,nickels:0,pennies:0};for(;e>0;)e>=25?(e-=25,n.quarters++):e>=10?(e-=10,n.dimes++):e>=5?(e-=5,n.nickels++):(e-=1,n.pennies++);return console.log(n),n}}},11:e=>{e.exports=function e(n){return n<0?"-"+e(-n):"$"+(n/100).toFixed(2)}}},n={};function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{}};return e[i](s,s.exports,t),s.exports}(()=>{const e=t(14),n=t(11);let i=new e(0);!function(){const t=document.getElementById("vendingForm"),s=document.getElementById("amountDue"),d=document.getElementById("coins"),r=document.getElementById("cashTendered"),c=document.getElementById("paymentSufficient"),o=document.getElementById("getChangeButton"),u=document.getElementById("change"),a=u.querySelectorAll(".change-count"),m=document.getElementById("resetButton");function l(){r.innerText=n(i.cashTendered);const e=0!==i.amountDue&&i.isPaymentSufficient();c.hidden=!e,o.disabled=!e,u.hidden=!0}s.addEventListener("change",(()=>{const n=Math.round(100*s.value);i=new e(n),l()})),d.addEventListener("click",(e=>{let n=e.target.getAttribute("data-type");n&&(i.insertCoin(n),l())})),t.addEventListener("submit",(e=>{if(e.preventDefault(),i.isPaymentSufficient){const e=i.giveChange();a[0].innerText=e.quarters,a[1].innerText=e.dimes,a[2].innerText=e.nickels,a[3].innerText=e.pennies,u.hidden=!1}})),m.addEventListener("click",(()=>{s.value="",i=new e(0),l()})),l()}()})()})();