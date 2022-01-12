import Lecture from "./lecture"

class Module {
    private readonly lectures: Lecture[] = []
    name: string

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

    move(lecture: Lecture, to: number) {
        const from = this.position(lecture)

        if (from == -1  || to > this.lectures.length || to <= 0)
            return

        this.lectures.splice(to - 1, 0, this.lectures.splice(from - 1, 1)[0])
    }

    position(lecture: Lecture): number {
        const lectureInModule = this.lectures.find(elm => elm.equals(lecture))

        if (!lectureInModule)
            return -1

        return this.lectures.indexOf(lectureInModule) + 1
    }
}

export default Module