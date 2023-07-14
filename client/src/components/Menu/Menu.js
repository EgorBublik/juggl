import './menu.css';
import Union from '../icons/union.svg'
import Logo from '../icons/Logo.svg'
import User from '../icons/user.svg'
import Home from '../icons/home.svg'
import Team from '../icons/team.svg'
import Review from '../icons/review.svg'
import Reports from '../icons/reports.svg'
import Payouts from '../icons/payouts.svg'
import Users from '../icons/users.svg'
import Projects from '../icons/projects.svg'
import Calendar from '../icons/calendar.svg'

function Menu() {
  return (
    <div className="menu">
        <div className='menu-top'> 
            <img className='logo' src={Logo} alt="Logo" />
            <img className='union' src={Union} alt="Union" />
        </div>
        
        <div className='menu-user'>
          
          <div className='menu-user-img'>
            <img className='user-image' src={User} alt='user'/>
          </div>
          
          <div className='menu-user-info'>
          
            <div className='menu-user-usermane'>
              Gia Ortega
            </div>
          
            <div className='menu-user-post'>
              HR Manager
              </div>
          </div>
        </div>

        <div className='menu-list'>
          
          <div className='menu-general'>
            <div className='menu-list-name'>GENERAL</div>
            <ul>
              <li className='menu-list-item'>
                <div className='menu-list-icon'>
                  <img className='home-img' src={Home} alt='home'/>
                </div>
                <span className=''>Home</span> 
              </li>

              <li className='menu-list-item'>
                <div className='menu-list-icon'>
                  <img className='menu-list-img' src={Team} alt='team'/>
                </div>
                <span className=''>Team</span> 
              </li>

              <li className='menu-list-item'>
                <div className='menu-list-icon'>
                  <img className='menu-list-img' src={Review} alt='review'/>
                </div>
                <span className=''>Review</span> 
              </li>

              <li className='menu-list-item'>
                <div className='menu-list-icon'>
                  <img className='menu-list-img' src={Reports} alt='reports'/>
                </div>
                <span className=''>Reports</span> 
              </li>

              <li className='menu-list-item'>
                <div className='menu-list-icon'>
                  <img className='menu-list-img' src={Payouts} alt='payouts'/>
                </div>
                <span className=''>Payouts</span> 
              </li>

            </ul>
          </div>
          
          <div className='menu-settings'>
            <div className='menu-list-name'>SETTINGS</div>
            
            <ul>
              <li className='menu-list-item'>
                <div className='menu-list-icon'>
                  <img className='menu-list-img' src={Users} alt='users'/>
                </div>
                <span className=''>Users</span> 
              </li>

              <li className='menu-list-item'>
                <div className='menu-list-icon'>
                  <img className='menu-list-img' src={Projects} alt='projects' />
                </div>
                <span className=''>Projects</span> 
              </li>

              <li className='menu-list-item'>
                <div className='menu-list-icon'>
                  <img className='menu-list-img' src={Calendar} alt='calendar' />
                </div>
                <span className=''>Calendar</span> 
              </li>

            </ul>
          </div>
        </div>
        
    </div>
  );
}

export default Menu;
