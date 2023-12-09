export interface ITarrifDTO {
    name: string,
    startDate: string,
    endDate: string,
    basicPremium: string,
    stickerFee: string,
    browncardStickerFee: string,
    status: "Active" | "Inactive"
}

export const tarrif: ITarrifDTO[] = [
    {
        name: "Standard Plan",
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        basicPremium: "1000",
        stickerFee: "50",
        browncardStickerFee: "20",
        status: "Active",
    },
    {
        name: "Premium Plan",
        startDate: "2023-02-01",
        endDate: "2023-12-31",
        basicPremium: "1500",
        stickerFee: "75",
        browncardStickerFee: "30",
        status: "Active",
    },
    {
        name: "Basic Plan",
        startDate: "2023-03-01",
        endDate: "2023-12-31",
        basicPremium: "800",
        stickerFee: "40",
        browncardStickerFee: "15",
        status: "Active",
    },
    {
        name: "Inactive Plan",
        startDate: "2023-01-01",
        endDate: "2023-01-31",
        basicPremium: "1200",
        stickerFee: "60",
        browncardStickerFee: "25",
        status: "Inactive",
    },
    {
        name: "Special Plan",
        startDate: "2023-04-01",
        endDate: "2023-12-31",
        basicPremium: "2000",
        stickerFee: "100",
        browncardStickerFee: "40",
        status: "Active",
    },
];
