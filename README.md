# 餐廳清單

此專案提供使用者查看與搜尋餐廳，並且點擊餐廳照片可以查看餐廳細項。

## 功能列表

- 依照餐廳名稱及餐廳英文名稱、餐廳類別搜尋
- 檢視餐廳詳細資訊包含類別、地址、電話、評分、圖片及 Google Map

### 安裝

1.開啟終端機(Terminal)cd 到存放專案本機位置並執行:

```
git clone https://github.com/Eason0in/Restaurant.git
```

2.初始

```
cd Restaurant  //切至專案資料夾
```

```
npm install  //安裝套件
```

3.開啟程式

```
npm run start  //執行程式
```

終端顯示 `db is connected!` 即啟動完成，請至[http://localhost:3010](http://localhost:3010)開始使用程式

## Screen Photo

![首頁](https://github.com/oez660oez/Restaurant/blob/master/Images/ScreenShot/index.png)
![細項](https://github.com/oez660oez/Restaurant/blob/master/Images/ScreenShot/detail.png)

## 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
