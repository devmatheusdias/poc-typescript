function notFound(resource = "Item") {
    return {
        type: "notFound",
        message: `${resource} not found!`
    }
}

function conflict(resource = "item") {
    return {
        type: "conflict",
        message: `This ${resource} has already been added!`
    }
}

function invalidPassword() {
    return {
        type: "invalidPassword",
        message: `The password are wrong!`
    }
}

function unauthorized() {
    return {
        type: "unauthorized",
        message: `not authorized`
    }
}

export const errors = {
    notFound,
    conflict,
    invalidPassword,
    unauthorized
}