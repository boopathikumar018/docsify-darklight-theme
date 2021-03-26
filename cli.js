const path = require('path');
const cpy = require('cpy');

(async () => {
	await cpy('starter', path.join(process.cwd(), 'documentation'),
        {
            cwd: __dirname,
            dot: true
        }
    );
	console.log('Your documentation is ready!');
})();