import { printReceipt, calcReceipts, validateBarcodes } from '../main'

it('should return false when barcodes is not valid', () => {
    expect(validateBarcodes('0001', '0003', '0005', '009')).toBe(false)
})

it('should calc receipt correctly when input is valid',() => {
    expect(calcReceipts('0001', '0003', '0005').length).toBe(3)
})

// it('should print receipt correctly when input is valid', () => {
//     expect(printReceipt('0001', '0003', '0005')).toBe('')
// })