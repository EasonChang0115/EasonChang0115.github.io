(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{557:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Server-Side Request Forgery，服務端請求偽造，前端工程師接觸較多的為 XSS 或 CSRF，不過理解 SSRF 也是對於在串接 api 時，可以多一點保障，避免寫錯導致資料外洩等。透過外部伺服器，偽造一個請求，讓外部伺服器乖乖的去向內部伺服器(資料庫、商業邏輯計算等)拿到想到的資料的一種攻擊手法。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://storage.googleapis.com/image.blocktempo.com/2021/08/Source%EF%BC%9ASimplilearn-.jpg",alt:""}})]),t._v(" "),a("p",[t._v("伺服器請求偽造，利用外部提供的 api 設計的漏洞，像內部伺服器發送請求，從而拿到客戶端沒辦法獲得的數據或行為。但是駭客必須知道內網的 api 資訊才能達成攻擊，像是若是要搶銀行，就必須要知道銀行內部的構造一樣。")]),t._v(" "),a("p",[t._v("雖然攻擊的方式比較麻煩，但因為第三方 API 盛行的關係(Facebook、AWS)等等，只要沒有好好驗證或是稍微注意，駭客就可以利用伺服器請求偽造，從外網直接穿透內網拿到想要的資料。")]),t._v(" "),a("h2",{attrs:{id:"攻擊原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻擊原理"}},[t._v("#")]),t._v(" 攻擊原理")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/tPSTF94.png",alt:""}})]),t._v(" "),a("h6",{attrs:{id:"圖片來源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#圖片來源"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://medium.com/%E7%A8%8B%E5%BC%8F%E7%8C%BF%E5%90%83%E9%A6%99%E8%95%89/%E7%B6%B2%E7%AB%99%E5%AE%89%E5%85%A8-%E4%BC%BA%E6%9C%8D%E5%99%A8%E8%AB%8B%E6%B1%82%E5%81%BD%E9%80%A0-ssrf-%E6%94%BB%E6%93%8A-%E9%A0%85%E8%8E%8A%E8%88%9E%E5%8A%8D-%E6%84%8F%E5%9C%A8%E6%B2%9B%E5%85%AC-7a5524926362",target:"_blank",rel:"noopener noreferrer"}},[t._v("圖片來源"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如圖，駭客可以從客戶端發出一個偽造的請求給中介伺服器，而內部伺服器可能是公司的內網，只能透過內部 API 進行資料的存取，可能有商業資料、客戶資訊等等，並且沒有對外接口，需要透過中介伺服器對外進行聯繫。")]),t._v(" "),a("p",[t._v("偽造的請求，主要的目標不是中介伺服器，是要透過外部 api 模擬中介伺服器向內部伺服器發送的請求，進而達到目的，因此我們知道"),a("strong",[t._v("所有能發起請求的地方都有可能存在 SSRF 漏洞")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"偽造的請求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#偽造的請求"}},[t._v("#")]),t._v(" 偽造的請求")]),t._v(" "),a("p",[t._v("內網的 API 請求，如果說沒有外洩是不會有機會被駭客知道的。但是隨著第三方串接盛行、Restful API 規則下，很多時候 API 的格式會越來越好猜導致駭客只要不斷地嘗試就可以破解了。很多企業，由於內網的防範都會比較寬鬆，比如說對於權限的驗證不精確、沒有 token 驗證，導致暴露危險的可能。")]),t._v(" "),a("h2",{attrs:{id:"如何進行攻擊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何進行攻擊"}},[t._v("#")]),t._v(" 如何進行攻擊")]),t._v(" "),a("h4",{attrs:{id:"_1-利用目錄遍歷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-利用目錄遍歷"}},[t._v("#")]),t._v(" 1. 利用目錄遍歷")]),t._v(" "),a("p",[t._v("上面介紹的攻擊手法，熟悉資安的人，應該想到利用 API 「目錄遍歷」 (Path Traversal )的攻擊手法就可以達到想要的目的了。下面是一個留言板的例子")]),t._v(" "),a("p",[t._v("新增留言的 API 有驗證使用者 ID 跟 token。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST http://內網的Domain/${userId}/posts?message=${message}&token=${token}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("管理者更新留言的 API 為了方便管理，所以沒有驗證，因為這是內網，不會給外部機器使用。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("POST http://內網的Domain/admin/posts/${postId}?message=${message}\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("而仲介的伺服器是這樣寫 api 的")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/posts/:postId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://內網的Domain/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("postId"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/posts?message=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("而這樣就會造成漏洞，假設駭客利用 "),a("code",[t._v("../")]),t._v(" 目錄遍歷以及 URL 編碼的特性把 postId 換成 "),a("code",[t._v("admin%2Fposts%2F1234%3Fmessage%3Dhacked%26")]),t._v(":")]),t._v(" "),a("p",[t._v("傳出去的 api")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("api/posts/admin%2Fposts%2F1234%3Fmessage%3Dhacked%26\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("後端 decode 後：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("admin/posts/1234?message=hacked&\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("連 token 都可以不用驗證就輕易的更新 1234 的文章內容了。")]),t._v(" "),a("h4",{attrs:{id:"_2-內部資料盜取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-內部資料盜取"}},[t._v("#")]),t._v(" 2. 內部資料盜取")]),t._v(" "),a("p",[t._v("很多公司都會自己架上圖床或是資料庫，來存公司內部需要的 banner 、商業圖、廣告等，但因為不會隨便給外部網站使用，所以僅限於內網可以上傳或下載資料至伺服器。所以通常都會在內網開 url 來連結給需要的外部伺服器使用。")]),t._v(" "),a("p",[t._v("所以會這樣寫：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/getImage'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通常我們都會設定 baseUrl: http://內網的Domain/getImage/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageId"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("對這支 "),a("code",[t._v("/api/getTomImage")]),t._v(" 發送 post 請求，並帶上 imageId 就可以拿到我們想要的圖片了。要注意的是，我們 imageId 的參數沒有經過驗證，所以使用者只要知道這支 api 我就可以隨便猜一個檔案的 id 或是傳一個 url 來看看會發生什麼事。")]),t._v(" "),a("p",[t._v("駭客就可以猜內網的 ip 通常是 192.168.0.1 等等之類的，然後加上 config 等字串，不就可以拿到公司內部不論是機台資料、部署參數、資料庫 admin 密碼等等。")]),t._v(" "),a("p",[t._v("即使我們嚴謹一點，把後台請求寫成：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://內網的Domain/getImage/")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageId"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("還是可以用 url 解析的特性過濾：")]),t._v(" "),a("p",[a("code",[t._v("http://www.test.com@127.0.0.1/config.js")]),t._v(" => "),a("code",[t._v("http://27.0.0.1/config.js")])]),t._v(" "),a("h2",{attrs:{id:"如何防禦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何防禦"}},[t._v("#")]),t._v(" 如何防禦")]),t._v(" "),a("ol",[a("li",[t._v("限定內網訪問：針對內部伺服器的資料讀取，進行權限的設定，必要時加上 token。")]),t._v(" "),a("li",[t._v("注意後端伺服器使用第三方 API 的權限，若沒有適當設定權限，當「偽造請求」穿透到內網的時候，可能會存取到機密資訊。")]),t._v(" "),a("li",[t._v("避免目錄遍歷 ( Path Traversal ) 漏洞，減少「偽造請求」往後傳送的機會。")]),t._v(" "),a("li",[t._v("依據不信任原則，任何有參數的地方都要進行驗證。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);