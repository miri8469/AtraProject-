function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
export const actionsImage = new Proxy(
    {},
    {
        get: function (target, prop) {
            debugger;
            if (target[prop] === undefined) {
                console.log(convertActionNameToType(prop));

                return function (args) {
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    }
                }
            }
            else
                return target[prop];
        }
    }

)