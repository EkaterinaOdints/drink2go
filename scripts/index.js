var L=()=>{let e=document.querySelector(".js-main-header-navigation"),t=e.querySelector(".js-toggle-button"),o=e.querySelector(".js-main-navigation-menu-list"),i=t.querySelector(".js-main-navigation-toggle-text");t.addEventListener("click",()=>{o.classList.toggle("menu-list--oppened"),t.classList.toggle("main-navigation__toggle--oppened"),t.classList.contains("main-navigation__toggle--oppened")?i.innerText="\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E":i.innerText="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"})},M=()=>{let e=document.querySelector(".js-filter-price"),t=e.querySelector(".js-filter-price-slider"),o=e.querySelector(".js-filter-price-range-number-from"),i=e.querySelector(".js-filter-price-range-number-to"),d=[o,i],s=[],p={range:{min:0,max:1e3},start:[0,900],step:10,connect:!0};noUiSlider.create(t,{...p}),t.noUiSlider.on("update",()=>{s=t.noUiSlider.get(),o.value=parseFloat(s[0]),i.value=parseFloat(s[1])}),d.forEach((r,n)=>{let c=r,a=n;c.addEventListener("change",()=>{s[a]=c.value,t.noUiSlider.set(s)})})},B=()=>{let e=document.querySelector(".js-slider"),t=e.querySelector(".js-slider-button-prev"),o=e.querySelector(".js-slider-button-next"),i=e.querySelector(".js-slider-container"),d=e.querySelectorAll(".js-slider-item-wrapper"),s=e.querySelector(".js-slider-radio-wrap"),p=e.querySelector("#slider-radio").content,r,n=0,c=0,a,m;(()=>{for(let l=0;l<=d.length-1;l++){let b=p.cloneNode(!0);s.append(b)}})();let u=e.querySelectorAll(".js-slider-radio-input");u[0].checked=!0,n===c&&(t.disabled=!0);let h=()=>{m=n/r,u[m].checked=!0},S=()=>{r=i.offsetWidth},f=()=>{a=r*(d.length-1)},y=()=>{n===a&&(o.disabled=!0)},v=()=>{n===c&&(t.disabled=!0)},g=()=>{i.style.left=`-${n}px`,t.disabled=!1,o.disabled=!1,h()},q=()=>{S(),f(),n<a&&(n+=r,g(),y())},x=()=>{S(),n!==c&&(n-=r,g(),v())},j=l=>{let P=Array.from(u).indexOf(l.target);S(),n=P*r,g(),f(),v(),y()};o.addEventListener("click",q),t.addEventListener("click",x),u.forEach(l=>{l.addEventListener("change",j)})};L();M();B();
