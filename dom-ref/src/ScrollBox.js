import React, {Component} from 'react';

class ScrollBox extends Component{

    scrollToBottom = () => {
        const scrollHeight = this.box.scrollHeight;
        const ClientHeight = this.box.clientHeight;
        this.box.scrollTop = scrollHeight - ClientHeight; 
    }

    render(){
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative',
            margin: '20px'
        }

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(pink, violet)'
        }
        return(
            <div 
                style = {style}
                ref = {(ref) => {this.box = (ref)}}
            >
                <div style={innerStyle}></div>
            </div>
        );
    }
}

export default ScrollBox;