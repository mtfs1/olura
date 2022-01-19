import Module from "../src/entities/module"
import Lecture from "../src/entities/lecture"

describe("Module", () => {

    it("should be able to add lectures to modules", () => {
        const module = new Module("Fundamentals")
        const lecture =  new Lecture("Branching","https://youtube.com/1234")

        module.add(lecture)
        expect(module.includes(lecture)).toBeTruthy()
    })

    it("should not be able to add the same lecture twice in the same module", () => {
        const module = new Module("Fundamentals")
        const lecture = new Lecture("Branching","https://youtube.com/1234")
        const sameLecture = new Lecture("Branching","https://youtube.com/1234")

        module.add(lecture)
        module.add(lecture)
        module.add(sameLecture)
        expect(module.includes(lecture)).toBeTruthy()
        expect(module.numberOfLectures).toBe(1)
    })

    it("should not be able to add two lectures with same name in the same module", () => {
        const module = new Module("Fundamentals")
        const lecture = new Lecture("Branching","https://youtube.com/1234")
        const otherLecture = new Lecture("Branching","https://youtube.com/4321")

        module.add(lecture)
        module.add(otherLecture)
        expect(module.includes(lecture)).toBeTruthy()
        expect(module.numberOfLectures).toBe(1)
    })

    it("should be able to rearrange lectures order", () => {
        const module = new Module("Fundamentals")
        
        const lecture1 = new Lecture("Branching","https://youtube.com/branching")
        const lecture2 = new Lecture("Commiting","https://youtube.com/commiting")
        const lecture3 = new Lecture("Pushing","https://youtube.com/pushing")
        
        module.add(lecture1)
        module.add(lecture2)
        module.add(lecture3)

        module.move(lecture1, 3)
        expect(module.position(lecture2)).toBe(1)
        expect(module.position(lecture3)).toBe(2)
        expect(module.position(lecture1)).toBe(3)
    })

    it("should be able to remove a lecture", () => {
        const module = new Module("Fundamentals")
        const lecture = new Lecture("branching", "https://youtube.com/branching")

        module.add(lecture)
        module.remove(lecture)

        expect(module.numberOfLectures).toBe(0)
    })

    it("should handle trying to remove an unexisting lecture", () => {
        const module = new Module("Fundamentals")
        const lecture1 = new Lecture("branching", "https://youtube.com/branching")
        const lecture2 = new Lecture("commiting", "https://youtube.com/commiting")

        module.add(lecture2)
        module.remove(lecture1)

        expect(module.numberOfLectures).toBe(1)
    })

})