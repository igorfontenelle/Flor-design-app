import SingleSheet from "./SingleSheet";

export default class SingleSheetOrder {
    singleSheet: SingleSheet = new SingleSheet();
    _timeToProduce: number;
    _custePerSquareMeter: number;

    constructor(timeToProduce: number, custePerSquareMeter: number) {
        this._timeToProduce = timeToProduce;
        this._custePerSquareMeter = custePerSquareMeter;
    }
    
}