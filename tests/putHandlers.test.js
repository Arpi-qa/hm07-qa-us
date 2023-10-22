// eslint-disable-next-line no-undef
const config = require('../config');

    {
      id: 5,
      quantity = 8
    }
  

const requestBody = {}

test('Response status 200', async () => {
	let  actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});


test('The response body should contains the expected data', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(Boolean(true));
});
