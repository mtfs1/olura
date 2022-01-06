import Lecture from "./lecture"

class Module {
    private readonly lectures: Lecture[] = []
    private name: string

    constructor(name: string) {
        this.name = name       
    }

    add(lecture: Lecture) {
        if (!this.lectures.some(
                elm => elm.description == lecture.description))
            this.lectures.push(lecture)
    }

    includes(lecture: Lecture): boolean {
        return this.lectures.some(elm => elm.equals(lecture))
    }

    get numberOfLectures(): number {
        return this.lectures.length;
    }
}

export default Module