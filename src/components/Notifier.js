import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { deleteNotifier, notifierTimer } from '../actions';

const NotifierItem = ({ item }) => {
    const dispatch = useDispatch();

    const hideNotifier = () => {
        dispatch( deleteNotifier(item.id) );
    }

    return(
        <div 
            className={`notifier__item ${item.status}`}
            onClick={hideNotifier}
        >{item.text}</div>
    );
}


const Notifier = React.memo(() => {
    const dispatch = useDispatch();
    const notifications = useSelector( state => state.notifier.notifications );
    let timer = null;

    useEffect( () => {
        if( notifications.length > 0){
            if( timer === null ){
                timer = setInterval( () => {
                    dispatch( deleteNotifier( notifications[ 0 ].id ) );
                }, 1000 );
            }
        } else {
            clearInterval( timer );
        }
        return () => {
            clearInterval( timer );
        }
    }, [ notifications.length ]);


    return(
        <div className="notifier">
            <div className="notifier__container">
                {
                    notifications.map( notifier => {
                        return(
                            <NotifierItem key={notifier.id} item={ notifier } />
                        )
                    })
                }
            </div>

        </div>
    );
});


export default Notifier;