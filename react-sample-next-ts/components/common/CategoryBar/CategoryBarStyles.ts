import styled, { css } from 'styled-components'
import mixin from 'styles/utils'
import utils from 'utils'

interface IProps {
  className: string;
  mode: string;
}

export const CategoryBarWrap = styled.div<IProps>`
  transition: transform 0.3s, top 0.3s;
  overflow: hidden;

  .list { 
    background-color: #fff;

    .swiper-slide {
      width: auto;

      &:first-child {
        margin-left: 0 !important;
      }
    }

    .btn {
      white-space: nowrap; 
      position: relative; 
      overflow: hidden;
      transition: margin 0.3s;
    }
  }
  
  ${props => {
    const cName = props.className;
    switch (true) {
      case utils.setSearchStr(cName, 'header-nav'):
        return css`
          border-bottom: 1px solid #f5f5f5;

          .list { 
            height: 45px;              
            padding: 0 25px;
        
            .swiper-slide {                              
              margin-left: 25px;       
              
              .btn {
                ${mixin.flex}
                font-family: "ProximaNova-Bold"; 
                font-size: 14px; 
                color: #000;
                height: 100%;
              }

              &.dot .btn:before { 
                content: "";
                display: block;
                width: 0.25rem;
                height: 0.25rem;
                border-radius: 50%;
                background-color: #fa5500;
                position: absolute;
                top: 1rem;
                left: -0.375rem; 
              }

              &.active .btn:after { 
                content: "";
                display: block;
                width: 100%;
                height: 2px;
                background: #000;
                position: absolute;
                bottom: 0;
                left: 0; 
              }
            }
          }
        `;
      case utils.setSearchStr(cName, 'category-nav'):
        return css`
          .list {  
            padding: 0 20px;
        
            .swiper-slide { 
              margin-left: 10px;        
        
              .btn {
                ${mixin.flex({ direction: 'column' })}

                .txt {
                  font-size: 13px; 
                  color: #ccc;
                  margin-top: 8px;
                }
              }
        
              &.active .btn .txt { 
                font-weight: bold;
                color: #000;
              }
            }
          }
        `;
    }
  }}

`;