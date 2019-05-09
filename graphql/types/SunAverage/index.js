export default `
    type SunAverage {
        id: String!
        postcode6: String!
        postcode4: Int
        gemeente: String!
        zu_gem: Int
        zu_2018: Int
        kwh_gem: Int
        kwh_2018: Int
        telefoon_opladen: String
        was_draaien: String
        elektrische_bbq: String
        televisie_kijken: String
        elektrische_auto_opladen: String
        tanden_borstel_opladen: String
        sinaasappels_persen: String!
        vaatwas: String
        km_op_de_fiets: String
        euro_s: String
    }

    type Query {
        sunAverage( postcode6: String): SunAverage
        sunAverages: [SunAverage]
    }
`;