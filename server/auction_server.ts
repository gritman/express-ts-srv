import * as express from 'express';

const app = express();

export class Stock {
    constructor(public id: number,
                public name: string,
                public price: number,
                public rating: number,
                public desc: string,
                public categories: Array<string>) {

    }
}

const stocks: Stock[] = [
    new Stock(1, '股票名1', 1.99, 3.5, '股票说明1', ['IT', '互联网']),
    new Stock(2, '股票名2', 5.37, 4.5, '股票说明2', ['IT', '互联网']),
    new Stock(3, '股票名3', 3.37, 2.5, '股票说明3', ['金融', '互联网']),
    new Stock(4, '股票名4', 4.37, 3.5, '股票说明4', ['IT', '金融']),
    new Stock(5, '股票名5', 5.37, 4.5, '股票说明5', ['金融', '互联网']),
    new Stock(6, '股票名6', 6.37, 2.0, '股票说明6', ['金融', '互联网']),
    new Stock(7, '股票名7', 7.37, 4.0, '股票说明7', ['IT', '互联网']),
    new Stock(8, '股票名8', 8.37, 3.0, '股票说明8', ['金融', 'IT']),
];

app.get('/', (req, res) => {
    res.send("Hello Express");
});

app.get('/products', (req, res) => {
    res.send("接收到商品查询请求!");
});

const server = app.listen(8000, "localhost", () => {
    console.log("服务器已启动,地址是http://localhost:8000");
});