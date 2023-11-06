class API {
    configAPI(method, endpoint, body_request, auth) {
        var url = baseURL + endpoint
        cy.request({
            method: method,
            url: url,
            headers: {
                'Authorization': auth
            },
            body: body_request,
            failOnStatusCode: false
        }).then((response) => {
            cy.wrap(response).as('response')
        })
    }
}
export default API;