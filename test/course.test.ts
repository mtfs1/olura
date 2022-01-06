import Module from "../src/entities/module"
import Lecture from "../src/entities/lecture"
import Course from "../src/entities/course"

describe("Course", () => {

    it("should be able to add modules do courses", () => {
        const course = new Course("azure-devops", 
            "Continuous Delivery and DevOps with Azure DevOps: Source Control with Git")
        const module = new Module("Fundamentals")
        const lecture =  new Lecture("Branching","https://youtube.com/1234")

        module.add(lecture)
        course.add(module)
        expect(course.includes(module)).toBeTruthy()
    })

})