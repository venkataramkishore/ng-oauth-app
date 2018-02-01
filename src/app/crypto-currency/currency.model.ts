
export class Currency {

    public id: string;
    public name: string;
    public symbol: string;
    public rank: string;
    public price_usd: string;
    public price_btc: string;
    public volume_24h_usd: string;
    public market_cap_usd: string;
    public available_supply: string;
    public total_supply: string;
    public max_supply: string;
    public percent_change_1h: string;
    public percent_change_24h: string;
    public percent_change_7d: string;
    public last_updated: string;

    constructor (currency: any) {
      this.id = currency.id;
      this.name = currency.name;
      this.symbol = currency.symbol;
      this.rank = currency.rank;
      this.price_usd = currency.price_usd;
      this.price_btc = currency.price_btc;
      this.volume_24h_usd = currency['24h_volume_usd'];
      this.market_cap_usd = currency.market_cap_usd;
      this.available_supply = currency.available_supply;
      this.total_supply = currency.total_supply;
      this.max_supply = currency.max_supply;
      this.percent_change_1h = currency.percent_change_1h;
      this.percent_change_24h = currency.percent_change_24h;
      this.percent_change_7d = currency.percent_change_7d;
      this.last_updated = currency.last_updated;
    }
}
