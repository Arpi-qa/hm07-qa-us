// eslint-disable-next-line no-undef
const config = require('../config');

test('Response status 200', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`);
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('Body should contains the expected data', async () => {
	let actualResponsBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`);
		actualResponsBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponsBody.name).toBe("Strudel");
});