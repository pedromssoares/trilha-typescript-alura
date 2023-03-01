export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Metodo ${propertyKey}`);
            console.log(`----- Parametros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------- retorno: ${JSON.stringify(retorno)}`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map