import React from 'react';
import classes from '../../styles/components/ListSlider.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ListCard from './ListCard';

/*
  새로운 모임을 위한 슬라이더 컴포넌트
  3개의 게시글이 보이며 슬라이더 버튼을 통해 옆으로 넘길 수 있다.
*/
// const NextArrow = (props) => {
//   const { onclick } = props;
//   return (
//     <div
//       className={classes.nextArrow}
//       style={{ display: 'block', background: 'red' }}
//       onclick={onclick}
//     />
//   );
// };
// const PrevArrow = (props) => {
//   const { onclick } = props;
//   return (
//     <div
//       className={classes.nextArrow}
//       style={{ display: 'block', background: 'blue' }}
//       onclick={onclick}
//     />
//   );
// };

const ListSlider = () => {
  const settings = {
    // dots: false, // 페이지 점 표시 여부
    // infinite: true, // 무한 반복 여부
    // speed: 500, // 전환 속도
    slidesToShow: 4, // 보여질 슬라이드 수
    slidesToScroll: 4, // 스크롤 시 이동할 슬라이드 수
    // arrows: true, // 화살표 표시 여부
    // accessibility: true, // 접근성 활성화 여부
    // autoplay: true, // 자동 재생 여부
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 4,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       infinite: true,
    //     },
    //   },
    // ],
  };

  return (
    <section className={classes.slider}>
      {/* 제목을 나타내는 h1 태그, 스타일은 글자 크기와 색상 설정 */}
      <span style={{ fontSize: '24px', color: 'black' }}>새로운 모임</span>
      {/* react-slick의 Slider 컴포넌트, 설정은 settings 객체로 전달 */}
      <Slider {...settings}>
        {/* 각각의 아이템에 대해 ItemCard 컴포넌트를 렌더링 */}
        <div className={classes.contents}>
          <ListCard />
        </div>
        <div className={classes.contents}>
          <ListCard />
        </div>
        <div className={classes.contents}>
          <ListCard />
        </div>
        <div className={classes.contents}>
          <ListCard />
        </div>
        <div className={classes.contents}>
          <ListCard />
        </div>
        <div className={classes.contents}>
          <ListCard />
        </div>
        <div className={classes.contents}>
          <ListCard />
        </div>
      </Slider>
    </section>
  );
};
export default ListSlider;
