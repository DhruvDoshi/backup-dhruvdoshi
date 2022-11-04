(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{173:function(t,e,r){"use strict";r.r(e);var n=r(0),i=(r(1),r(74)),s=r.n(i),a=function(t){var e=t.data;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h3",{children:[Object(n.jsx)("a",{href:e.link,children:e.title}),Object(n.jsx)("br",{})]}),Object(n.jsxs)("h4",{style:{color:"#aaaaaa"},children:[" ",Object(n.jsx)("a",{href:e.journallink,children:e.journal}),Object(n.jsx)("br",{})," Author: ",e.author," ",Object(n.jsx)("br",{}),Object(n.jsx)("a",{href:e.journaleditorlink,children:e.journaleditor}),Object(n.jsx)("br",{})," ISBN: ",e.ISBN," ",Object(n.jsx)("br",{}),Object(n.jsx)("time",{children:s()(e.date).format("MMMM, YY")})," "]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h6",{children:" Abstract "}),Object(n.jsx)("p",{style:{lineHeight:1.6,textAlign:"justify"},children:e.desc}),Object(n.jsx)("h6",{children:" Keywords "}),Object(n.jsx)("p",{children:e.keywords}),Object(n.jsxs)("h6",{style:{color:"purple"},children:[" ",Object(n.jsx)("a",{href:e.paperlink,children:"Find Paper Here"})," "]})]})]})},o=[{title:"Decentralized Cloud Storage Based on Blockchian Networking",subtitle:"Blockchian based cloud",link:"https://link.springer.com/chapter/10.1007/978-3-030-49795-8_54",journal:"International Conference on Mobile Computing and Sustainable Informatics",journallink:"https://www.springer.com/gp/book/9783030497941",journaleditor:"Springer Nature - ICMCSI",journaleditorlink:"https://www.springer.com/gp",author:"Dhruv Doshi, Prof. Satvik Khara",ISBN:"978-3-030-49795-8",date:"2020-01-23",keywords:"Cloud storage, attribute-based access control, ciphertext-policy, attribute-based encryption, ethereum based contracts.",paperlink:"https://drive.google.com/file/d/1Y9sXXqapKja2B96myq6XGerZkS_LB_5W/view?usp=sharing",desc:"A prototype of a multi-user system for access control to data sets stored in a malicious cloud environment is presented. Cloud storage like any other environment needs the ability to securely shared information. The approach here is to provide access control over the data stored in the cloud without provider participation. The main tool of the access control mechanism is a ciphertext-policy attribute-based encryption scheme with dynamic attributes and advanced encryption algorithms. Using a based decentralized ledger, our system provides an immutable log of all meaningful security events, such as key generation, access policy assignments, changes or revocations, and access requests. We propose a set of protocols to ensure the privacy of operations requiring secret or private keys. Only hash codes are transferred through the ledger.The prototype of the system is implemented using smart contracts and tested on the platform."}],u=r(22);e.default=function(){return Object(n.jsx)(u.a,{title:"Research",description:"Research work by Dhruv Doshi",children:Object(n.jsx)("article",{className:"post",id:"stats",children:o.map((function(t){return Object(n.jsx)(a,{data:t},t.title)}))})})}},74:function(t,e,r){t.exports=function(){"use strict";var t="millisecond",e="second",r="minute",n="hour",i="day",s="week",a="month",o="quarter",u="year",c="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},p={s:f,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,a),s=r-i<0,o=e.clone().add(n+(s?-1:1),a);return+(-(n+(r-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:u,w:s,d:i,D:c,h:n,m:r,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",m={};m[$]=l;var y=function(t){return t instanceof v},g=function(t,e,r){var n;if(!t)return $;if("string"==typeof t)m[t]&&(n=t),e&&(m[t]=e,n=t);else{var i=t.name;m[i]=t,n=i}return!r&&n&&($=n),n||!r&&$},b=function(t,e){if(y(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new v(r)},j=p;j.l=g,j.i=y,j.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var v=function(){function l(t){this.$L=g(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(h);if(n){var i=n[2]-1||0,s=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return j},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var r=b(t);return this.startOf(e)<=r&&r<=this.endOf(e)},f.isAfter=function(t,e){return b(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<b(t)},f.$g=function(t,e,r){return j.u(t)?this[e]:this.set(r,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,d=!!j.u(o)||o,l=j.p(t),f=function(t,e){var r=j.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return d?r:r.endOf(i)},p=function(t,e){return j.w(h.toDate()[t].apply(h.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},$=this.$W,m=this.$M,y=this.$D,g="set"+(this.$u?"UTC":"");switch(l){case u:return d?f(1,0):f(31,11);case a:return d?f(1,m):f(0,m+1);case s:var b=this.$locale().weekStart||0,v=($<b?$+7:$)-b;return f(d?y-v:y+(6-v),m);case i:case c:return p(g+"Hours",0);case n:return p(g+"Minutes",1);case r:return p(g+"Seconds",2);case e:return p(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,d=j.p(s),l="set"+(this.$u?"UTC":""),f=(h={},h[i]=l+"Date",h[c]=l+"Date",h[a]=l+"Month",h[u]=l+"FullYear",h[n]=l+"Hours",h[r]=l+"Minutes",h[e]=l+"Seconds",h[t]=l+"Milliseconds",h)[d],p=d===i?this.$D+(o-this.$W):o;if(d===a||d===u){var $=this.clone().set(c,1);$.$d[f](p),$.init(),this.$d=$.set(c,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[j.p(t)]()},f.add=function(t,o){var c,h=this;t=Number(t);var d=j.p(o),l=function(e){var r=b(h);return j.w(r.date(r.date()+Math.round(e*t)),h)};if(d===a)return this.set(a,this.$M+t);if(d===u)return this.set(u,this.$y+t);if(d===i)return l(1);if(d===s)return l(7);var f=(c={},c[r]=6e4,c[n]=36e5,c[e]=1e3,c)[d]||1,p=this.$d.getTime()+t*f;return j.w(p,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=j.z(this),i=this.$locale(),s=this.$H,a=this.$m,o=this.$M,u=i.weekdays,c=i.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},l=function(t){return j.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:j.s(o+1,2,"0"),MMM:h(i.monthsShort,o,c,3),MMMM:h(c,o),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,u,2),ddd:h(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:j.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:n};return r.replace(d,(function(t,e){return e||p[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,h){var d,l=j.p(c),f=b(t),p=6e4*(f.utcOffset()-this.utcOffset()),$=this-f,m=j.m(this,f);return m=(d={},d[u]=m/12,d[a]=m,d[o]=m/3,d[s]=($-p)/6048e5,d[i]=($-p)/864e5,d[n]=$/36e5,d[r]=$/6e4,d[e]=$/1e3,d)[l]||$,h?m:j.a(m)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=g(t,e,!0);return n&&(r.$L=n),r},f.clone=function(){return j.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),M=v.prototype;return b.prototype=M,[["$ms",t],["$s",e],["$m",r],["$H",n],["$W",i],["$M",a],["$y",u],["$D",c]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,v,b),t.$i=!0),b},b.locale=g,b.isDayjs=y,b.unix=function(t){return b(1e3*t)},b.en=m[$],b.Ls=m,b.p={},b}()}}]);
//# sourceMappingURL=7.bccf366a.chunk.js.map