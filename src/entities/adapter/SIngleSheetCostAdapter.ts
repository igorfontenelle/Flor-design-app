type Dimension = {
    width: number;
    height: number;
}

export default class SingleSheetCostAdapter {
    public singleSheet: any;
    public dimensionUsed: Dimension;
    public dimensionPurchased: Dimension;
    public sheetCost: number;

    constructor(singleSheet: any) {
        this.singleSheet = singleSheet;

        this.dimensionUsed = {
            width: this.singleSheet.widthAreaUsed,
            height: this.singleSheet.heightAreaPurchased
        };

        this.dimensionPurchased = {
            width: this.singleSheet.widthAreaPurchased,
            height: this.singleSheet.heightAreaPurchased
        };

        this.sheetCost = this.singleSheet.fabricCost.totalCostUsed;
    }
}