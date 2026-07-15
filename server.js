const express = require("express");

const app = express();

app.get("*", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>4Win</title>

<script src="https://telegram.org/js/telegram-web-app.js"></script>

<style>
html,body{
margin:0;
padding:0;
width:100%;
height:100%;
overflow:hidden;
}

iframe{
border:none;
width:100%;
height:100%;
}
</style>

</head>

<body>

<script>
Telegram.WebApp.ready();
Telegram.WebApp.expand();
</script>

<iframe src="https://www.4win.vip/myr/home"></iframe>

</body>
</html>
`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,"0.0.0.0",()=>{
console.log("Running...");
});
