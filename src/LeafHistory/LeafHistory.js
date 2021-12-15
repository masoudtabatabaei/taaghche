import { useContext, useEffect, useState } from 'react';
import {LeafContext} from '../pages/Layout';
import {RandomHistory , Fetching} from '../RandomHistory';
import HistoryInfo  from '../HistoryInfo';
import './LeafHistory.css';

import goldoon from '../assets/img/goldoon.svg';
import leafHeader from '../assets/img/leaf-header.svg';
import leafTop from '../assets/img/leaftop.svg';

function LeafHistory(){
    const {myLeaf} = useContext(LeafContext);

    let historyItem = HistoryInfo();

    let defaultItems = [];
    for(let i=0 ; i<=4 ; i++){
        let randomHistoryItem = historyItem[Math.floor(Math.random()*historyItem.length)];
        defaultItems.push(randomHistoryItem);
    }

    const [listItems , setListItems] = useState(defaultItems);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        const isbottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (isbottom) {
            setIsFetching(true);
        }
    };

    useEffect(() => {
        if (!isFetching) {
            return;
        };
        fetchMoreListItems();
    }, [isFetching]);

    function fetchMoreListItems() {
        setTimeout(() => {
            let newItemHistory = historyItem[Math.floor(Math.random()*historyItem.length)];
            setListItems(prevHistoryItems => [...prevHistoryItems , newItemHistory]);
            setIsFetching(false);
        }, 2500);
    }

    return (
        <>
            <div className='calendar'></div>
            <div className='rooyesh_container'>
                <div className='leaf_header'>
                    <span className='leaf_number'>
                        <span>{myLeaf}</span>
                        <img src={leafHeader} className='va_m'/>
                    </span>
                </div>
                <div className='history_container'>
                    <div className='history'>
                        <div className='leafTop'>
                            <img src={leafTop} />
                        </div>
                        <div>
                            {listItems.map(listItem => <RandomHistory {...listItem}/>)}
                            {isFetching && <Fetching/>}
                        </div>
                        <div className='goldoon'>
                            <img src={goldoon} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeafHistory;