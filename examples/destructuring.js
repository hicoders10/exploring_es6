/**
 * Get configuration sample function
 */

const getConfiguration = () => ({
    apiUrl: 'http://api.com',
    connectionTimeout: 10000,
    mode: 'https',
    fallbackApiUrls: ['https://api-v2.com', 'https://api-v3.com', 'https://api-v4.com']
})

// Get only some properies of object
const {apiUrl, mode} = getConfiguration();

// Assigning with different name
const {apiUrl: myCustomApiUrlName, mode: myCustomMode} = getConfiguration();

// Get only some props of array
const [fallbackApiUrl, ...otherFallbackApiUrls] = getConfiguration().fallbackApiUrls
// Ignore elements
//const [fallbackApiUrl, ,...otherFallbackApiUrls] = getConfiguration().fallbackApiUrls

console.log(`
    apiUrl: ${apiUrl}
    mode: ${mode}
    myCustomApiUrlName: ${myCustomApiUrlName}
    myCustomMode: ${myCustomMode}
    fallbackApiUrl: ${fallbackApiUrl}
    otherFallbackApiUrls: ${otherFallbackApiUrls}
`);

/**
 * As function params
 */

 const request = async ({apiUrl, connectionTimeout, mode}) => {
    // some async operation
    return Promise.resolve({code: 200, headers: [], data: 'mydata'});
 }

 (async () => {
    const {data, code} = await request(getConfiguration());
    console.log(`
    async function result
    data: ${data}
    code: ${code}
   `);
 })()
