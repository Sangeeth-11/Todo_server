const jsonServer = require('json-server')
const server = jsonServer.create()
const route = jsonServer.router('db.json')
const middleware = jsonServer.defaults()

const PORT =3000

server.use(middleware)
server.use(route)
server.listen(PORT,()=>{
    console.log("server running at port 3000");
})