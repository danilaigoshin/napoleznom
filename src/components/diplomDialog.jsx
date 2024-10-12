import { createPortal } from "react-dom";
import { useRef, useEffect} from "react";
import styled from 'styled-components';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DiplomTexts } from '../JS/diplomTexts';
import { Paragraph } from './Texts';
import { breakpoints } from "./breakpoints";

export const DiplomItemWrapper = styled.dialog`
  width: 770px;
  height: 700px;
  background-color: transparent;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:focus{
    outline: none;
    border-color: transparent;
  }
  &::backdrop{
    background-color: oklch(0% 0 0 / 40%);
  }

  @media (max-width: ${breakpoints.smallTablet}){
    width: clamp(300px, 90vw, 720px);

  }

`;

export const DiplomItemInner = styled.div`
  width: 93.5%;
  height: max-content;
  padding: 40px 20px 10px;
  background-color: var(--whiteColor);
  border-radius: 24px;
  position: relative;
  bottom: -50px;
  position: relative;

  @media (max-width: ${breakpoints.smallTablet}){
    width: 100%;
    padding: 20px 0 10px;
    border-radius: 20px;
  }

  @media (max-width: ${breakpoints.mobile}){
    padding: 0;
  }

  @media (max-width: ${breakpoints.smallMobile}){
    padding: 0;
  }
`

export const CloseModalButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 45px;
    right: 0;
    cursor: pointer;

    @media (max-width: ${breakpoints.smallTablet}){
        top: 0;
        right: 1%;

    }
    &::before,
    &::after
    {
        display: block;
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 30px;
        height: 2px;
        background-color: var(--whiteColor);
    };

    &::before{
        transform: rotate(45deg);
    };
    &::after{
        transform: rotate(-45deg);
    }
`

const StyledSwiper = styled(Swiper)`
height: 100%;

  .swiper-button-next,
  .swiper-button-prev {
    width: 34px;
    height: 34px;
    border: 1px solid var(--borderGreen);
    border-radius: 50%;

    @media (max-width: ${breakpoints.smallMobile}){
        display: none;
    }
  }
  .swiper-button-next{
    @media (max-width: ${breakpoints.mobile}){
        right: 5px;
    }

    @media (max-width: ${breakpoints.extraSmallMobile}){
        right: 5px;
        display: none;
    }
}


.swiper-button-prev{
  @media (max-width: ${breakpoints.mobile}){
        left: 5px;
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    border: 1px solid;
    border-color: var(--mainGreen) var(--mainGreen) transparent transparent;
    height: 8px;
    width: 8px;
    color: transparent;


  }

  .swiper-button-next::after {
    transform: translateX(-25%) rotate(45deg);
  }

  .swiper-button-prev::after {
    transform: translateX(25%) rotate(-135deg);
  }

  .swiper-pagination{
    @media (max-width: ${breakpoints.smallMobile}){
        top: calc(210px + (280 - 210) * ((100vw - 320px) / (499 - 320)));
    }

    @media (max-width: ${breakpoints.extraSmallMobile}){
      display: none;
    }
  }

  .swiper-pagination-bullet {
    background-color: var(--lineGreen);
    opacity: 1;
    width: 8px;
    height: 8px;
    margin-top: 10px;

    &-active{
        background-color: var(--mainGreen);
    }
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  & > img {
    width: 560px;
    height: 450px;
    margin: 0 auto;
    object-fit: contain;

    @media (max-width: ${breakpoints.tablet}){
        width: clamp(280px, 74vw, 560px);
    }
    @media (max-width: ${breakpoints. extraSmallMobile}){
        border-radius: 20px 20px 0 0;
        width: 280px;
    }
  }
`;

const SwiperParagraph = styled(Paragraph)`
width: 70%;
height: max-content;
margin: 3% auto 5%;
font-size: 14px;
text-align: center;

@media (max-width: ${breakpoints.smallTablet}){
    width: 75%;
}
@media (max-width: ${breakpoints.mobile}){
    margin-bottom: 7%;
}
@media (max-width: ${breakpoints.smallMobile}){
    width: 90%;
    margin: 12% auto 5%;
}
`

const DiplomItem = ({ open, onClose, initialSlideIndex }) => {
  const diplomModal = useRef();
  const diplomItemInner = useRef();
  const swiperRef = useRef();
  const scrollY = useRef(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (diplomItemInner.current && !diplomItemInner.current.contains(event.target)) {
        onClose();
      }
    };

    if (open) {
      scrollY.current = window.scrollY;
      diplomModal.current.showModal();
      document.getElementById("header").style.visibility = "hidden";
      document.body.style.position = 'fixed'; 
      document.body.style.top = `-${scrollY.current}px`; 
      document.body.classList.add('body__locked');
      document.addEventListener('mousedown', handleClickOutside);

      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideTo(initialSlideIndex);
      }
    } else {
      diplomModal.current.close();
      document.getElementById("header").style.visibility = "visible";
      document.body.classList.remove('body__locked');
      document.body.style.position = ''; 
      document.body.style.top = ''; 
      window.scrollTo(0, scrollY.current); 
    }

    return () => {
      document.body.classList.remove('body__locked');
      document.body.style.position = ''; 
      document.body.style.top = '';
      document.getElementById("header").style.visibility = "visible";
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose, initialSlideIndex]);

  return createPortal(
    <DiplomItemWrapper ref={diplomModal}>
      <CloseModalButton onClick={onClose} />
      <DiplomItemInner ref={diplomItemInner}>
        <StyledSwiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Keyboard, Mousewheel]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          keyboard={true}
          mousewheel={true}
          pagination={{ clickable: true }}
        >
          {[...DiplomTexts].reverse().map((DiplomText, index) => (
            <StyledSwiperSlide key={DiplomText.id}>
              <img src={DiplomText.image} />
              {/* <SwiperParagraph>{DiplomText.content}</SwiperParagraph> */}
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
      </DiplomItemInner>
    </DiplomItemWrapper>,
    document.getElementById('diplom-nest')
  );
};

export default DiplomItem;