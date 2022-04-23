
export type Beers = {
    id: string;
    name: string;
    tagline: string;
    image_url: string;
    description: string;
    first_brewed: string;
    ingredients: {
        malt: [malt: { name: string; amount: { value: string } }];
        hops: [hops: { name: string; amount: { value: string } }];
        yeast: string
    };
    food_pairing: [string]
};

