import { listen } from 'listhen'
import { createApp, eventHandler, toNodeListener } from 'h3'

const app = createApp()
app.use('/', eventHandler(() => 'Hello world!'))

listen(toNodeListener(app), { port: 39865 })
