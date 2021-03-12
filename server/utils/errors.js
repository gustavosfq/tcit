class GeneralError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }

    get code() {
        switch (this.constructor.name) {
            case BadRequest.name:
                return 400;
            case IamATeapot.name:
                return 418;
            default:
                return 500;
        }
    }
}

class BadRequest extends GeneralError {}
class IamATeapot extends GeneralError {}

module.exports = {
    GeneralError,
    BadRequest,
    IamATeapot,
};