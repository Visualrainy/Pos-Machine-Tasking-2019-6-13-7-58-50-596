import { printReceipt, validateBarcodes } from '../main'

it('should return false when barcodes is not valid', () => {
    expect(validateBarcodes('0001', '0003', '0005', '009')).toBe(false)
})
