import express,{Request,Response} from 'express';
const app = express()
const port:number = 3000;
const host:string = "localhost";
app.get('/', (req:Request, res:Response):void => {
    res.statusCode = 200 ; 

    const jason = res.json({
        "nama" : "Moh Ainul Yaqin",
        "umur": "21",
    })
    const ubah = JSON.stringify(jason);
    res.send({
        ubah:ubah,
        jason:jason,
    })
})

app.listen(port,host, () => {
  console.log(`The ${host} was runing at ${port} port`)
})


// module.exports = app;