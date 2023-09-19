/* API CONSTUIDA CON MAP */
const url = '../database/skills.json'

fetch(url)
.then(response => response.json())
.then(data => {
    
    let insert = document.getElementById('info-skills')
    data.map((skill) => {
    insert.innerHTML += `
        <tr>
            <td>${skill.id}</td>
            <td>${skill.name}</td>
            <td>${skill.platform}</td>
            <td><a href="${skill.url}"><img class="image" src="${skill.url}" /></a></td>
        </tr>
            `
    })
})