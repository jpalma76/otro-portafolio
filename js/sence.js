/* API CONSTUIDA CON MAP */
const url_sence = '../database/sence.json'

fetch(url_sence)
.then(response => response.json())
.then(data => {
    console.log(data);
    
let insert = document.getElementById('info-capacitaciones-laborales')
data.map((curso) => {
    insert.innerHTML += `
        <tr>
            <td>${curso.id}</td>
            <td>${curso.name}</td>
            <td>${curso.platform}</td>
            <td><a href="${curso.url}"><img class="image" src="${curso.url}" /></a></td>
        </tr>
            `
    })

})