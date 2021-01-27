import React from 'react'

const Item = ({
    title,
    desc,
    descLink,
    backgroundImg,
    leftBtnTxt,
    leftBtnLink,
    rightBtnTxt,
    rigthBtnLink,
    twoButtons,
    first}) => {
    return (
        <div className="item" style={{

        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerThird">
                    <div className="item__buttons">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
