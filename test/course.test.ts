import Module from "../src/entities/module"
import Lecture from "../src/entities/lecture"
import Course from "../src/entities/course"

describe("Course", () => {
    it("should be able to add lectures to modules", () => {
        const module = new Module("Fundamentals")
        const lecture =  new Lecture("Branching","https://youtube.com/1234")

        module.add(lecture)
        expect(module.includes(lecture)).toBeTruthy()
    })

    it("should be able to add modules do courses", () => {
        const course = new Course("azure-devops", 
            "Continuous Delivery and DevOps with Azure DevOps: Source Control with Git")
        const module = new Module("Fundamentals")
        const lecture =  new Lecture("Branching","https://youtube.com/1234")

        module.add(lecture)
        course.add(module)
        expect(course.includes(module)).toBeTruthy()
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
})