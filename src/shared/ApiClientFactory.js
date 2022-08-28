const ApiClientFactory = (client) => {
    const doPost = async ({url = '', data = null}) => {
        try {
            const response = await client.post(url, data);
            return response.data;
        } catch (error) {
            throw error
        }
        
    }
    const doGet = async ({url = ''}) => {
        try {
            const response = await client.get(url);
            return response.data;
        } catch (error) {
            throw error
        }

    }
    const doDelete = async ({url='', data = null}) => {
        try {
            const response = await client.delete(url, {
                headers: {
                },
                data: data
            });
            return response.data
        } catch (error) {
            throw error
        }
    }
    const doPut = async ({url='', data=null}) => {
        try {
            console.log('apiclient factory1 => ', data);
            const response = await client.put(url, data)
            console.log('apiclient factory2 => ', response);
            console.log('apiclient factory3 => ', response.data);
            alert(`api clint factory`)
            return response.data
        } catch (error) {
            throw error
        }
    }
  
    return {doPost, doGet, doDelete, doPut}
}

export default ApiClientFactory
