export class Goal {
    public showDescription: boolean;
    constructor( public day: string , public id: number , public name: string, public description: string , public completeDate: Date) {
    this.showDescription = false;
    }
}
