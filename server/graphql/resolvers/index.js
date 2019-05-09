import { mergeResolvers } from 'merge-graphql-schemas';

import SunAverage from './SunAverage';

const resolvers = [SunAverage];

export default mergeResolvers(resolvers);