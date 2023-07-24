import './talent.css';
import User1 from '../icons/user1.svg'
import { useState } from 'react'

function Talent() {

  const [isActive, setIsActive] = useState('Payouts')
  
  return (
    <div className="talent">
      
      <div className="talent-back">
      
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.47136 1.80476C6.73171 1.54441 6.73171 1.1223 6.47136 0.861949C6.21101 0.6016 5.7889 0.6016 5.52855 0.861949L0.861888 5.52862C0.601539 5.78896 0.601539 6.21108 0.861888 6.47142L5.52855 11.1381C5.7889 11.3984 6.21101 11.3984 6.47136 11.1381C6.73171 10.8777 6.73171 10.4556 6.47136 10.1953L2.94277 6.66669H10.6666C11.0348 6.66669 11.3333 6.36821 11.3333 6.00002C11.3333 5.63183 11.0348 5.33335 10.6666 5.33335H2.94277L6.47136 1.80476Z" fill="#C5B1FE"/>
        </svg>
        back
      
      </div>
        
      <div className="talent-header">
        
        <div className="talent-header-image">
          <img src={User1} alt='user'/>
        </div>

        <div className="talent-header-user">
          
          <div className="talent-header-user-info">
        
            <div className="talent-header-username">
              Giacomina Otaegui
            </div>
        
            <div className="talent-header-user-post">
              Cloud Security specialist
            </div>

          </div>

          <div className="talent-header-user-status">
            <span>
              ACTIVE
            </span>
          </div>
        
        </div>

        
      </div>
        
      <div className="talent-cards">

        <div className="talent-cards-left">
          
          <div className="talent-cards-left-contracts">
            
            <div className="talent-cards-left-contracts-header">

              <div className="talent-cards-left-contracts-header-left">
              
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.666687C3.46957 0.666687 2.96086 0.877401 2.58579 1.25247C2.21071 1.62755 2 2.13625 2 2.66669V13.3334C2 13.8638 2.21071 14.3725 2.58579 14.7476C2.96086 15.1226 3.46957 15.3334 4 15.3334H12C12.5304 15.3334 13.0391 15.1226 13.4142 14.7476C13.7893 14.3725 14 13.8638 14 13.3334V6.052C14 6.04335 13.9998 6.03473 13.9995 6.02612C13.9998 6.01746 14 6.00876 14 6.00002C14 5.73706 13.8478 5.50966 13.6266 5.40115L9.22244 0.965043C9.10304 0.785223 8.8987 0.666687 8.66667 0.666687C8.66365 0.666687 8.66064 0.666707 8.65763 0.666747C8.65465 0.666707 8.65167 0.666687 8.64868 0.666687H4ZM8 2.00002H4C3.82319 2.00002 3.65362 2.07026 3.5286 2.19528C3.40357 2.32031 3.33333 2.48988 3.33333 2.66669V13.3334C3.33333 13.5102 3.40357 13.6797 3.5286 13.8048C3.65362 13.9298 3.82319 14 4 14H12C12.1768 14 12.3464 13.9298 12.4714 13.8048C12.5964 13.6797 12.6667 13.5102 12.6667 13.3334V6.66669H8.66667C8.29848 6.66669 8 6.36821 8 6.00002V2.00002ZM11.6804 5.33335L9.33333 2.96921V5.33335H11.6804Z" fill="#C5B1FE"/>
                </svg>
              
                Contracts
              
              </div>

              <div className="talent-cards-left-contracts-header-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                </svg>
              </div>

            </div>

            <div className="talent-cards-left-contracts-context">
              
              <div className="talent-cards-left-contracts-context-stroke">
                
                <div className="talent-cards-left-contracts-context-stroke-left">
                  
                  <div className="talent-cards-left-contracts-context-stroke-left-top">
                  
                    01.12.2023

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                    </svg>

                    14.12.2023

                    <span>
                      ACTIVE
                    </span>

                  </div>

                  <div className="talent-cards-left-contracts-context-stroke-left-bottom">
                    Project name
                  </div>

                </div>
              
                <div className="talent-cards-left-contracts-context-stroke-right">
                  
                  <div className="talent-cards-left-contracts-context-stroke-right-top">
                    1000$
                  </div>

                  <div className="talent-cards-left-contracts-context-stroke-right-bottom">
                    hourly rate
                  </div>

                </div>

              </div>

              <div className="talent-cards-left-contracts-context-stroke">
                
                <div className="talent-cards-left-contracts-context-stroke-left">
                  
                  <div className="talent-cards-left-contracts-context-stroke-left-top">
                  
                    01.12.2023

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                    </svg>

                    14.12.2023

                    <span>
                      ACTIVE
                    </span>

                  </div>

                  <div className="talent-cards-left-contracts-context-stroke-left-bottom">
                    Project name
                  </div>

                </div>
              
                <div className="talent-cards-left-contracts-context-stroke-right">
                  
                  <div className="talent-cards-left-contracts-context-stroke-right-top">
                    1000$
                  </div>

                  <div className="talent-cards-left-contracts-context-stroke-right-bottom">
                    hourly rate
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="talent-cards-left-variables">

            <div className="talent-cards-left-variables-header">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.666687C3.46957 0.666687 2.96086 0.877401 2.58579 1.25247C2.21071 1.62755 2 2.13625 2 2.66669V13.3334C2 13.8638 2.21071 14.3725 2.58579 14.7476C2.96086 15.1226 3.46957 15.3334 4 15.3334H12C12.5304 15.3334 13.0391 15.1226 13.4142 14.7476C13.7893 14.3725 14 13.8638 14 13.3334V6.052C14 6.04335 13.9998 6.03473 13.9995 6.02612C13.9998 6.01746 14 6.00876 14 6.00002C14 5.73706 13.8478 5.50966 13.6266 5.40115L9.22244 0.965043C9.10304 0.785223 8.8987 0.666687 8.66667 0.666687C8.66365 0.666687 8.66064 0.666707 8.65763 0.666747C8.65465 0.666707 8.65167 0.666687 8.64868 0.666687H4ZM8 2.00002H4C3.82319 2.00002 3.65362 2.07026 3.5286 2.19528C3.40357 2.32031 3.33333 2.48988 3.33333 2.66669V13.3334C3.33333 13.5102 3.40357 13.6797 3.5286 13.8048C3.65362 13.9298 3.82319 14 4 14H12C12.1768 14 12.3464 13.9298 12.4714 13.8048C12.5964 13.6797 12.6667 13.5102 12.6667 13.3334V6.66669H8.66667C8.29848 6.66669 8 6.36821 8 6.00002V2.00002ZM11.6804 5.33335L9.33333 2.96921V5.33335H11.6804Z" fill="#C5B1FE"/>
              </svg>
              
              Variables

            </div>

            <div className="talent-cards-left-variables-content">

              <div className="talent-cards-left-variables-stroke">
                
                <div className="talent-cards-left-variables-stroke-left">
                  Average Day Salary
                </div>

                <div className="talent-cards-left-variables-stroke-right">
                  $ 997.8
                </div>


              </div>

              <div className="talent-cards-left-variables-stroke-bottom">
                Using for vacation payout calculation
              </div>

            </div>

          </div>

          <div className="talent-cards-left-general">

            <div className="talent-cards-left-general-header">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.666687C3.46957 0.666687 2.96086 0.877401 2.58579 1.25247C2.21071 1.62755 2 2.13625 2 2.66669V13.3334C2 13.8638 2.21071 14.3725 2.58579 14.7476C2.96086 15.1226 3.46957 15.3334 4 15.3334H12C12.5304 15.3334 13.0391 15.1226 13.4142 14.7476C13.7893 14.3725 14 13.8638 14 13.3334V6.052C14 6.04335 13.9998 6.03473 13.9995 6.02612C13.9998 6.01746 14 6.00876 14 6.00002C14 5.73706 13.8478 5.50966 13.6266 5.40115L9.22244 0.965043C9.10304 0.785223 8.8987 0.666687 8.66667 0.666687C8.66365 0.666687 8.66064 0.666707 8.65763 0.666747C8.65465 0.666707 8.65167 0.666687 8.64868 0.666687H4ZM8 2.00002H4C3.82319 2.00002 3.65362 2.07026 3.5286 2.19528C3.40357 2.32031 3.33333 2.48988 3.33333 2.66669V13.3334C3.33333 13.5102 3.40357 13.6797 3.5286 13.8048C3.65362 13.9298 3.82319 14 4 14H12C12.1768 14 12.3464 13.9298 12.4714 13.8048C12.5964 13.6797 12.6667 13.5102 12.6667 13.3334V6.66669H8.66667C8.29848 6.66669 8 6.36821 8 6.00002V2.00002ZM11.6804 5.33335L9.33333 2.96921V5.33335H11.6804Z" fill="#C5B1FE"/>
              </svg>
              
              General info
            </div>

            <div className="talent-cards-left-general-content">

              <div className="talent-cards-left-general-content-stroke">
                
                <div className="talent-cards-left-general-content-stroke-left">
                  Worker type
                </div>

                <div className="talent-cards-left-general-content-stroke-right">
                  Employee
                </div>

              </div>

              <div className="talent-cards-left-general-content-stroke">
                
                <div className="talent-cards-left-general-content-stroke-left">
                  Team
                </div>

                <div className="talent-cards-left-general-content-stroke-right">
                  Marketing
                </div>

              </div>

              <div className="talent-cards-left-general-content-stroke">
                
                <div className="talent-cards-left-general-content-stroke-left">
                  Location
                </div>

                <div className="talent-cards-left-general-content-stroke-right">
                  Lisbon, Portugal
                </div>

              </div>

              <div className="talent-cards-left-general-content-stroke">
                
                <div className="talent-cards-left-general-content-stroke-left">
                  Projects
                </div>

                <div className="talent-cards-left-general-content-stroke-right">
                  My lovely Project, Not so lovely project
                </div>

              </div>

              <div className="talent-cards-left-general-content-stroke">
                
                <div className="talent-cards-left-general-content-stroke-left">
                  Joined at
                </div>

                <div className="talent-cards-left-general-content-stroke-right">
                  2023–06–13
                </div>

              </div>

            </div>

          </div>

          <div className="talent-cards-left-contacts">

            <div className="talent-cards-left-contacts-header">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.18777 2.16114C5.06511 2.05566 4.90829 1.99837 4.74652 1.99997L4.73996 2.00003L2.74037 2C2.64789 2.00011 2.55644 2.01947 2.47185 2.05684C2.38719 2.09423 2.31124 2.14885 2.24884 2.2172C2.18644 2.28556 2.13896 2.36616 2.10942 2.45387C2.08035 2.54019 2.06927 2.63153 2.07687 2.72226C2.28242 4.64536 3.13732 6.62343 4.22615 8.3042L4.22932 8.3091C5.23746 9.89562 6.20593 11.1604 7.69084 12.104L7.69604 12.1073C9.31468 13.157 11.3012 13.7341 13.2783 13.9498C13.3691 13.9573 13.4605 13.9461 13.5469 13.9169C13.6348 13.8872 13.7156 13.8394 13.784 13.7767C13.8524 13.7139 13.9069 13.6375 13.9441 13.5525C13.9541 13.5296 13.9661 13.5037 13.972 13.491C13.9734 13.4881 13.9744 13.4859 13.975 13.4845C13.9749 13.4847 13.9751 13.4843 13.975 13.4845C13.9757 13.4807 13.9767 13.4747 13.9777 13.4676C13.9897 13.3759 14 13.1736 14 12.6667L14 11.28C14 11.2745 14 11.269 14.0002 11.2635C14.0042 11.1 13.948 10.9407 13.8423 10.816C13.7371 10.6918 13.5902 10.6104 13.4292 10.5871C12.7406 10.496 12.0644 10.3275 11.4136 10.0846L11.412 10.084C11.2927 10.0392 11.1631 10.0295 11.0384 10.0561C10.9143 10.0825 10.8003 10.1439 10.7098 10.233L9.86469 11.0781C9.65248 11.2903 9.32464 11.3345 9.06376 11.1862C7.29041 10.1778 5.82211 8.70954 4.81376 6.93619C4.66542 6.67531 4.70968 6.34747 4.92188 6.13526L5.76698 5.29017C5.85603 5.19971 5.91741 5.0857 5.94389 4.96153C5.97047 4.83688 5.96077 4.70721 5.91592 4.5879L5.91536 4.5864C5.67251 3.9356 5.50393 3.25945 5.41283 2.57082C5.38971 2.4116 5.30979 2.26608 5.18777 2.16114ZM4.737 0.666664C5.22103 0.662773 5.6901 0.834559 6.05716 1.15023C6.42513 1.46668 6.66547 1.90614 6.73339 2.3867L6.73426 2.39282C6.81207 2.98277 6.95631 3.56204 7.16429 4.11957C7.29858 4.47727 7.32759 4.86595 7.2479 5.23964C7.16814 5.6136 6.98285 5.95687 6.71399 6.22876L6.71137 6.23141L6.2333 6.70946C7.0172 7.93923 8.06072 8.98275 9.29049 9.76665L9.76855 9.28859L9.7712 9.28596C10.0431 9.0171 10.3863 8.83181 10.7603 8.75206C11.134 8.67236 11.5227 8.70138 11.8804 8.83566C12.4379 9.04364 13.0172 9.18791 13.6071 9.26572L13.6131 9.26651C14.0989 9.33504 14.5425 9.57974 14.8596 9.95403C15.1748 10.326 15.3432 10.8002 15.3333 11.2875L15.3333 12.6667C15.3333 13.1597 15.3249 13.4488 15.2997 13.641C15.2705 13.8637 15.2094 13.9936 15.1777 14.0608C15.173 14.0708 15.169 14.0793 15.1658 14.0866C15.0542 14.3418 14.8906 14.5709 14.6854 14.7592C14.4801 14.9474 14.2379 15.0908 13.974 15.18C13.7102 15.2692 13.4307 15.3024 13.1533 15.2773L13.1413 15.2761C11.0188 15.0455 8.81472 14.4212 6.97312 13.2277C5.23886 12.1249 4.14349 10.6599 3.1055 9.02665C1.94282 7.23124 0.98348 5.0524 0.75035 2.85706L0.749328 2.84666C0.724338 2.57013 0.757203 2.29142 0.845828 2.02829C0.934453 1.76515 1.0769 1.52335 1.26409 1.31829C1.45129 1.11322 1.67913 0.949374 1.93312 0.837186C2.1871 0.724999 2.46167 0.666926 2.73933 0.666664L4.737 0.666664Z" fill="#C5B1FE"/>
            </svg>
              
              Contacts
            </div>

            <div className="talent-cards-left-contacts-content">

              <div className="talent-cards-left-contacts-content-stroke">
                
                <div className="talent-cards-left-contacts-content-stroke-left">
                  Email
                </div>

                <div className="talent-cards-left-contacts-content-stroke-right">
                  oataegui@mail.co
                </div>

              </div>

              <div className="talent-cards-left-contacts-content-stroke">
                
                <div className="talent-cards-left-contacts-content-stroke-left">
                  Phone
                </div>

                <div className="talent-cards-left-contacts-content-stroke-right">
                  +34 227 67 84
                </div>

              </div>

              <div className="talent-cards-left-contacts-content-stroke">
                
                <div className="talent-cards-left-contacts-content-stroke-left">
                  Telegram
                </div>

                <div className="talent-cards-left-contacts-content-stroke-right">
                  @oataegui
                </div>

              </div>

            </div>

          </div>

        </div>
        
        <div className="talent-cards-spacing"></div>
        
        <div className="talent-cards-right">
          
          <div className="talent-cards-right-block">
          
            <div className="talent-cards-right-tabs">
              <div className={`talent-cards-right-tab ${isActive === 'Payouts' ? ' active' : ''}`} onClick={() => setIsActive('Payouts')}>Payouts</div>
              <div className={`talent-cards-right-tab ${isActive === 'Requests' ? ' active' : ''}`} onClick={() => setIsActive('Requests')}>Requests</div>
              <div className={`talent-cards-right-tab ${isActive === 'Days' ? ' active' : ''}`} onClick={() => setIsActive('Days')}>Days off</div>
              <div className={`talent-cards-right-tab ${isActive === 'Bonuses' ? ' active' : ''}`} onClick={() => setIsActive('Bonuses')}>Bonuses</div>
            </div>
          
            <div className="talent-cards-right-btn">
              
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.666687C5.26362 0.666687 4.66667 1.26364 4.66667 2.00002H4C3.46957 2.00002 2.96086 2.21073 2.58579 2.58581C2.21071 2.96088 2 3.46959 2 4.00002V13.3334C2 13.8638 2.21071 14.3725 2.58579 14.7476C2.96086 15.1226 3.46957 15.3334 4 15.3334H12C12.5304 15.3334 13.0391 15.1226 13.4142 14.7476C13.7893 14.3725 14 13.8638 14 13.3334V4.00002C14 3.46959 13.7893 2.96088 13.4142 2.58581C13.0391 2.21073 12.5304 2.00002 12 2.00002H11.3333C11.3333 1.26364 10.7364 0.666687 10 0.666687H6ZM11.3333 3.33335C11.3333 4.06973 10.7364 4.66669 10 4.66669H6C5.26362 4.66669 4.66667 4.06973 4.66667 3.33335H4C3.82319 3.33335 3.65362 3.40359 3.5286 3.52862C3.40357 3.65364 3.33333 3.82321 3.33333 4.00002V13.3334C3.33333 13.5102 3.40357 13.6797 3.5286 13.8048C3.65362 13.9298 3.82319 14 4 14H12C12.1768 14 12.3464 13.9298 12.4714 13.8048C12.5964 13.6797 12.6667 13.5102 12.6667 13.3334V4.00002C12.6667 3.82321 12.5964 3.65364 12.4714 3.52862C12.3464 3.40359 12.1768 3.33335 12 3.33335H11.3333ZM6 2.66669V3.33335H10V2.66669V2.00002H6V2.66669Z" fill="#C5B1FE"/>
            </svg>    

              View as report
            
            </div>

            <div className="talent-cards-right-content">

              <div className={`talent-cards-right-content-payouts ${isActive === 'Payouts' ? ' active' : 'disabled'}`}>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>160 </span> / 160 hours
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      3, 500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>160 </span> / 160 hours
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      3, 500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>160 </span> / 160 hours
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      3, 500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>160 </span> / 160 hours
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      3, 500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>160 </span> / 160 hours
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      3, 500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

              </div>

              <div className={`talent-cards-right-content-requests ${isActive === 'Requests' ? ' active' : 'disabled'}`}>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

              </div>

              <div className={`talent-cards-right-content-days ${isActive === 'Days' ? ' active' : 'disabled'}`}>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      <span>01.12.2023</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                      </svg>
                      <span>14.12.2023</span>
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      Description
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-vacation">
                      Vacation
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      <span>01.12.2023</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                      </svg>
                      <span>14.12.2023</span>
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      Description
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-vacation">
                      Vacation
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      <span>01.12.2023</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                      </svg>
                      <span>14.12.2023</span>
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      Description
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-vacation">
                      Sick leave
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      <span>01.12.2023</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                      </svg>
                      <span>14.12.2023</span>
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      Description
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-vacation">
                      Vacation
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      <span>01.12.2023</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                      </svg>
                      <span>14.12.2023</span>
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      Description
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-vacation">
                      Vacation
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

              </div>

              <div className={`talent-cards-right-content-bonuses ${isActive === 'Bonuses' ? ' active' : 'disabled'}`}>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

                <div className="talent-cards-right-content-stroke">
                  
                  <div className="talent-cards-right-content-stroke-left">
                  
                    <div className="talent-cards-right-content-stroke-left-date">
                      May 2023
                    </div>
                  
                    <div className="talent-cards-right-content-stroke-left-hours">
                      <span>Description </span>
                    </div>
                  
                  </div>
                  
                  <div className="talent-cards-right-content-stroke-right">

                    <div className="talent-cards-right-content-stroke-right-price">
                      500 $
                    </div>

                    <div className="talent-cards-right-content-stroke-right-project">
                      Project
                    </div>

                  </div>
                </div>

              </div>

            </div>

            <div className="talent-cards-right-pages">
              
              <div className="talent-cards-right-pages-block-spacing"></div>
              
              <div className="talent-cards-right-pages-block talent-cards-right-pages-block-page">
                <span>Rows per page:</span> 
                10 
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528606 0.528596C0.788955 0.268247 1.21107 0.268247 1.47141 0.528596L5.00001 4.05719L8.52861 0.528596C8.78896 0.268247 9.21107 0.268247 9.47141 0.528596C9.73176 0.788946 9.73176 1.21106 9.47141 1.47141L5.47141 5.47141C5.21107 5.73175 4.78896 5.73175 4.52861 5.47141L0.528606 1.47141C0.268256 1.21106 0.268256 0.788946 0.528606 0.528596Z" fill="#B3B5B7"/>
                </svg>

              </div>
              
              <div className="talent-cards-right-pages-block">
                1-5 of 13
              </div>
              
              <div className="talent-cards-right-pages-block talent-cards-right-pages-block-arrow">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.47138 0.528596C5.73173 0.788946 5.73173 1.21106 5.47138 1.47141L1.94279 5L5.47138 8.5286C5.73173 8.78895 5.73173 9.21106 5.47138 9.47141C5.21103 9.73176 4.78892 9.73176 4.52858 9.47141L0.528575 5.47141C0.268226 5.21106 0.268226 4.78895 0.528575 4.5286L4.52858 0.528596C4.78892 0.268247 5.21103 0.268247 5.47138 0.528596Z" fill="#B3B5B7"/>
                </svg>

                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528575 0.528596C0.788925 0.268247 1.21103 0.268247 1.47138 0.528596L5.47138 4.5286C5.73173 4.78895 5.73173 5.21106 5.47138 5.47141L1.47138 9.47141C1.21103 9.73176 0.788925 9.73176 0.528575 9.47141C0.268226 9.21106 0.268226 8.78895 0.528575 8.5286L4.05717 5L0.528575 1.47141C0.268226 1.21106 0.268226 0.788946 0.528575 0.528596Z" fill="#B3B5B7"/>
                </svg>
              </div>

            </div>

          </div>
    
        </div>

      </div>

    </div>
  );
}

export default Talent;
