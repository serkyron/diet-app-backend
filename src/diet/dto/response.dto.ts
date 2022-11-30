export class ResponseDto<T> {
    public data: T[];

    constructor(data: T[]) {
        this.data = data;
    }
}