# Campaign give voucher game

Company ABC would like to run an anniversary celebration campaign to give away 1000
pieces of cash vouchers to its loyal customers. When the campaign starts, all customers
who are eligible and submit a qualified photo within 10 minutes will receive a string of cash
voucher code immediately. The vouchers are first come first serve basis by clicked through
the campaign link and eligible to participate.# Before run this API


## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.


### Copy-paste the .env file

```bash
$ cp .env.example .env
```

Edit the with your config 

```bash
$ yarn / npm install
```

### Run

```bash
$ yarn dev / npm run dev
```

### Generate voucher
```bash
this endpoint use for generate voucher
localhost:9100/api/v1/voucher/generate [POST]
{
  "total_voucher": <number>
}
respons: 
{
    "code": 21,
    "message": "success",
    "result": [
        {
            "voucherId": "t6p9cj",
            "status": "notUsed"
        },
        {
            "voucherId": "bcan87",
            "status": "notUsed"
        },
        {
            "voucherId": "qq1u0l",
            "status": "notUsed"
        },
        {
            "voucherId": "coein2",
            "status": "notUsed"
        },
        {
            "voucherId": "khi876",
            "status": "notUsed"
        },
        {
            "voucherId": "4vx8tr",
            "status": "notUsed"
        },
        {
            "voucherId": "ds6uqe",
            "status": "notUsed"
        },
        {
            "voucherId": "01sp22",
            "status": "notUsed"
        },
        {
            "voucherId": "lqarss",
            "status": "notUsed"
        },
        {
            "voucherId": "yfs8td",
            "status": "notUsed"
        }
    ]
}
```

### user purchase
```bash
this endpoint use for when user purchase and check voucher
localhost:9100/api/v1/transaction/purchase [POST]
{
  "file": <file>,
  "spent": <number>,
  "saving": <number>
}
respons: 
{
    "code": 21,
    "message": "success"
}
```


