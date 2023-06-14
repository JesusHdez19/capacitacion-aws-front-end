
export async function getAllUsers() {

    try{
        const response = await fetch('http://44.212.157.81/api/note/all', {
            method: 'GET',
            headers: {'ngrok-skip-browser-warning': '69420'},
        });
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createUser(data) {
    const response = await fetch(`http://44.212.157.81/api/note`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'ngrok-skip-browser-warning': '69420'},
        body: JSON.stringify({title:data.title, content:data.content})
      })
    return await response.json();
}