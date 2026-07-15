const express = require("express");

const app = express();

app.get("*", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="0; url=https://www.4win.vip/myr/home">
      </head>
      <body>
        Opening...</body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
