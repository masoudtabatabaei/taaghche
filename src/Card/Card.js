import { useNavigate } from 'react-router-dom';
import './Card.css';

import dotsLine from '../assets/img/dors-line.svg';
import leafGreen from '../assets/img/leaf-green.svg';
import arrowGreen from '../assets/img/arrowGreen.png';

function CardItem(props){
    const navigate = useNavigate();
    
    let statusHeader = '';
    if(props.statusHeader !== '') {
        let statusHeaderText = (props.status === "active") ? "مهلت استفاده" : "استفاده شده";
        statusHeader = (
            <div className='statusHeader'>
                <span>{statusHeaderText}</span>
                <span>{props.statusHeader}</span>
            </div>
        );
    }

    const changeRoute = (id , details) => {
        navigate('/card/' + id , {
            state : {
                details: details,
            }
        });
    };

    let callToActionButton = '';
    if(props.hasCallToActionButton){
        callToActionButton = (
            <div className='view_btn' onClick={() => changeRoute(props.id , {status:props.status , cover:props.cover , needleLeaf:props.needleLeaf , details: props.moreDetails})}> 
                    مشاهده و دریافت
                    <img src={arrowGreen} />
            </div>
        );
    }

    return (
        <div className={'card ' + props.status}>
            <div className='header'>
                <img src={props.cover}/>
                { statusHeader }
                <img src={dotsLine} className='spliter_line'/>
            </div>
            <div className='footer'>
                <div>
                    <span>{props.needleLeaf}</span>
                    <img src={leafGreen} className='va_m cardLeaf'/>
                </div>
                { callToActionButton }
            </div>
        </div>
    );
}

export default CardItem;