export class IPokemon {
    name: string;
    id: number;
    height: number;
    weight: number;
    type: string;

    constructor(name: string, id: number, height: number,
            weight: number, type: string) {
        this.name = name;
        this.id = id;
        this.height = height;
        this.weight = weight;
        this.type = type;
    }
}