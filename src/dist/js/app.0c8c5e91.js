(function(e){function t(t){for(var s,a,r=t[0],o=t[1],l=t[2],d=0,b=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&b.push(i[a][0]),i[a]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(s=!1)}s&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={app:0},c=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/nearstmas/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},1271:function(e,t,n){"use strict";n("b5b0")},"1f45":function(e,t,n){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var s=n("5530"),i=n("1da1"),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("7a23")),a=Object(c["i"])("div",{class:"glass-ball rotate"},null,-1),r=Object(c["i"])("div",{class:"top-light"},null,-1),o={class:"page-content"},l={class:"fullpage fullpage-wrapper"},u={id:"home",class:"section fp-section fp-table active fp-completely"},d={class:"fp-tableCell"},b=Object(c["i"])("h1",{class:"snow-text"},"NEAR'stmas Coming Soon",-1);function g(e,t,n,s,i,g){var f=Object(c["x"])("SignIn"),h=Object(c["x"])("NftList");return Object(c["s"])(),Object(c["h"])(c["a"],null,[a,r,Object(c["i"])("div",o,[Object(c["i"])("div",l,[Object(c["i"])("div",u,[Object(c["i"])("div",d,[b,g.user?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["f"])(f,{key:0})),g.user?(Object(c["s"])(),Object(c["f"])(h,{key:1})):Object(c["g"])("",!0)])])])])],64)}var f=Object(c["i"])("h2",null,"Ho ho ho",-1),h=Object(c["i"])("h3",null,[Object(c["i"])("br"),Object(c["j"])("SignIn to talk with Santa Claus! ")],-1);function j(e,t,n,s,i,a){return Object(c["s"])(),Object(c["h"])("div",null,[f,h,Object(c["i"])("button",{onClick:t[0]||(t[0]=function(e){return a.signIn()}),class:"button"},"Sign In")])}var O={name:"SignIn",methods:{signIn:function(){window.wallet.requestSignIn(window.nearConfig.contractName,"NEAR Galaxy President")}}},p=(n("ce36"),n("6b0d")),y=n.n(p);const m=y()(O,[["render",j]]);var w=m,v={class:"main-window"},k=Object(c["i"])("hr",null,null,-1),M=["disabled"],x=["disabled"],S=["disabled"],C={key:0,class:"block"},G=Object(c["i"])("p",null,"You can send so many messages as you wish:",-1),L={class:"relative"},R={class:"vip"},P=Object(c["j"])(" VIP Letter (0.1 NEAR) "),T={key:0,src:"/img/christmas-loading.gif",alt:"",class:"message-loader",width:"200"},U=Object(c["i"])("hr",null,null,-1),_=Object(c["i"])("h5",null,"Your Messages:",-1),I={key:1,class:"list-messages"},N={key:0},A={class:"time"},E={key:1},H=Object(c["i"])("i",null,"*You don't send messages to Santa. Don't be shy, just write something!",-1),V=[H],D={key:2},Y=Object(c["i"])("img",{src:"/img/christmas-loading.gif",alt:"",class:"messages-list-loader",width:"200"},null,-1),B=[Y],W={key:1,class:"block"},z=Object(c["i"])("p",null,"You can select only one gift. Also you can change your gift and see gifts history:",-1),K={class:"gift-list"},q=["onClick"],F=["src"],J=Object(c["i"])("hr",null,null,-1),X=Object(c["i"])("h3",null,"Gifts History:",-1),Q={key:0},Z=["src"],$={key:0},ee={key:1},te=Object(c["i"])("img",{src:"/img/christmas-loading.gif",alt:"",class:"messages-list-loader",width:"200"},null,-1),ne=[te],se={key:2,class:"block"},ie=["disabled"],ce=Object(c["i"])("hr",null,null,-1),ae=Object(c["i"])("h4",null,"Random Santa stories for you:",-1),re={key:0,src:"/img/christmas-loading.gif",alt:"",class:"messages-list-loader",width:"200"};function oe(e,t,n,s,i,a){return Object(c["s"])(),Object(c["h"])(c["a"],null,[Object(c["i"])("div",v,[Object(c["i"])("h3",null,"Hello my little "+Object(c["y"])(a.user.accountId),1),k,Object(c["i"])("button",{class:"inner",onClick:t[0]||(t[0]=function(e){return i.selected=1}),disabled:1===i.selected},"1. Write a letter to Santa Claus",8,M),Object(c["i"])("button",{class:"inner",onClick:t[1]||(t[1]=function(e){return i.selected=2}),disabled:2===i.selected},"2. Choice your Gift",8,x),Object(c["i"])("button",{class:"inner",onClick:t[2]||(t[2]=function(e){return i.selected=3}),disabled:3===i.selected},"3. Santa Say...",8,S),1===i.selected?(Object(c["s"])(),Object(c["h"])("div",C,[G,Object(c["G"])(Object(c["i"])("textarea",{placeholder:"Ask / Wish / Dream",maxlength:"500","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.messageText=e})},null,512),[[c["C"],i.messageText]]),Object(c["i"])("div",L,[Object(c["i"])("label",R,[Object(c["G"])(Object(c["i"])("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.vipMessage=e}),style:{"-webkit-appearance":"checkbox"}},null,512),[[c["B"],i.vipMessage]]),P]),i.sendLoader?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["h"])("button",{key:0,class:"action",onClick:t[5]||(t[5]=function(e){return a.sendMessage()})},"Send Message"))]),i.sendLoader?(Object(c["s"])(),Object(c["h"])("img",T)):Object(c["g"])("",!0),U,_,i.messagesReady?(Object(c["s"])(),Object(c["h"])("div",I,[i.messages.length?(Object(c["s"])(),Object(c["h"])("div",N,[(Object(c["s"])(!0),Object(c["h"])(c["a"],null,Object(c["v"])(i.messages,(function(e){return Object(c["s"])(),Object(c["h"])("div",{key:e.text,class:Object(c["p"])(["one-message",{isVip:e.isVip}])},[Object(c["i"])("p",null,Object(c["y"])(e.text),1),Object(c["i"])("span",A,Object(c["y"])(a.dateTime(e.timestamp)),1)],2)})),128))])):Object(c["g"])("",!0),i.messages.length?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["h"])("div",E,V))])):Object(c["g"])("",!0),i.messagesReady?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["h"])("div",D,B))])):Object(c["g"])("",!0),2===i.selected?(Object(c["s"])(),Object(c["h"])("div",W,[z,Object(c["i"])("div",K,[(Object(c["s"])(!0),Object(c["h"])(c["a"],null,Object(c["v"])(i.giftList,(function(e){return Object(c["s"])(),Object(c["h"])("div",{class:Object(c["p"])(["one-gift",{selected:i.selectedGift===e.id}]),key:e.id,onClick:function(t){return a.selectGift(e.id)}},[Object(c["i"])("img",{src:e.url},null,8,F)],10,q)})),128))]),J,X,i.giftsReady?(Object(c["s"])(),Object(c["h"])("div",Q,[(Object(c["s"])(!0),Object(c["h"])(c["a"],null,Object(c["v"])(i.giftHistory,(function(e){return Object(c["s"])(),Object(c["h"])("span",{key:e,class:"small-gift"},[Object(c["i"])("img",{src:a.getUrl(e),width:"50",alt:""},null,8,Z)])})),128)),i.giftHistory.length?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["h"])("div",$," *Your gifts history is empty, select your gift! "))])):Object(c["g"])("",!0),i.giftsReady?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["h"])("div",ee,ne))])):Object(c["g"])("",!0),3===i.selected?(Object(c["s"])(),Object(c["h"])("div",se,[Object(c["i"])("button",{class:"action",onClick:t[6]||(t[6]=function(){return a.santaSay&&a.santaSay.apply(a,arguments)}),disabled:i.isPing},"Ping Santa...",8,ie),ce,ae,(Object(c["s"])(!0),Object(c["h"])(c["a"],null,Object(c["v"])(i.santaSayList,(function(e){return Object(c["s"])(),Object(c["h"])("div",{key:e,class:"one-joke"},Object(c["y"])(e),1)})),128)),i.isPing?(Object(c["s"])(),Object(c["h"])("img",re)):Object(c["g"])("",!0)])):Object(c["g"])("",!0)]),a.user?(Object(c["s"])(),Object(c["h"])("button",{key:0,class:"sign-out button",onClick:t[7]||(t[7]=function(e){return a.signOut()}),style:{background:"transparent",border:"3px solid red"}},"LEAVE SANTA")):Object(c["g"])("",!0)],64)}n("ac1f"),n("5319"),n("d3b7"),n("159b"),n("b64b");var le={name:"NftList",computed:{user:function(){return window.currentUser}},data:function(){return{selected:1,messageText:"",sendLoader:!1,messagesReady:!1,giftsReady:!1,vipMessage:!1,isPing:!1,messages:[],giftHistory:[],santaSayList:[],selectedGift:0,giftList:[{id:1,url:"https://www.gannett-cdn.com/presto/2019/10/11/USAT/99321768-a7c2-45c9-a5fe-63e5eb185b7a-Best_Gifts_for_Kids_of_2019-Kiddzery_Play_Tent_Ball_Pit.png?crop=473,355,x79,y0&quality=50&width=640"},{id:2,url:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1635525612-gifts-for-kids-lego-vidiyo-1635525533.jpg?crop=1xw:1xh;center,top&resize=480:*"},{id:3,url:"https://5.imimg.com/data5/VN/YI/FX/SELLER-88799671/birthday-gift-for-kids-500x500.jpg"},{id:4,url:"https://i.pinimg.com/originals/5f/b4/ef/5fb4ef6c7aa2621d66cda58cce5526f4.jpg"}]}},created:function(){this.loadMyMessages(),this.loadMyGift(),this.loadMyGiftHistory()},methods:{signOut:function(){window.wallet.signOut(),window.location.replace(window.location.origin+window.location.pathname)},getUrl:function(e){for(var t="",n=0;n<this.giftList.length;n++)this.giftList[n].id==e&&(t=this.giftList[n].url);return t},selectGift:function(e){var t=this;this.selectedGift=e,this.giftsReady=!1,window.contract.addGift({id:e}).then((function(){t.loadMyGiftHistory()}))},loadMyGiftHistory:function(){var e=this;this.giftsReady=!1,window.contract.myGiftHistory().then((function(t){e.giftHistory=[],Object.keys(t).forEach((function(n){e.giftHistory.push(t[n])})),e.giftsReady=!0}))},loadMyGift:function(){var e=this;window.contract.myGift().then((function(t){e.selectedGift=t}))},sendMessage:function(){var e=this;if(this.sendLoader=!0,this.messageText.length<2)alert("Please add some text!");else if(this.vipMessage){var t=this.vipMessage?"100000000000000000000000":null,n="300000000000000";window.contract.addMessage({text:this.messageText},n,t).then((function(){e.messageText="",e.sendLoader=!1,e.loadMyMessages()}))}else window.contract.addMessage({text:this.messageText}).then((function(){e.messageText="",e.sendLoader=!1,e.loadMyMessages()}))},dateTime:function(e){var t=new Date(e/1e6),n=t.getDay()>9?t.getDay():"0"+t.getDay(),s=t.getMonth()>9?t.getMonth():"0"+t.getMonth(),i=t.getFullYear(),c=t.getHours(),a="0"+t.getMinutes();return s+"/"+n+"/"+i+" "+c+":"+a.substr(-2)},loadMyMessages:function(){var e=this;this.messagesReady=!1,window.contract.myMessages().then((function(t){e.messages=[],Object.keys(t).forEach((function(n){e.messages.unshift(t[n])})),e.messagesReady=!0}))},santaSay:function(){var e=this;this.isPing=!0,window.contract.santaSay().then((function(t){e.santaSayList.push(t),e.isPing=!1}))}}};n("807f");const ue=y()(le,[["render",oe]]);var de=ue,be={name:"App",computed:{user:function(){return window.currentUser}},components:{SignIn:w,NftList:de}};n("1271");const ge=y()(be,[["render",g]]);var fe=ge,he=n("db49"),je=n.n(he),Oe=n("d9eb"),pe=(n("6ac6"),n("2373"));n("f9e3");function ye(){return me.apply(this,arguments)}function me(){return me=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,i,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=je()("production"),e.next=3,Oe["connect"](Object(s["a"])({deps:{keyStore:new Oe["keyStores"].BrowserLocalStorageKeyStore}},t));case 3:if(n=e.sent,i=new Oe["WalletConnection"](n),!i.getAccountId()){e.next=11;break}return e.t0=i.getAccountId(),e.next=9,i.account().state();case 9:e.t1=e.sent.amount,c={accountId:e.t0,balance:e.t1};case 11:return e.next=13,new Oe["Contract"](i.account(),t.contractName,{viewMethods:["allMessages"],changeMethods:["addMessage","myMessages","myGift","addGift","myGiftHistory","santaSay"],sender:i.getAccountId()});case 13:return a=e.sent,e.abrupt("return",{contract:a,currentUser:c,nearConfig:t,walletConnection:i});case 15:case"end":return e.stop()}}),e)}))),me.apply(this,arguments)}ye().then(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n,s,i,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o=function(){var e=window.innerWidth,t=window.innerHeight,n=Math.floor(Math.random()*t),s=Math.floor(Math.random()*e);return[n,s]},window.contract=t.contract,window.currentUser=t.currentUser,window.nearConfig=t.nearConfig,window.wallet=t.walletConnection,n=Object(c["e"])(fe),n.use(pe["a"],{teleportTarget:"#modals"}),n.mount("#app"),s=200,i=0;i<s;i++)a=document.createElement("div"),a.className="star",r=o(),a.style.top=r[0]+"px",a.style.left=r[1]+"px",document.body.append(a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},7017:function(e,t,n){},"807f":function(e,t,n){"use strict";n("7017")},b5b0:function(e,t,n){},ce36:function(e,t,n){"use strict";n("1f45")},db49:function(e,t){var n=Object({NODE_ENV:"production",BASE_URL:"/nearstmas/"}).CONTRACT_NAME||"santa.vlodkow2.testnet";function s(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org"};case"production":case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}e.exports=s}});
//# sourceMappingURL=app.0c8c5e91.js.map