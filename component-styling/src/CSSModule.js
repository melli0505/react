import React from 'react';
import { ContextExclusionPlugin } from 'webpack';
import styles from './CSSModule.module.scss';

// const cx = classNames.bind(styles);

const CSSModule = () =>{
    return( // ES6 문법 템플릿 리터럴 이용. ``(백틱) 와 ${} 사용. 다른 방법 아래에.
    //  <div className={[styles.wrapper, styles.inverted].join(' )}>
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
        // classNames를 이용한 bind 코드
        // <div className={cx('wrapper', 'inverted')}>
        //     안녕하세요, 저는 <span className="something">CSS Module!</span>
        // </div>
    );
}

export default CSSModule;