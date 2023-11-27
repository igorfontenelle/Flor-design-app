import FabricCostInterface from "./FabricCostInterface";

type Fabric = {
    areaUsed: number, 
    areaPurchased: number, 
    squareMeterCost: number, 
    totalCostUsed: number
}
export default class GloveSheetBed implements FabricCostInterface {
    constructor(widthAreaUsed: number, heightAreaUsed: number, depthUsed: number, widthAreaPurchased: number, heightAreaPurchased: number, fabricPrice: number){
        if(!widthAreaPurchased){
            throw new Error('Largura comprada é inválida');
        }
        if(!heightAreaPurchased){
            throw new Error('Altura comprada é inválida');
        }
        if(!fabricPrice){
            throw new Error('Preço do tecido comprado é inválido')
        }
        this.widthAreaUsed = widthAreaUsed;
        this.heightAreaUsed = heightAreaUsed;
        this.depthUsed = depthUsed;
        this.widthAreaPurchased = widthAreaPurchased;
        this.heightAreaPurchased = heightAreaPurchased;
        this.fabricPrice = fabricPrice;
        this.fabricCost.areaUsed = this.calculateAreaUsed();
        this.fabricCost.areaPurchased = this.calculateAreaPurchased();
        this.fabricCost.squareMeterCost = this.calculateSquareMeterCost();
        this.fabricCost.totalCostUsed = this.calculateCostUsed();

    }
    private widthAreaUsed: number;
    private heightAreaUsed: number;
    private depthUsed: number;
    private widthAreaPurchased: number;
    private heightAreaPurchased: number;
    private fabricPrice: number;
    public fabricCost: Fabric = {
        areaUsed: 0, 
        areaPurchased: 0, 
        squareMeterCost: 0, 
        totalCostUsed: 0
    };

    calculateAreaUsed(): number {
        console.log(`X: ${this.widthAreaUsed}, Y: ${this.heightAreaUsed}, Z: ${this.depthUsed}, TOTAL: ${this.widthAreaUsed * this.heightAreaUsed * this.depthUsed}`)
        return this.widthAreaUsed * this.heightAreaUsed * this.depthUsed;
    }
    calculateAreaPurchased(): number {
        return this.widthAreaPurchased * this.heightAreaPurchased;
    }
    calculateSquareMeterCost(): number {
        return this.fabricPrice / this.calculateAreaPurchased();
    }
    calculateCostUsed(): number {
        return this.calculateSquareMeterCost() * this.calculateAreaUsed();
    }    
}