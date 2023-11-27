import SheetFactoryInterface from './SheetFactoryInterface';
import SingleSheetCost from './SingleSheetCost';
import GloveSheetBed from './GloveSheetBed';
export default class SheetFactory implements SheetFactoryInterface {
    constructor(){}
    create(type: string, widthAreaUsed: number, heightAreaUsed: number, widthAreaPurchased: number, heightAreaPurchased: number, fabricPrice: number): FabricCostInterface {
        switch (type) {
          case 'SheetBed':
            console.log('Inside factory: ', widthAreaUsed, heightAreaUsed, widthAreaPurchased, heightAreaPurchased, fabricPrice)
            return new SingleSheetCost(widthAreaUsed, heightAreaUsed, widthAreaPurchased, heightAreaPurchased, fabricPrice)
          case 'GloveSheetBed':
            return new GloveSheetBed(widthAreaUsed, heightAreaUsed, 0.60, widthAreaPurchased, heightAreaPurchased, fabricPrice)
          default:
            throw new Error('Invalid product type');
        }
     }
}