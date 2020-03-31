import { printReceipt, calcReceipts, validateBarcodes } from '../main'

it('should return false when barcodes is not valid', () => {
    expect(validateBarcodes('0001', '0003', '0005', '003')).toBe(false)
})

it('should calc receipt correctly when input is valid',() => {
    expect(calcReceipts('0001', '0003', '0005', '0003').length).toBe(4)
})

it('should print receipt correctly when input is valid', () => {
    expect(printReceipt('0001', '0003', '0005', '0003')).toBe('Receipts\n------------------------------------------------------------\nCoca Cola            3   1\nPepsi-Cola            5   2\nDr Pepper            7   1\n------------------------------------------------------------\nPrice: 20')
})