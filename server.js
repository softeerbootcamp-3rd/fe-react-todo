import fs from "fs"
import express from "express"
import { createServer as createViteServer } from "vite"

const app = express()

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: "custom",
})

app.use(vite.middlewares)

app.use("*", async (req, res, next) => {
  const url = req.originalUrl

  try {
    let template = fs.readFileSync("./index.html", { encoding: "utf-8" })

    template = await vite.transformIndexHtml(url, template)

    //   ssr 에 필요한 모듈 로드
    const { render } = await vite.ssrLoadModule("./src/entry-server.tsx")

    //   render 함수 실행
    const { html: appHtml } = render()

    // index.html 에 html 넣고 응답 내려주기
    const html = template.replace("<!-- app-body -->", appHtml)
    res.status(200).set("Content-Type", "text/html").end(html)
  } catch (e) {
    vite.ssrFixStacktrace(e)
    next(e)
  }
})

app.listen(5173)
