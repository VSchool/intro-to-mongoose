const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))



app.use('/movies', require('./routes/movieRouter'))
app.use('/tvShows', require('./routes/tvShowRouter'))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, (err) => {
    console.log('Server is running on port 8000')
})