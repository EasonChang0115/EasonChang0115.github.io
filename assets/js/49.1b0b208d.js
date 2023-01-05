(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{546:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("快取在網路世界中，是最常用來解決效能的方法之一。但說到快取，你我都可能知道 etag 或是 if-modified-since 這樣的 header，仔細講起來，總覺得不踏實。或許我們有去看過大型網站請求的快取策略，但卻沒有實際應用過，當遇到的時候，免不了踩了個坑。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/UvUCB2q.png",alt:""}})]),t._v(" "),s("h1",{attrs:{id:"略懂非懂的-http-快取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#略懂非懂的-http-快取"}},[t._v("#")]),t._v(" 略懂非懂的 HTTP 快取")]),t._v(" "),s("h2",{attrs:{id:"http-快取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-快取"}},[t._v("#")]),t._v(" HTTP 快取")]),t._v(" "),s("p",[t._v("Web 的快取，分為很多種，資料庫快取、伺服器快取、CND 快取、HTTP 快取，甚至一個函數也可以快取。今天就以 HTTP 快取講起。")]),t._v(" "),s("p",[t._v("HTTP 快取是用於臨時儲存的 Web 文件，以減少伺服器延遲的一種技術。他會透過該系統文件備份儲存起來，如果滿足某些條件，也可以由快取內容來替代請求結果。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("在前端開發中，效能一直是大家最重視的一環，判斷該網站效能如何的最直接方式就是該網頁開啟的速度。其中，加強網頁開啟速度的最直接方式就是使用快取。")])]),s("h3",{attrs:{id:"應用快取的好處"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#應用快取的好處"}},[t._v("#")]),t._v(" 應用快取的好處")]),t._v(" "),s("ol",[s("li",[t._v("使網頁載入和呈現的速度更快。")]),t._v(" "),s("li",[t._v("由於減少不必要的呼叫和傳輸，可以節省流量和頻寬。")]),t._v(" "),s("li",[t._v("同時，也可減少 Server 的負擔。")])]),t._v(" "),s("h3",{attrs:{id:"http-快取的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-快取的位置"}},[t._v("#")]),t._v(" HTTP 快取的位置")]),t._v(" "),s("p",[t._v("按快取的位置分類可以分為記憶體快取(memory cache)、硬碟快取(disk cache)、service worker。")]),t._v(" "),s("h4",{attrs:{id:"_1-記憶體快取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-記憶體快取"}},[t._v("#")]),t._v(" 1. 記憶體快取:")]),t._v(" "),s("p",[t._v("當第一次存取網頁時，資源會先被存在網頁的記憶體中，同時也會在本機的磁碟中保留一份備份。當使用者刷新畫面時，如果快取的資源沒有過期，就可以直接從記憶體中讀取資料並載入。")]),t._v(" "),s("h4",{attrs:{id:"_2-硬碟快取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-硬碟快取"}},[t._v("#")]),t._v(" 2. 硬碟快取:")]),t._v(" "),s("p",[t._v("若網頁被關閉，那在頁面中的記憶體快取就會被刪除，所以使用者再一次開啟網頁時，會從電腦的硬碟檢查並載入到快取記憶體中。")]),t._v(" "),s("h4",{attrs:{id:"_3-service-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-service-worker"}},[t._v("#")]),t._v(" 3. Service worker:")]),t._v(" "),s("p",[t._v("Web worker 是獨立於 javascritpt 的執行緒，可以在裡面執行一些耗時、耗資源的運算，從而分擔主執行緒的壓力。而 service worker 也屬於一種 "),s("a",{attrs:{href:"https://easonchang0115.github.io/blogs/frontEnd/2019/20190609_1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web worker"),s("OutboundLink")],1),t._v("，只是它更像是一個代理伺服器，可以攔截請求和響應，實現資源的離線快取，實現 PWA 的功能。")]),t._v(" "),s("h4",{attrs:{id:"_4-push-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-push-cache"}},[t._v("#")]),t._v(" 4. Push Cache")]),t._v(" "),s("p",[t._v("HTTP/2 引入了 server push，而 server push 使用的快取叫做 push cache。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("Server Push:")]),t._v(" "),s("p",[t._v("傳統 client 在對 servet 拿資料時，是一個一個拿，比如 "),s("code",[t._v("Http/1.1 GET index.html")]),t._v("、"),s("code",[t._v("Http/1.1 GET style.css")]),t._v("、"),s("code",[t._v("Http/1.1 GET main.js")]),t._v(" 等資料都是要一次一個請求的。")]),t._v(" "),s("p",[t._v("但在  HTTP/2  後，當發出 "),s("code",[t._v("Http/2.0 GET index.html")]),t._v("，server 會一次性的把 index.html 相關的 style.css、main.js 等都回傳到 client。")])]),s("h4",{attrs:{id:"優先順序-service-worker-memory-disk-push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#優先順序-service-worker-memory-disk-push"}},[t._v("#")]),t._v(" 優先順序  "),s("code",[t._v("Service Worker")]),t._v(" > "),s("code",[t._v("Memory")]),t._v(" > "),s("code",[t._v("Disk")]),t._v(" > "),s("code",[t._v("Push")])]),t._v(" "),s("h4",{attrs:{id:"使用者互動也會影響"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用者互動也會影響"}},[t._v("#")]),t._v(" 使用者互動也會影響")]),t._v(" "),s("ul",[s("li",[t._v("位址列輸入 url：優先查詢 Disk Cache")]),t._v(" "),s("li",[t._v("F5 重新整理：優先查詢 Memory Cache，找不到再查詢 Disk Cache")]),t._v(" "),s("li",[t._v("ctrl + F5 重新整理：不使用快取，重新請求")])]),t._v(" "),s("h3",{attrs:{id:"http-快取的策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-快取的策略"}},[t._v("#")]),t._v(" HTTP 快取的策略")]),t._v(" "),s("p",[t._v("分為強快取和協商快取兩種，這張圖很好理解：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/Geqb5Au.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"強快取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#強快取"}},[t._v("#")]),t._v(" 強快取")]),t._v(" "),s("p",[t._v("優先進行強快取，當發起請求後，會依次檢視 ServiceWorker、Memory、Disk 是否有快取。")]),t._v(" "),s("p",[s("strong",[t._v("若沒有")]),t._v("，則自動快取資源到 Memory 中，同時根據 header 的資訊存到 disk 中，若有 ServiceWorker，也做對應處理。")]),t._v(" "),s("p",[s("strong",[t._v("若有")]),t._v("，則檢查是否新鮮，根據 Expires(http/1.0) 這個絕對的到期時間(時間戳)，來判斷。或是 Cache-Control(http/1.1) 的 "),s("code",[t._v("max-age = <seconds>")]),t._v("，從請求發起過了多少秒之後，快取才會過期。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Expires: "),s("code",[t._v("Wed, 21 Oct 2017 07:28:00 GMT")]),t._v(" HTTP Response Header 中。")])]),t._v(" "),s("li",[s("p",[t._v("Cache-Control：\n"),s("img",{attrs:{src:"https://i.imgur.com/6dFrlPB.png",alt:""}})])])]),t._v(" "),s("p",[t._v("觀察 Google Logo 檔案的 Response header，會發現它的max-age 設定成 31536000 秒，也就是 365 天的意思。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("Expires 因為有時區的問題，會不夠精確，優先判斷 Cache-Control。")]),t._v(" "),s("p",[t._v("但為了兼容某些瀏覽器或環境不能使用 http/1.1，還是存在 Expires 機制。")])]),s("p",[t._v("因為強快取的優先度會最高，適用於大型且不易修改的資源檔，例如圖片資源等，靈活運用的話，可以加上 hash 標籤來進行版本區分。")]),t._v(" "),s("h4",{attrs:{id:"協商快取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#協商快取"}},[t._v("#")]),t._v(" 協商快取")]),t._v(" "),s("p",[t._v("當快取過期，那就是要進行協商了，是否要繼續使用這個快取資源，還是更新為新的資源。")]),t._v(" "),s("p",[t._v("過期後，發送請求的 header 欄位：")]),t._v(" "),s("ol",[s("li",[t._v("ETag: 利用雜湊值與 server 判斷，該資源是否需要更新，若不需要則返回 304，讓瀏覽器繼續沿用舊快取，若不一致則重新響應。")]),t._v(" "),s("li",[t._v("Last-Modified: 利用最後編輯時間，和 server 的資源進行比較，判斷該資源是否需要更新。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/9GdYJQs.png",alt:""}})]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("ETag 對伺服器運算較高，需要生成雜湊值。但是 Last-Modified 會有真的是最後更新時間的疑慮在，因此兩者必須相輔相成。")])]),s("p",[t._v("協商快取靈活性比較高，會跟 server 進行多次的互動，可以保證資料的最新狀態。")]),t._v(" "),s("h3",{attrs:{id:"如何禁止瀏覽器不快取靜態資源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何禁止瀏覽器不快取靜態資源"}},[t._v("#")]),t._v(" 如何禁止瀏覽器不快取靜態資源")]),t._v(" "),s("ol",[s("li",[t._v("使用 chrome 隱私模式")]),t._v(" "),s("li",[t._v("對資源新增版本編號")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("text/css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./asset.css?version=1.0.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("使用 "),s("meta"),t._v(" 標籤宣告快取規則：")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Cache-control"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-cache, no-store, must-revalidate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"etag-最大的問題"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etag-最大的問題"}},[t._v("#")]),t._v(" ETag 最大的問題？")]),t._v(" "),s("p",[t._v("當資源分別是不同的伺服器來的時候，每個伺服器的負載都不同。計算雜揍的效率也會不一致，容易造成資源載入順序的混亂，而使快取故障。")]),t._v(" "),s("h5",{attrs:{id:"參考資料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#參考資料"}},[t._v("#")]),t._v(" 參考資料")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://pjchender.dev/webdev/note-http-cache/#etag-%E5%92%8C-if-none-match",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP Cache 快取"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.techbridge.cc/2017/06/17/cache-introduction/",target:"_blank",rel:"noopener noreferrer"}},[t._v("循序漸進理解 HTTP Cache 機制"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.ipshop.xyz/18673.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("淺談瀏覽器的快取機制"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);