var storage = [
    { "id": "0001", "name": "Coca Cola", "price": 3 },
    { "id": "0002", "name": "Diet Coke", "price": 4 },
    { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
    { "id": "0004", "name": "Mountain Dew", "price": 6 },
    { "id": "0005", "name": "Dr Pepper", "price": 7 },
    { "id": "0006", "name": "Sprite", "price": 8 },
    { "id": "0007", "name": "Diet Pepsi", "price": 9 },
    { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
    { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
    { "id": "0010", "name": "Fanta", "price": 12 }
]

export function printReceipt(...barcodes) {
    if (!validateBarcodes(...barcodes)) {
        console.log("ERROR");
        return;
    }
    let receipts = calcReceipts(...barcodes);
    let outputReceipts = transformReceipt(...receipts);
    
    let printResult = ''
    let totalPrice = 0;
    printResult += 'Receipts\n';
    printResult += '------------------------------------------------------------\n';
    outputReceipts.forEach(receipt => {
        totalPrice += receipt.price * receipt.number;
        printResult += receipt.name + '            ' + receipt.price + '   ' + receipt.number + '\n';
    })
    printResult += '------------------------------------------------------------\n';
    printResult += 'Price: ' + totalPrice;
    console.log(printResult);
    return printResult
}

export function validateBarcodes(...barcodes) {
    return barcodes.every(barcode => {
        let item = storage.find(it => it.id === barcode);
        if (item == null) {
            return false;
        }
        return true;
    })
}

export function calcReceipts(...barcodes) {
    let receipts = [];
    barcodes.forEach(barcode => {
        let item = storage.find(it => it.id == barcode);
        if (item != null) {
            receipts.push(item);
        }
    })

    return receipts
}

function transformReceipt(...receipts) {
    let outputReceipts = [];
    receipts.forEach(receipt => {
        let existItem = outputReceipts.find(it => it.id == receipt.id)
        if (existItem == undefined) {
            receipt.number = 1;
            outputReceipts.push(receipt);
        } else {
            existItem.number++
        }
    })
    return outputReceipts;
}