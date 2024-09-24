// 載入 express 模組
const express = require('express')
//透過 require 把 express-handlebars 載入進來
//載入 express-handlebars 模組中的 engine，並且從中解構賦值。express-handlebars 是 Express 提供的一個用來整合 Handlebars 的包，讓你能在 Express 中使用 Handlebars 作為模板引擎。
const { engine } = require('express-handlebars')
// 建立一個 Express 應用程式的實例
const app = express()
// 伺服器運行時的埠號，預設3000
const port = 3010
const restaurant = require('./public/jsons/restaurant.json').results

//Express-handlebars Start
// 載入之後，要告訴 Express：麻煩幫我把樣板引擎交給 express-handlebars
// 這行定義了一個自訂的模板引擎，讓 Express 知道要使用 Handlebars 來渲染 .hbs 擴展名的模板文件。
// 第一個參數 '.hbs' 是告訴 Express：所有 .hbs 檔案應該用 Handlebars 引擎來處理。
// 第二個參數 engine({ extname: '.hbs' }) 則是設定 Handlebars 引擎時的參數。在這裡，你指定了模板文件的副檔名為 .hbs。Handlebars 預設的副檔名是 .handlebars，但你可以更改為 .hbs 這樣較短的格式。
app.engine('.hbs', engine({extname: '.hbs'}))
//設定 Express 的視圖引擎為 .hbs，表示在應用程式中使用 .hbs 檔案來渲染視圖。當你使用 res.render() 來渲染視圖時，Express 會自動尋找 .hbs 格式的檔案來處理。
app.set('view engine', '.hbs')
//告訴 Express，所有視圖模板檔案都會儲存在 ./views 這個資料夾中。當你渲染一個視圖時，Express 會在 ./views 資料夾中尋找對應的模板檔案。
app.set('views', './views')
//Express-handlebars End

//將 JSON 檔案載入的方式只需要在 app.js 檔案使用 app.use ，並將靜態檔案的路徑提供給它就可以取得資料
app.use(express.static('public'))

// 定義一個路由處理器，表示伺服器會處理來自客戶端的 GET 請求，指定路徑 '/'，也就是根路徑。當用戶訪問根路徑時，會執行後面括號內的回呼函數。
// req 是請求物件，包含了從客戶端發送過來的資訊、res 是回應物件，這裡用來發送回應給客戶端。
// res.send('express app for movies') 會把字串 'express app for movies' 發送給客戶端作為回應。
app.get('/', (req, res) => {
  res.redirect('/restaurant')
})
//處理來自客戶端/restaurant的請求
// express 就會在使用者輸入 localhost:3000/restaurant 時，根據 index.hbs 這支檔案回傳對應的 HTML 給瀏覽器。
app.get('/restaurant', (req, res) => {
  res.render('index',{ restaurant: restaurant})
})
//這裡的路徑 '/movie/:id' 包含了 :id 這個動態參數。:id 表示這是一個可變的部分，它不是固定的字串，而是用戶在訪問路由時提供的值。換句話說，當用戶請求 /movie/123 或 /movie/456 時，id 的值會根據用戶的請求不同而變動。
//req.params 是 Express 中用來存放 URL 中動態參數的物件。這裡的 req.params.id 表示取得取得使用者於網址上 :id 位置輸入的內容，並將其存入變數 id 中。假設用戶訪問的網址是 /movie/123，那麼 req.params.id 的值就是 123。
//res.send 是用來發送回應給客戶端的函數。這裡使用了模板字串（Template String）來嵌入變數 id，並回應字串 read movie: ${id}。假設 id 是 123，那麼發送的回應就是 'read movie: 123'。
app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  res.send(`read restaurant: ${id}`)
})

// app.listen 會啟動伺服器，並且執行一個回呼函數來顯示伺服器正在運行的訊息。
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})