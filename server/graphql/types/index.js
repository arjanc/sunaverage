import { mergeTypes } from 'merge-graphql-schemas';
import SunAverage from './SunAverage';
const typeDefs = [SunAverage];
export default mergeTypes(typeDefs, { all: true });