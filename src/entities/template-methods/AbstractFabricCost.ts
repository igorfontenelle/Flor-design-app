
import FabricCostInterface from '../FabricCostInterface';
type Fabric = {
    areaUsed: number, 
    areaPurchased: number, 
    squareMeterCost: number, 
    totalCostUsed: number
}
export default abstract class AbstractFabricCost implements FabricCostInterface {
    public fabricCost: Fabric = {
      areaUsed: 0,
      areaPurchased: 0,
      squareMeterCost: 0,
      totalCostUsed: 0,
    };
  
    constructor(
      protected widthAreaUsed: number,
      protected heightAreaUsed: number,
      protected widthAreaPurchased: number,
      protected heightAreaPurchased: number,
      protected fabricPrice: number
    ) {
      if (!widthAreaPurchased) {
        throw new Error("Largura comprada é inválida");
      }
      if (!heightAreaPurchased) {
        throw new Error("Altura comprada é inválida");
      }
      if (!fabricPrice) {
        throw new Error("Preço do tecido comprado é inválido");
      }
  
      this.fabricCost.areaUsed = this.calculateAreaUsed();
      this.fabricCost.areaPurchased = this.calculateAreaPurchased();
      this.fabricCost.squareMeterCost = this.calculateSquareMeterCost();
      this.fabricCost.totalCostUsed = this.calculateCostUsed();
    }
  
    calculateAreaUsed(): number {
        return this.widthAreaUsed * this.heightAreaUsed;
    }
    calculateAreaPurchased(): number {
        return this.widthAreaPurchased * this.heightAreaPurchased;
    }
    abstract calculateSquareMeterCost(): number;
    abstract calculateCostUsed(): number;
  }