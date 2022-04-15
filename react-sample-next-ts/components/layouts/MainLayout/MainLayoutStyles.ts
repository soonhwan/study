import styled from 'styled-components'

interface IProps {
  className?: string;
}

export const MainLayoutWrap = styled.div<IProps>`
  &.main-layout {
    .category-bar.header-nav {
      position: sticky;
      top:0;
      z-index: 10;
    }

    .is-fix-header.is-scrollDown {
      .category-bar.header-nav {
        top: 50px;
      }
    }
    
    &.best-page {
      .category-sorting-bar {
        //position: sticky;
        position: relative;
        //top: -60px;
        //top: 0;
        z-index: 9;
      }

      .is-fix-header .category-sorting-bar {
        position: fixed;
        width: 100%;
        top: 0;
      }

      .is-fix-header.is-scrollUp {
        .category-sorting-bar .category-nav {
          .swiper-slide {
            margin-left: 20px;

            .btn {
              margin-top: -60px;
            }

            .thumb-category-nav {
              width: 0;
            }
          }
        }
      }

      .is-fix-header.is-scrollDown {
        .category-sorting-bar {
          top: 96px;

          .category-nav {
            .btn {
              margin-top: 0;
            }

            .thumb-category-nav {
              width: 60px;
            }
          }
        }
      }
    }
  }  

`;