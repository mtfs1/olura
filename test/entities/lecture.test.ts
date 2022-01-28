import Lecture from "../src/entities/lecture"
import Material from "../src/entities/material"
import Pdf from "../src/entities/pdf"
import Link from "../src/entities/link"

describe("Lecture", () => {

    it("should be able to add further material to lectures", () => {
        const lecture: Lecture = new Lecture("Branching", "https://youtube.com/branching")
        const branchingPdf: Material = new Pdf("Branching", "https://storage/branching.pdf")
        lecture.add(branchingPdf)

        expect(lecture.includes(branchingPdf)).toBeTruthy()
    })

    it("should be able to remove further material from lectures", () => {
        const lecture: Lecture = new Lecture("Branching", "https://youtube.com/branching")
        const branchingPdf: Material = new Pdf("Branching", "https://storage/branching.pdf")
        lecture.add(branchingPdf)
        lecture.remove(branchingPdf)

        expect(lecture.includes(branchingPdf)).not.toBeTruthy()
    })

    it("should be able to add further links to lectures", () => {
        const lecture: Lecture = new Lecture("Branching", "https://youtube.com/branching")
        const link: Material = new Link("Branching", "https://storage/branching.pdf")
        lecture.add(link)

        expect(lecture.includes(link)).toBeTruthy()
    })

})