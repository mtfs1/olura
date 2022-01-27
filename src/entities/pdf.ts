import Material from "./material";

class Pdf implements Material {
    title: string
    url: string

    constructor(title: string, url: string) {
        this.title = title
        this.url = url
    }
}

export default Pdf