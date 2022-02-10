import * as React from "react";
import { BannersPropsInterface, BannersStateInterface } from './BannersInterface'
import { getBanners } from '../../../lib/restClient'
import { BannerRestClientInterface } from '../../../interface/BannersRestClientInterface'
import { Banner } from './BannersInterface'
import { withRouter } from 'react-router-dom';
import { Carousel, CarouselItem } from '../../common/carousel'
import "./Banner.css"

class Banners extends React.Component<
  BannersPropsInterface,
  BannersStateInterface
> {
  constructor(props: BannersPropsInterface) {
    super(props);
    this.state = {
      banners: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.updateStateData([], true)
    getBanners().then((res: BannerRestClientInterface) => {
      if (res && res.result) {
        const banners = res.data || []
        this.updateStateData(banners, false)
      } else {
        this.updateStateData([], false)
      }
    }).catch((err) => {
      console.log(err)
      this.updateStateData([], false)
    })
  }

  updateStateData (banners: Banner[], isLoading: boolean) {
    this.setState({
      banners: banners,
      isLoading: isLoading
    })
  }

  render() {
    return (
      <div>
        <div className="pretie_header-banner_title">
          <span>BANNER</span>
        </div>
        {!this.state.isLoading &&
          <Carousel banners={this.state.banners} hideDots={false} hideControl={false}>
            {(banner: Banner) => (
              <CarouselItem 
                img={banner.img}
                url={banner.url}
                title={banner.title}
                id={banner.id.toString()}
                key={banner.id.toString()}
              />
            )}
          </Carousel>
        }
        {this.state.isLoading &&
          <div className="retie_header-spinner_container">
            <img src="spinner.gif" alt="Spinner" />
          </div>
        }
      </div>
    );
  }
}

export default withRouter(Banners);
