import React from 'react';
import { Transition } from 'react-transition-group';

function LoaderCircle(props) {


    return (
        <div className='wrap'>
            <Transition
                in={props.loaderVisible}
                timeout={500}
                mountOnEnter
                unmountOnExit
                onEnter={() => console.log('onEnter')}
                onEntering={() => console.log('onEntering')}
                onEntered={() => console.log('onEntered')}
                onExit={() => console.log('onExit')}
                onExiting={() => console.log('onExiting')}
                onExited={() => console.log('onExited')}
            >
                {
                    state => (<div className={`circle ${state}`}></div>)
                }
            </Transition>
            
        </div>
    )
}

export default LoaderCircle