export class Restaurant {

    Brand: String;
    Variety: String;
    Style: String;
    Country: String;
    Stars: Number;
    'Top Ten': String;

    constructor(Brand, Variety, Style, Country, Stars, topTen) {
        this.Brand = Brand;
        this.Variety = Variety;
        this.Style = Style == 'NaN' || Style == 'Nan' ? null : Style;
        this.Country = Country;
        this.Stars = Stars == 'NaN' ? null : Stars;
        this['Top Ten'] = topTen;
    }

    public getYear(): Number {
        let year = this['Top Ten'].split(' ')[0];
        return year === 'NaN' ? null : parseInt(year);
    }

    public getRank(): Number {
        let rank = this['Top Ten'].split(' ')[1];
        return rank ? parseInt(rank.substring(1)) : null;
    }

}