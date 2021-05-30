import React  from 'react';
import LoadingImg from './loading.gif';

function Loading(){
    return (
        <div style={{textAlign:'center',minHeight:'100%',position:'relative'}}>
            <img src={LoadingImg} alt="Loading... " style={{ display: 'block', width: '200px', margin: 'auto' }} />
        </div>


    )
}

export default Loading;