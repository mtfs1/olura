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

    it("should be able to rearrange modules order", () => {
        const course = new Course("azure-devops", 
            "Continuous Delivery and DevOps with Azure DevOps: Source Control with Git")

        const module1 = new Module("Fundamentals")
        course.add(module1)

        const module2 = new Module("Couse Overview")
        course.add(module2)

        const module3 = new Module("Source Control With Git")
        course.add(module3)

       course.move(module2, 1)

       expect(course.position(module2)).toBe(1)
       expect(course.position(module1)).toBe(2)
       expect(course.position(module3)).toBe(3)
    })

    it("should handle exceeding position while rearranging", () => {
        const course = new Course("azure-devops", 
            "Continuous Delivery and DevOps with Azure DevOps: Source Control with Git")

        const module1 = new Module("Fundamentals")
        course.add(module1)

        const module2 = new Module("Couse Overview")
        course.add(module2)

        const module3 = new Module("Source Control With Git")
        course.add(module3)

       course.move(module2, 10)

       expect(course.position(module1)).toBe(1)
       expect(course.position(module2)).toBe(2)
       expect(course.position(module3)).toBe(3)
    })
})