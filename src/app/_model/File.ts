export class Voucher {
    id: string;
    name: string;
    path: string;
    type: string;
    size: string;
    date: string;

    constructor(id: string, name: string, path: string, type: string, size: string, date: string) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.type = type;
        this.size = size;
        this.date = date;
    }
}