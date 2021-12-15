
import leafback from './assets/img/leafback.png';

function RandomHistory(props){
    let status = "";
    let leafNumber = props.leafNumber;
    if(props.status !== "active"){
        status = "consumed";
        leafNumber *= -1 ;
    }

    return (
        <div>
            <div className='stem_container'>
                <div className={`leafback ${status}`}>
                    <img src={leafback} />
                    <div className='leaf_info'>
                        <div className='time'>{props.time}</div>
                        <div className='description'>
                            <div>{props.title}</div>
                            <div className='leaf_history'><bdi>{leafNumber}</bdi></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Fetching(){
    return (
        <div>
            <div className='stem_container'>
                <div className='leafback fetching'>
                    <img src={leafback} />
                    <div className='leaf_info'>
                        <div className='time'></div>
                        <div className='description'>
                            <div>در حال بارگذاری ...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {RandomHistory , Fetching};