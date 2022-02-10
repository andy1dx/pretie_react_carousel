import { RouteComponentProps } from "react-router";

export interface Banner {
  id: number,
  title: string,
  img: string,
  url: string
}

export interface BannersPropsInterface extends RouteComponentProps {}

export interface BannersStateInterface {
  banners: Banner[],
  isLoading: boolean
}
