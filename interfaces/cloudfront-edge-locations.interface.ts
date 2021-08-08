export interface EdgeLocations {
    self:   string;
    source: string;
    nodes:  { [key: string]: Node };
}

export interface Node {
    country: string;
    city:    string;
    airport: string;
}
