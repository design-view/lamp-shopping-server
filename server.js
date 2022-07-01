const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const models = require('./models');

//json형식의 데이터를 처리할수 있게 설정
app.use(express.json());
//브라우저 cors이슈를 막기위해 사용(모든 브라우저의 요청을 일정하게 받겠다)
app.use(cors());

//요청처리
//app.메서드(url, 함수)
app.get('/products',async (req,res)=>{
    const result = {
        products: [
            {
                id:1,
                name:"거실조명",
                price: 50000,
                imgsrc:"images/products/product1.jpg",
                seller: "green",
            },
            {
                id:2,
                name:"거실조명",
                price: 50000,
                imgsrc:"images/products/product2.jpg",
                seller: "green",
            },
            {
                id:3,
                name:"거실조명",
                price: 50000,
                imgsrc:"images/products/product3.jpg",
                seller: "green",
            },
            {
                id:4,
                name:"거실조명",
                price: 50000,
                imgsrc:"images/products/product4.jpg",
                seller: "green",
            },
            {
                id:5,
                name:"거실조명",
                price: 50000,
                imgsrc:"images/products/product1.jpg",
                seller: "green",
            },
            {
                id:6,
                name:"거실조명",
                price: 50000,
                imgsrc:"images/products/product2.jpg",
                seller: "green",
            },
            {
                id:7,
                name:"거실조명",
                price: 50000,
                imgsrc:"images/products/product3.jpg",
                seller: "green",
            },
            {
                id:8,
                name:"거실조명",
                price: 50000,
                
                imgsrc:"images/products/product4.jpg",
                seller: "green",
            },
            
        ]
    }
    res.send(result);
})
//method get이고 url은 /product/2 로 요청이 온경우 
app.get('/product/:id', async (req, res)=> {
    const params = req.params;
    const { id } = params;
    const product = {
        id:id,
        name:"서버에서 보내는 이름",
        price: 50000,
        imgsrc:"images/products/product4.jpg",
        seller: "green",
    }
    res.send(product);

});
app.post('/green',async (req,res)=>{
    console.log(req);
    res.send('그린 게시판에 게시글이 등록되었습니다.');
});
//실행
app.listen(port, ()=>{
    console.log('쇼핑몰 서버가 동작중입니다.');
    //sequelize와 데이터베이스 연결작업
    //데이터베이스 동기화 
    models.sequelize
    .sync()
    .then(()=>{
        console.log('DB연결 성공');
    })
    .catch(e=>{
        console.error(e);
        console.log('DB연결 에러');
        //서버실행이 안되면 프로세서를 종로
        process.exit();
    })
})