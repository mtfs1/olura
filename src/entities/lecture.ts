class lecture {
    description: string
    videoUrl: string

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
}

export default lecture