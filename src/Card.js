

const Card = (props) => {
    return <>


        <div className='mb-5 bg-pink-600 rounded-lg shadow-lg mr-4 cardSlide'>
            <picture>
                <source srcset={props.img + "?im_w=480 1x, " + props.img + "?im_w=960 2x"} media="(min-width: 2080px)" />
                <source srcset={props.img + "?im_w=320 1x, " + props.img + "?im_w=720 2x"} media="(min-width: 1440px)" />
                <source srcset={props.img + "?im_w=240 1x, " + props.img + "?im_w=480 2x"} media="(min-width: 1128px)" />
                <source srcset={props.img + "?im_w=240 1x, " + props.img + "?im_w=320 2x"} media="(min-width: 744px)" />
                <source srcset={props.img + "?im_w=240 1x, " + props.img + "?im_w=320 2x"} media="(min-width: 375px)" />
                <source srcset={props.img + "?im_w=320 1x, " + props.img + "?im_w=720 2x"} />
                <img className="w-full mr-44 rounded-t-lg" aria-hidden="true" alt="" src={props.img} />
            </picture>
            <div className="p-6 text-white">
                <h4 className="text-xl pb-4">{props.city}</h4>
                <p className="w-40">{props.km} kilometer away</p>
            </div>
        </div>
    </>
}

export default Card;