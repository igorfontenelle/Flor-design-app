type Fabric = {
    areaUsed: number, 
    areaPurchased: number, 
    squareMeterCost: number, 
    totalCostUsed: number
}

export default interface FabricCostInterface {
    fabricCost: Fabric;
    
    calculateAreaUsed(): number;
    calculateAreaPurchased(): number;
    calculateSquareMeterCost(): number;
    calculateCostUsed(): number;
    getFabricCost(): Fabric;
}