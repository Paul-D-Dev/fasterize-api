import { EdgeLocations } from './../interfaces/cloudfront-edge-locations.interface';
import { findCity } from "./findCity";

test('Shoud return City', () => {
    const location: EdgeLocations = {
        self: '',
        source: '',
        nodes: {
            'PER': {
                country: 'Australia',
                city: 'Perth',
                airport: 'Perth Airport',
            },
            'SYD': {
                country: 'Australia',
                city: 'Sydney',
                airport: 'Sydney (Kingsford Smith) Airport'
            }
        }
    }

    expect(findCity(location, 'PER50-C1')).toEqual('Perth');
})