import Module from "./module"

class Course {
    public modules: Module[] = []
    public reference: string
    public description: string

    constructor(reference: string, description: string) {
        this.reference = reference
        this.description = description
    }

    add(module: Module) {
        this.modules.push(module)
    }
}

export default Course