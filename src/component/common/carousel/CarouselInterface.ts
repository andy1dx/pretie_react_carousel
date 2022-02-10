export interface CarouselPropsInterface {
  banners: any[],
  children: (props: any) => JSX.Element,
  visibleItemsNumber?: number,
  hideDots: boolean,
  hideControl: boolean
}
