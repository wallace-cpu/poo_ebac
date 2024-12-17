
class Veiculo {
    constructor(marca, modelo, ano) {
        if (new.target === Veiculo) {
            throw new Error("A classe Veiculo não pode ser instanciada diretamente.");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}


class Carro extends Veiculo {
    constructor(marca, modelo, ano, tipoCombustivel) {
        super(marca, modelo, ano);
        this.tipoCombustivel = tipoCombustivel;
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()} - Combustível: ${this.tipoCombustivel}`;
    }
}


class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindrada) {
        super(marca, modelo, ano);
        this.cilindrada = cilindrada;
    }

    exibirDetalhes() {
        return `${super.exibirDetalhes()} - Cilindrada: ${this.cilindrada}cc`;
    }
}


const carro1 = new Carro("Toyota", "Corolla", 2020, "Gasolina");
const carro2 = new Carro("Honda", "Civic", 2022, "Híbrido");
const moto1 = new Moto("Yamaha", "MT-07", 2021, 689);


console.log(carro1.exibirDetalhes());
console.log(carro2.exibirDetalhes());
console.log(moto1.exibirDetalhes());

