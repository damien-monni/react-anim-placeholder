import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

class ListHolder extends React.Component {

  render() {
    const { itemNb } = this.props;

    // TODO: Rewrite using absolute pixel size passed by props

    const Wrapper = styled.section`
      background: #fff;
      border: 1px solid;
      border-color: #e5e6e9 #dfe0e4 #d0d1d5;
      border-radius: 3px;
      padding: 12px;
      margin: 0 auto;
      width: 100%;
      max-width: 1920px;
    `;

    const placeHolderShimmer = keyframes`
      0% {
        background-position: 0
      }
      100% {
        background-position: 1920px 0
      }
    `;

    const AnimatedBackground = styled.div`
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: ${placeHolderShimmer};
      animation-timing-function: linear;
      background: #f6f7f8;
      background-image: linear-gradient(to right, #eeeeee 0%, #dddddd 20%, #eeeeee 40%);
      background-size: 1920px 100px;
      width: 100%;
      position: relative;
    `;

    const h = 'height: 80px;';
    const LineBlock = styled.div`
      ${h}
    `;

    const Line1 = styled.div`
      background-color: white;
      position: absolute;
      left: 50%;
      right: 0;
      ${h}
    `;

    return (
      <Wrapper>
        <AnimatedBackground>
          <LineBlock>
            <Line1 />
          </LineBlock>
        </AnimatedBackground>
      </Wrapper>
    );
  }
}

ListHolder.propTypes = {
  // The number of list items
  itemNb: PropTypes.number,
}

ListHolder.defaultProps = {
  itemNb: 4,
};

export default ListHolder;
