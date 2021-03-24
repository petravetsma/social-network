export type Post = {
  id: number
  text: string
  likes: string
}

export type Photos = {
  small: string | null
  large: string | null
}

export type Contacts = {
  facebook: string | null
  website: string | null
  vk: string | null
  twitter: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type Profile = {
  aboutMe: string | null
  contacts: Contacts
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: Photos
}
