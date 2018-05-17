
export interface ICafe {
    id: string;
    title: string;
    address: {
        unit: string,
        house: string,
        street: string,
        city: string,
        country: string,
        postal: string
    };
    position: {
        lat: number,
        lng: number
    };
    phone: string;
    email: string;
    website: string;
    photo: [string];
    rating: number;
    schedule: {
        mn: string,
        tu: string,
        we: string,
        th: string,
        fr: string,
        sa: string,
        su: string
    };
    menu: string;
    description: string;
}

export class Cafe implements ICafe {
    id: string;
    title: string;
    address: {
        unit: string,
        house: string,
        street: string,
        city: string,
        country: string,
        postal: string
    };
    position: {
        lat: number,
        lng: number
    };
    phone: string;
    email: string;
    website: string;
    photo: [string];
    rating: number;
    schedule: {
        mn: string,
        tu: string,
        we: string,
        th: string,
        fr: string,
        sa: string,
        su: string
    };
    menu: string;
    description: string;

    constructor(cafeInfo?: ICafe) {
        Object.assign(this, cafeInfo);
    }
}
