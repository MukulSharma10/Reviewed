import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

const posts = []

app.get("/new-post", (req,res)=>{
    res.render("new-post.ejs")
})

app.post("/new-post", (req, res)=>{
    const newPost = {
        title: req.body.title,
        content: req.body.content,
        createdAt: new Date() 
    }
    posts.push(newPost)
    res.redirect('/')
})

app.get("/", (req, res)=>{
    res.render("index.ejs", { posts: posts })
})

app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})