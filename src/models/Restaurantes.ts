class Restaurant {
  title: string
  infos: string[]
  assessment: string
  description: string
  image: string
  id: number

  constructor(
    title: string,
    infos: string[],
    assessment: string,
    description: string,
    image: string,
    id: number
  ) {
    this.title = title
    this.infos = infos
    this.assessment = assessment
    this.description = description
    this.image = image
    this.id = id
  }
}

export default Restaurant
