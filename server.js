const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({ origin: "*" }))

app.get("/dados", (req, res) => {
    res.json({
        mensagem: "Isso é Mackenzie",
        curso: "Sistema de Informação"
    })
})

app.listen(25000, () => console.log("Backend Mackenzie ON"))
