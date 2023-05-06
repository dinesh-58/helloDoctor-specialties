import rightArrow from './images//right-arrow.png'

export default function({title, icon}) {
    return (
            <div className="specialty">
                    <div>
                        <h4>{title}</h4>
                        <img class="rightArrow" src={rightArrow} />
                    </div>
                    <img src={icon} />
            </div>
    )
}
