import Material from "./material"

class lecture {
    description: string
    videoUrl: string
    private readonly materials: Material[] = []

    constructor(description: string, videoUrl: string) {
        this.description = description
        this.videoUrl = videoUrl
    }

    equals(otherLecture: lecture): boolean {
        if (this.description != otherLecture.description)
            return false
        
        if (this.videoUrl != otherLecture.videoUrl)
            return false

        return true
    }

    add(material: Material) {
        this.materials.push(material)
    }

    remove(material: Material) {
        if (!this.includes(material))
            return;
        
       const position = this.materials.indexOf(material)
       this.materials.splice(position, 1)
    }

    includes(material: Material) {
        return this.materials.includes(material)
    }
}

export default lecture