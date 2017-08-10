import React,{ Component} from 'react';
import './index.less';
import { Link } from 'react-router-dom'
export default class Item extends Component{
  render() {
    const data = this.props.data
    return(
      <div>
          <Link to={'/detail/'+ data.id}>
              <div className='love-list'>
                <div className='love-left'>
                <span><img src={data.img} alt={data.title} /></span>
                </div>
                <div className='love-right'>
                    <label className='love-title'>{data.title}</label>
                    <span className='love-distance'>{data.distance}</span>
                    <p className='love-subTitle'>{data.subTitle}</p>
                    <label className='love-price'>价格:{data.price}</label>
                    <span className='love-mumber'>{data.mumber}</span>
                </div>
                <div style={{clear:'both'}}></div>
              </div>
          </Link>
      </div>
    )
  }

}
