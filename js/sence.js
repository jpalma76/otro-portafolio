/* API CONSTUIDA CON MAP
   otras capacitaciones vigilante privado y sodimac */
const url_sence = '../database/sence.json'

fetch(url_sence)
.then(response => response.json())
.then(data => {
    
    let insert = document.getElementById('info-capacitaciones-laborales')
    data.map((curso) => {
    insert.innerHTML += `
        <tr>
            <td>${curso.id}</td>
            <td>${curso.name}</td>
            <td>${curso.platform}</td>
        </tr>
            `
    })

})