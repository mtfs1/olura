import Module from "./module"

class Course {
    private readonly modules: Module[] = []
    private reference: string
    private description: string

    constructor(reference: string, description: string) {
        this.reference = reference
        this.description = description
    }

    add(module: Module) {
        this.modules.push(module)
    }

    includes(module: Module): boolean {
        return this.modules.includes(module)
    }

    move(module: Module, to: number) {
        const from = this.position(module)

        if (from == -1  || to > this.modules.length || to <= 0)
            return

        this.modules.splice(to - 1, 0, this.modules.splice(from - 1, 1)[0])
    }

    position(module: Module): number {
        const moduleInCourse = this.modules.find(elm => elm.name == module.name)

        if (!moduleInCourse)
            return -1

        return this.modules.indexOf(moduleInCourse) + 1
    }
}

export default Course