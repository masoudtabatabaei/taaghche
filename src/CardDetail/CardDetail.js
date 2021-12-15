import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import copyTextToClipboard from '../helper/CopyToClipboard';
import {LeafContext} from '../pages/Layout';
import CardItem from "../Card/Card";
import './CardDetail.css';

import leafGreen from '../assets/img/leaf-green.svg';
import leafHeader from '../assets/img/leaf-header.svg';



function CardDetail(props){
    const navigate = useNavigate();

    const {myLeaf , setMyLeaf} = useContext(LeafContext);
    const [isVisibleModal , setVisibleModal] = useState(false);
    const [copyButtonText , changeCopyButtonText] = useState("کپی کردن");

    let { id } = useParams();
    const info = useLocation().state.details;

    let getRewardButton = {state : '' , text : 'دریافت جایزه'};
    if(info.needleLeaf > myLeaf) {
        getRewardButton.state = 'disabled';
        getRewardButton.text = 'نیاز به برگهای بیشتری دارید';
    }

    if(info.status !== "active") {
        getRewardButton.state = 'disabled';
        getRewardButton.text = 'این کد قبلا استفاده شده است'
    }

    let useRules = info.details.useRules.map((rule , index) => {
        return (<li key={index}>{rule}</li>)
    });

    let useGuides = info.details.useRules.map((guide , index) => {
        return (<li key={index}>{guide}</li>)
    });

    const copyCodeText = () => {
        let codeText = document.querySelector(".codeBox").textContent;
        copyTextToClipboard(codeText).then(() => {
            changeCopyButtonText("کپی شد");
            setTimeout(() => {
                changeCopyButtonText("کپی کردن");
            }, 1000);
        }).catch((err) => {
            console.log(err);
        });
    };

    const handleGetReward = () => {
        let updatedMuLeaf = myLeaf - Number(info.needleLeaf);
        setMyLeaf(updatedMuLeaf);
        setVisibleModal(true);
    }

    const closeModal = () => {
        setVisibleModal(false);
        setTimeout(() => {
            navigate('/card');
        } , 1000);
    };

    let carItemProps = {
        id : id ,
        status : info.status ,
        statusHeader : info.statusHeader ,
        cover: info.cover ,
        needleLeaf : info.needleLeaf ,
        hasCallToActionButton : false
    };

    const cardModal = (
        <div className='cardModal'>
            <div className='modalDialogueBox'>
                <span className='closeSymbol' style={{cursor:'pointer'}} onClick={closeModal}>&#10006;</span>
                <div className='modalDetails'>
                    <div className='content'>
                        <h3>تبریک :)</h3>
                        <p className='bold' style={{ fontSize:'0.95em'}}>جایزه با موفقیت فعال شد</p>
                        <p style={{fontSize:'0.82em',color:'#888888'}}>میتونی این جایزه رو در قسمت<br/> جایزه های من ببینی</p>
                        <div className='deadlineText'><span style={{color:'#cccccc'}}>مهلت استفاده</span> 10 روز دیگر</div>
                        <div className='offCode'>
                            <div>
                                <button className='copyButton bold' onClick={copyCodeText}>{copyButtonText}</button>
                            </div>
                            <div className='codeBox'>taaghche-azar</div>
                        </div>
                        <button className='closeModalButton bold' onClick={closeModal}>متوجه شدم</button>
                    </div>
                    <div>
                        <CardItem {...carItemProps}/>
                    </div>
                </div>
            </div>       
        </div>
    );

    return (
        <>
            { isVisibleModal && cardModal }
            <div className='leaf_header padder_10'>
                <span className='leaf_number'>
                    <span>{myLeaf}</span>
                    <img src={leafHeader} className='va_m'/>
                </span>
            </div>
            <div className='details_container'>
                <div>
                    <div>
                        <div className={'cover ' + info.status}>
                            <img src={info.cover}/>
                        </div>
                        <div className='reward_details'>
                            <div>
                                <button onClick={handleGetReward} className='getReward_btn' disabled={getRewardButton.state}>{getRewardButton.text}</button>
                            </div>
                            <div>
                                <span>{info.needleLeaf}</span>
                                <img src={leafGreen} className='va_m cardLeaf'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='details_content'>
                        <h2>{info.details.title}</h2>
                        <br/>
                        <h3>قوانین استفاده</h3>
                        <ul>
                            { useRules }
                        </ul>
                        <br/>
                        <h3>راهنمای استفاده</h3>
                        <ul>
                            { useGuides }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDetail;