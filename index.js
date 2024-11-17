import express from "express"

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

let posts = []

app.get("/", (req, res)=>{
    res.render("index.ejs", { posts })
})

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
    console.log(posts)
    res.redirect('/')
})

app.post('/delete', (req, res) => {
    const {index} = req.body
    posts.splice(index, 1)
    res.redirect('/')
})

app.get("/about", (req,res)=>{
    res.render("about.ejs")
})

app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})