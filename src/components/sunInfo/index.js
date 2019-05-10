import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import query from './../../queries/getSunAverageByZipcode';

class SunInfo extends React.PureComponent {
    render() {
        const { zipcode } = this.props;

        console.log('render suninfo');
        if (!zipcode) {
            return (
                <div>Vul eerst een postcode in.</div>
            );
        }
        
        return (
            <Query query={query} variables={{ zipcode }}>
            {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                console.log('data: ', data);
                if (!data.sunAverage) {
                    return (
                        <div>Niks gevonden, probeer eens '1065VL' of '8471RK'</div>
                    );
                }

                return (
                    <div>
                        SunInfo: { zipcode }<br/>
                        - {data.sunAverage.gemeente}
                    </div>
                );
            }}
            </Query>
        );
    }
}

SunInfo.propTypes = {
    zipcode: PropTypes.string,
};

export default SunInfo;