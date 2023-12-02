import FabricCostInterface from "./FabricCostInterface";

export default interface SheetFactoryInterface {
    create(type: string, widthAreaUsed: number, heightAreaUsed: number, widthAreaPurchased: number, heightAreaPurchased: number, fabricPrice: number): FabricCostInterface
}