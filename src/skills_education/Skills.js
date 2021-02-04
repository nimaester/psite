import React from "react";
import StarRatings from "react-star-ratings";

const Skills = () => {
  return (
    <div className='skills'>
      <h2>Technical Skills</h2>
      <div className='section'>
        <div className='section-1'>
          <ul>
            <li className='tech-skills'>
              <span className='skills-type'>Javascript</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>React.js</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>HTML</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>CSS</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>Node.js</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>

            <li className='tech-skills'>
              <span className='skills-type'>Express</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>

            <li className='tech-skills'>
              <span className='skills-type'>MySQL</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>MongoDB</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type'>Docker</span>
              <span className='skills-rating'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={4.5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
          </ul>
        </div>

        <div className='section-2'>
          <ul>
            <li className='tech-skills'>
              <span className='skills-type2'>AWS</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={4}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>Ruby</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={4}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>

            <li className='tech-skills'>
              <span className='skills-type2'>JQuery</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.8}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>Jest/Enzyme</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>CircleCI</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>New Relic</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.5}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>Nginx</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3.2}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
            <li className='tech-skills'>
              <span className='skills-type2'>Loader.io</span>
              <span className='skills-rating2'>
                <StarRatings
                  starRatedColor='#11999e'
                  starEmptyColor='grey'
                  rating={3}
                  starDimension='30px'
                  starSpacing='0.1px'
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <p className='quotes'>
        "Everybody should learn to program a computer, because it teaches you
        how to think."
      </p>
      <p className='quotee'>-- Steve Jobs</p>
      <hr/>
    </div>
  );
};

export default Skills;

// <p className='quotes'>
// "Everybody should learn to program a computer, because it teaches you
// how to think."
// </p>
// <p className='quotee'>-- Steve Jobs</p>
