export function ValidaDebito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
        if (valorDoDebito <= 0) {
            throw new Error("Valor Precisa ser maior que ZERO!");
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("Saldo insuficiente!");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    };
    return descriptor;
}
