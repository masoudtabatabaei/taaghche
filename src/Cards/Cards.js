import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import RewardsInfo from '../RewardsInfo';
import {LeafContext} from '../pages/Layout';
import CardItem from "../Card/Card";
import './Cards.css';

import leafHeader from '../assets/img/leaf-header.svg';

function Card(){
    const {myLeaf} = useContext(LeafContext);

    const navigate = useNavigate();

    const changeRoute = (id , details) => {
        navigate('/card/' + id , {
            state : {
                details: details,
            }
        });
    };

    let rewardsInfo = RewardsInfo().map(info => {
        let statusHeader = '';
        if(info.statusHeader !== '') {
            let statusHeaderText = (info.status === "active") ? "مهلت استفاده" : "استفاده شده";
            statusHeader = (
                <div className='statusHeader'>
                    <span>{statusHeaderText}</span>
                    <span>{info.statusHeader}</span>
                </div>
            );
        }

        let carItemProps = {
            id : info.id ,
            status : info.status ,
            statusHeader : info.statusHeader ,
            cover: info.cover ,
            needleLeaf : info.needleLeaf ,
            hasCallToActionButton : true ,
            moreDetails: info.moreDetails
        };

        return (
            <div key={info.id} className='card_container'>
                <CardItem {...carItemProps} />
            </div>
        );
    });

    return (
        <>
            <div className='leaf_header padder_10'>
                <span className='leaf_number'>
                    <span>{myLeaf}</span>
                    <img src={leafHeader} className='va_m'/>
                </span>
            </div>
            <div className='cards_container'>
                { rewardsInfo }
            </div>
        </>
    );
}

export default Card;