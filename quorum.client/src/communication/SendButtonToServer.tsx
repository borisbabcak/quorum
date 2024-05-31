async function SendButtonToServer(name: string, endpoint: string) {
    const response = await fetch(endpoint);
    const data = await response.text();
    console.log(data, name);
}

export default SendButtonToServer;