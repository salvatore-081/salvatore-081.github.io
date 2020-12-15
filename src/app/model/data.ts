export interface Data {
  fullName: string,
  bio: string,
  terminal: ContactsInfoAndCV,
  projects: Project[],
  contacts: TitleAndContent[],
  copyright: string
}

export interface Project {
  title: string,
  img: string,
  description: string,
  tags: string[],
  links: TitleAndContent[]
}

export interface TitleAndContent {
  title: string,
  content: string
}

export interface ContactsInfoAndCV {
  cv: TitleAndContent,
  links: TitleAndContent[],
  static: TitleAndContent[]
}