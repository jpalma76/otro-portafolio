/* API CONSTRUIDA CON JQUERY Y AJAX */
const API_url = '../database/cursos.json'

$.ajax({
    type: "GET",
    url: API_url,
    success: function (response) {
        let cursos = response
        let template = ''
        cursos.forEach(curso => {
            template += `
                <tr>
                    <td>${curso.id}</td>
                    <td>${curso.name}</td>
                    <td>${curso.platform}</td>
                </tr>
            `
        });
        $('#info-cursos').html(template)
    }
});
