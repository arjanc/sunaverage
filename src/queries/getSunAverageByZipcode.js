import gql from 'graphql-tag';

export default gql`
    query GetSunAverage($zipcode: String) {
        sunAverage(postcode6: $zipcode) {
            id
            postcode6
            postcode4
            gemeente
            zu_gem
            kwh_gem
            was_draaien
            euro_s
        }
    }
`;