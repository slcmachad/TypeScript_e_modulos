export function ValidaDebito(target: any,  propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    descriptor.value = function(valorDoDebito: number){
        if(valorDoDebito <= 0){
            throw new Error("Valor Precisa ser maior que ZERO!")
        }
        if(valorDoDebito > this.saldo){
            throw new Error("Saldo insuficiente!")
        }

        return originalMethod.apply(this, [valorDoDebito])
    }

    return descriptor;
}