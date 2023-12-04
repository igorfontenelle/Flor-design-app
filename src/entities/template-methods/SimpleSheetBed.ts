import FabricCostInterface from "../FabricCostInterface";
import AbstractFabricCost from "./AbstractFabricCost";

type Fabric = {
    areaUsed: number, 
    areaPurchased: number, 
    squareMeterCost: number, 
    totalCostUsed: number
}
export default class SimpleSheetBed extends AbstractFabricCost implements FabricCostInterface {
    constructor(widthAreaUsed: number, heightAreaUsed: number, widthAreaPurchased: number, heightAreaPurchased: number, fabricPrice: number){
        super(widthAreaUsed, heightAreaUsed, widthAreaPurchased, heightAreaPurchased, fabricPrice);
        this.fabricCost.areaUsed = this.calculateAreaUsed();
        this.fabricCost.areaPurchased = this.calculateAreaPurchased();
        this.fabricCost.squareMeterCost = this.calculateSquareMeterCost();
        this.fabricCost.totalCostUsed = this.calculateCostUsed();

    }
    public fabricCost: Fabric = {
        areaUsed: 0, 
        areaPurchased: 0, 
        squareMeterCost: 0, 
        totalCostUsed: 0
    };

    calculateSquareMeterCost(): number {
        return this.fabricPrice / this.calculateAreaPurchased();
    }
    calculateCostUsed(): number {
        return this.calculateSquareMeterCost() * this.calculateAreaUsed();
    }    
}