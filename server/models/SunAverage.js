import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Types = Schema.Types;

const SunAverageSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    postcode6: {
        type: String,
        required: false,
    },
    postcode4: {
        type: Number,
        required: false,
    },
    gemeente: {
        type: String,
        required: false,
    },
    zu_gem: {
        type: Number,
        required: false,
    },
    zu_2018: {
        type: Number,
        required: false,
    },
    kwh_gem: {
        type: Number,
        required: false,
    },
    kwh_2018: {
        type: Number,
        required: false,
    },
    telefoon_opladen: {
        type: Types.Decimal128,
        required: false,
    },
    was_draaien: {
        type: Types.Decimal128,
        required: false,
    },
    elektrische_bbq: {
        type: Types.Decimal128,
        required: false,
    },
    televisie_kijken: {
        type: Types.Decimal128,
        required: false,
    },
    elektrische_auto_opladen: {
        type: Types.Decimal128,
        required: false,
    },
    tanden_borstel_opladen: {
        type: Types.Decimal128,
        required: false,
    },
    sinaasappels_persen: {
        type: Types.Decimal128,
        required: false,
    },
    vaatwas: {
        type: Types.Decimal128,
        required: false,
    },
    km_op_de_fiets: {
        type: Types.Decimal128,
        required: false,
    },
    euro_s: {
        type: Types.Decimal128,
        required: false,
    }   
});

const SunAverage = mongoose.model('sunlist', SunAverageSchema);

export default SunAverage;