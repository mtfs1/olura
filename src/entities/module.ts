import Lecture from "./lecture"

class Module {
    public lectures: Lecture[] = []
    public name: string

    constructor(name: string) {
        this.name = name       
    }

    add(lecture: Lecture) {
        this.lectures.push(lecture)
    }
}

export default Module