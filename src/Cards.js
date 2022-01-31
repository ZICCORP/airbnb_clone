import Card from "./Card";
import React, { useEffect, useState } from "react";




const Cards = () => {

    const [CardCurrentPosition, setCardCurrentPosition] = useState(0)
    const [cardSlides, setCardSlides] = useState(0)
    const [cardSlider, setCardSlider] = useState(0)
    const [cardCurrentMargin, setCardCurrentMargin] = useState(0)
    const [cardSlidesPerPage, setCardSlidesPerPage] = useState(2.37)


    const slideLeftCard = () => {
        if (CardCurrentPosition != 0) {
            cardSlider.style.marginLeft = cardCurrentMargin + (100 / cardSlidesPerPage) + '%';
            setCardCurrentMargin(cardCurrentMargin + (100 / cardSlidesPerPage))
            setCardCurrentPosition(CardCurrentPosition - 1)

        }
    }

    const slideRightCard = () => {

        if (CardCurrentPosition != cardSlides) {
            cardSlider.style.marginLeft = cardCurrentMargin - (100 / cardSlidesPerPage) + '%';
            setCardCurrentMargin(cardCurrentMargin - (100 / cardSlidesPerPage))
            setCardCurrentPosition(CardCurrentPosition + 1)

        }


    }


    useEffect(() => {
        setCardSlides(document.getElementsByClassName('cardSlide').length)
        setCardSlider(document.getElementById('cardSlider'))


    }, [])

    return <>
        <div className='bg-white pl-6 pr-7 pb-24' >
            <div className='-mt-24 relative'>
                <h1 className="text-2xl pb-6">Inspiration for your future next trip</h1>
                <div className="flex absolute top-12 right-8">
                    <span onClick={() => slideLeftCard()} className="mr-5 border py-2 px-3  rounded-full border-gray-400"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" fill="#cbd5e1" x="0px" y="0px" width="6.593px" height="10.88px" viewBox="0 0 80.593 122.88" enableBackground="new 0 0 80.593 122.88" ><g><polygon points="80.593,0 49.771,0 0,61.44 49.771,122.88 80.593,122.88 30.82,61.44 80.593,0" /></g></svg></span>
                    <span onClick={() => slideRightCard()} className="border py-2 px-3 rounded-full border-gray-400"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#cbd5e1" id="Layer_1" x="0px" y="0px" width="6.593px" height="10.88px" viewBox="0 0 80.593 122.88" enableBackground="new 0 0 80.593 122.88" ><g><polygon points="0,0 30.82,0 80.593,61.44 30.82,122.88 0,122.88 49.772,61.44 0,0" /></g></svg></span>

                </div>
                <div className="flex overflow-hidden -mr-3" id="cardSlider">
                    <Card img="https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg" city="Lagos" km="1" />
                    <Card img="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg" city="Benin City" km="244" />
                    <Card img="https://a0.muscache.com/im/pictures/5d597532-b55a-439d-baf7-9c0875423f44.jpg" city="Port-Harcourt" km="434" />
                    <Card img="https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg" city="Ikeja" km="18" />
                </div>
            </div>
        </div>
    </>
}

export default Cards;