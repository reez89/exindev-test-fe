export interface ItemDetailResponseInterface {
  data: {
    id: number
    name: string
    logo_id: number
    logo_url: LogoUrl
  }
}
export interface LogoUrl {
  src: string
  srcset: string
}
