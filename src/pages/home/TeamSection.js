import React from 'react';
import Slider from "react-slick";
import SingleTeam from '../../components/Team/SingleTeam';

// Team Members
import teamimg1 from '../../assets/images/team/team-1.jpg';
import teamimg3 from '../../assets/images/team/team-3.jpg';
import teamimg4 from '../../assets/images/team/team-4.jpg';
import teamimg5 from '../../assets/images/team/team-5.jpg';

const Team = () => {

    function NextArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}><i className="flaticon-right-arrow"></i></button>
        );
    }

    function PrevArrow(props) {
        const { className, onClick } = props;
        return (
            <button type='button' onClick={onClick} className={className}> <i className="flaticon-left-arrow"></i></button>
        );
    }

    const slilderSettings = {
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        margin: 20,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        className: "active",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {

                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {

                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <div className="ras-team ras-team-1">
                <div className="container">
                    <h2 class="text-center mb-40 wow fadeInUp">
                        Let’s Meet our Experienced<br />
                        Team Members.
                    </h2>

                    <div className="ras-slider-four-col">
                        <Slider {...slilderSettings}>
                            <SingleTeam
                                itemClass="team-item"
                                Image={teamimg1}
                                Title="Charles Park"
                                Designation="Ceo of CodeCharley"
                                linkedIn="https://www.linkedin.com/in/charlespark4393"
                                github="https://github.com/charlespark4393"
                            />

                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg3}
                                Title="Tao Jin"
                                Designation="Lead Engineer"
                            />

                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg4}
                                Title="Brian Young"
                                Designation="Senior Engineer"
                                linkedIn="https://www.linkedin.com/in/briany0ung"
                                github="https://github.com/luckypal"
                            />

                            <SingleTeam
                                teamClass="team-item"
                                Image={teamimg5}
                                Title="James Tong"
                                Designation="Senior Engineer"
                                github="https://github.com/NightFury0109"
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team;