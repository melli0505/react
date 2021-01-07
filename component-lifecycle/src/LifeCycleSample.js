import React, {Component} from 'react';

class LifeCycleSample extends Component{
    state = {
        color : null,
        number : 0
    }

    myref = null;

    constructor(props){
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, prevState){ // 부모에게서 받은 color을 state에 동기화
        console.log('getDerivedStateFromProps');
        if(nextProps.color != prevState.color){
            return {color: nextProps.color};
        }
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){ // nextState의 number가 4로 끝나면 false
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }

    // eslint-disable-next-line react/no-typos
    componentWillUnMount(){
        console.log('componentWilUnlMount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }
    
    getSnapshotBeforeUpdate(prevProps, prevstate){ // DOM에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환하여 이것을 componentDidUpdate에서 조회
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myref.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('color before update', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.state.color
        };

        return ( // missing.value가 존재하지 않으므로 에러 발생, 렌더링 안 됨.
            <div>
                {this.props.missing.value} 
                <h1 style={style} ref={ref => this.myref = ref}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;