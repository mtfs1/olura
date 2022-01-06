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
}

export default Course