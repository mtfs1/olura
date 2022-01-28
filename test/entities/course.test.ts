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

    it("should handle negative position while rearranging", () => {
        const course = new Course("azure-devops", 
            "Continuous Delivery and DevOps with Azure DevOps: Source Control with Git")

        const module1 = new Module("Fundamentals")
        course.add(module1)

        const module2 = new Module("Couse Overview")
        course.add(module2)

        const module3 = new Module("Source Control With Git")
        course.add(module3)

        course.move(module2, 0)
        course.move(module3, -2)

        expect(course.position(module1)).toBe(1)
        expect(course.position(module2)).toBe(2)
        expect(course.position(module3)).toBe(3)
    })

    it("should not be able to add modules with same name", () => {
        const course = new Course("azure-devops", 
            "Continuous Delivery and DevOps with Azure DevOps: Source Control with Git")

        const module1 = new Module("Fundamentals")
        course.add(module1)

        const module2 = new Module("Fundamentals")
        course.add(module2)

        expect(course.includes(module1)).toBeTruthy()
        expect(course.includes(module2)).toBeFalsy()
        expect(course.numberOfModules).toBe(1)
    })

    it("should be able to move a lecture through different courses", () => {
        const course = new Course("azure-devops", 
            "Continuous Delivery and DevOps with Azure DevOps: Source Control with Git")

        const module1 = new Module("Fundamentals")
        course.add(module1)

        const module2 = new Module("Couse Overview")
        course.add(module2)

        const module3 = new Module("Source Control With Git")
        course.add(module3)

        const lecture1 = new Lecture("Introduction", "https://youtube.com/introduction")
        const lecture2 = new Lecture("Commiting", "https://youtube.com/commiting")
        const lecture3 = new Lecture("Branchng", "https://youtube.com/branching")
        const lecture4 = new Lecture("Merging", "https://youtube.com/merging")

        module1.add(lecture1)
        module3.add(lecture2)
        module3.add(lecture3)
        module3.add(lecture4)

        course.moveLecture(lecture1, module1, module3, 2)

        expect(module1.numberOfLectures).toBe(0)
        expect(module3.position(lecture2)).toBe(1)
        expect(module3.position(lecture1)).toBe(2)
        expect(module3.position(lecture3)).toBe(3)
        expect(module3.position(lecture4)).toBe(4)
    })

})