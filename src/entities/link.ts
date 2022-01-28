import Material from "./material";

class Link implements Material {
    title: string
    url: string

    constructor(title: string, url: string) {
        this.title = title
        this.url = url
    }
}

export default Link