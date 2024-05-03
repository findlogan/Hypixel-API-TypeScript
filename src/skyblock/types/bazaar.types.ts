/* eslint-disable @typescript-eslint/no-explicit-any */
export interface BazaarDataBase {
    success: boolean;
    lastUpdated?: number;
    products?: Record<string, BazaarDataItem>;
    cause?: string;
}

export interface BazaarDataItem {
    product_id: string;
    buy_summary?: {
        amount: number;
        pricePerUnit: number;
        orders: number;
    }[];
    sell_summary?: {
        amount: number;
        pricePerUnit: number;
        orders: number;
    }[];
    quick_status?: {
        productId: string;
        sellPrice: number;
        sellVolume: number;
        sellMovingWeek: number;
        sellOrders: number;
        buyPrice: number;
        buyVolume: number;
        buyMovingWeek: number;
        buyOrders: number;
    };
}
