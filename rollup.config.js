import { resolve } from 'path';

export default {
	plugins: [{
		resolveId: function ( importee, importer ) {
			if ( importee[0] === '@' ) return resolve( 'src', importee.slice( 2 ) );
		}
	}]
};
