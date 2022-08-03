export function getData() {
    return fetch('http://localhost:8080/users')
        .then(data => data.json())
}

export function setData(name, email, phone) {
    return fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            name: name,
            email: email,
            phone: phone
         }),
    })
}

export function getUserData(id) {
    const user = fetch(`http://localhost:8080/users/${id}`).json()
    console.log(user.id + " " + user.rev)
    return fetch(`http://localhost8080/users/${user.id}/${user.rev}`, { method: 'DELETE' })
}