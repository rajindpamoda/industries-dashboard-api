type IncomeStream = {
    id: number;
    name: string;
}

type Industry = {
    id: number;
    name: string;
}

export type IndustryItemsResponse = {
    items: {
        uuid: string;
        images: Record<string, string>;
        income_streams: IncomeStream[];
        industries: Industry[];
        name: string;
        tagline: string;
        total_jobs_available: number;
    }[];
    total: number;
}
