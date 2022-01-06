import Lecture from "./lecture"

class Module {
    private readonly lectures: Lecture[] = []
    private name: string

    constructor(name: string) {
        this.name = name       
    }

    add(lecture: Lecture) {
        this.lectures.push(lecture)
    }

    includes(lecture: Lecture): boolean {
        return this.lectures.includes(lecture)
    }
}

export default Module