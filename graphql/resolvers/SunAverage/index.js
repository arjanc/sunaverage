import SunAverage from '../../../models/SunAverage';
import { GraphQLError } from 'graphql';

export default {
    Query: {
        sunAverage: async (parent, { postcode6 }, context, info) => {
            const average = await SunAverage.findOne({ postcode6: postcode6.toUpperCase() }).exec();
        
            // if (!average) throw new GraphQLError('nothing found');
            if (!average) {
                return null;
            }

            const json = average.toJSON();

            console.log('json: ', json);
            return {
                id: json._id.toString(),
                postcode6: json.postcode6,
                postcode4: json.postcode4,
                gemeente: json.gemeente,
                zu_gem: json.zu_gem,
                zu_2018: json.zu_2018,
                kwh_gem: json.kwh_gem,
                kwh_2018: json.kwh_2018,
                telefoon_opladen: json.telefoonOpladen,
                was_draaien: json.wasDraaien,
                elektrische_bbg: json.elektrischeBbq,
                televisie_kijken: json.televisieKijken,
                elektrische_auto_opladen: json.elektrischeAutoOpladen,
                tanden_borstel_opladen: json.tandenBorstelOpladen,
                sinaasappels_persen: json.sinaasappelsPersen,
                vaatwas: json.vaatwas,
                km_op_de_fiets: json.kmOpDeFiets,
                euro_s: json.euros,
            };
        },
        sunAverages: async (parent, args, context, info) => {
            const averages = await SunAverage.find({})
            .populate()
            .exec();
        
            return averages.map(u => ({
                id: u._id.toString(),
                postcode6: u.postcode6,
                postcode4: u.postcode4,
                gemeente: u.gemeente,
                zu_gem: u.zu_gem,
                zu_2018: u.zu_2018,
                kwh_gem: u.kwh_gem,
                kwh_2018: u.kwh_2018,
                telefoon_opladen: u.telefoonOpladen,
                was_draaien: u.wasDraaien,
                elektrische_bbg: u.elektrischeBbq,
                televisie_kijken: u.televisieKijken,
                elektrische_auto_opladen: u.elektrischeAutoOpladen,
                tanden_borstel_opladen: u.tandenBorstelOpladen,
                sinaasappels_persen: u.sinaasappelsPersen,
                vaatwas: u.vaatwas,
                km_op_de_fiets: u.kmOpDeFiets,
                euro_s: u.euros,
            }))
        }
    }
};
