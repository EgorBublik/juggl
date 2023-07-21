import './team.css';
import AddIcon from '../icons/add.svg'
import ImportIcon from '../icons/import.svg'
import User1 from '../icons/user1.svg'
import User2 from '../icons/user2.svg'
import User3 from '../icons/user3.svg'
import User4 from '../icons/user4.svg'
import { NavLink } from 'react-router-dom';

function Team() {
  return (
    
    <div className="team">
        <div className='team-header'>
            <div className="team-header-left">
                Team
            </div>

            <div className="team-header-right">
                <div className="team-header-add-btn ">
                    <button>
                        Add member <img src={AddIcon} alt="" />
                    </button>
                </div>
                <div className="team-header-import-btn "> 
                    <button>
                        Bulk import <img src={ImportIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>

        <div className="team-table">
            <div className="team-filters">
                <div className="team-search">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66659 6.33331C1.66659 3.75598 3.75592 1.66665 6.33325 1.66665C8.91058 1.66665 10.9999 3.75598 10.9999 6.33331C10.9999 7.59063 10.5027 8.73182 9.69413 9.57096C9.67134 9.58849 9.64941 9.60769 9.62853 9.62858C9.60765 9.64946 9.58844 9.67138 9.57091 9.69418C8.73177 10.5027 7.59058 11 6.33325 11C3.75592 11 1.66659 8.91064 1.66659 6.33331ZM10.0784 11.0212C9.05194 11.8423 7.74993 12.3333 6.33325 12.3333C3.01954 12.3333 0.333252 9.64702 0.333252 6.33331C0.333252 3.0196 3.01954 0.333313 6.33325 0.333313C9.64696 0.333313 12.3333 3.0196 12.3333 6.33331C12.3333 7.74998 11.8423 9.05198 11.0212 10.0784L13.4713 12.5286C13.7317 12.7889 13.7317 13.211 13.4713 13.4714C13.211 13.7317 12.7889 13.7317 12.5285 13.4714L10.0784 11.0212Z" fill="#C5B1FE"/>
                    </svg>
                    <input type="text" placeholder="Search"/>
                </div>

                <div className="team-filter-control">
                    <div className="team-filter-control-input">
                        Type
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528514 0.528575C0.788864 0.268226 1.21097 0.268226 1.47132 0.528575L4.99992 4.05717L8.52851 0.528575C8.78886 0.268226 9.21097 0.268226 9.47132 0.528575C9.73167 0.788925 9.73167 1.21103 9.47132 1.47138L5.47132 5.47138C5.21097 5.73173 4.78886 5.73173 4.52851 5.47138L0.528514 1.47138C0.268165 1.21103 0.268165 0.788925 0.528514 0.528575Z" fill="#C5B1FE"/>
                        </svg>
                    </div>
                    <div className="team-filter-control-input">
                        Project
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528514 0.528575C0.788864 0.268226 1.21097 0.268226 1.47132 0.528575L4.99992 4.05717L8.52851 0.528575C8.78886 0.268226 9.21097 0.268226 9.47132 0.528575C9.73167 0.788925 9.73167 1.21103 9.47132 1.47138L5.47132 5.47138C5.21097 5.73173 4.78886 5.73173 4.52851 5.47138L0.528514 1.47138C0.268165 1.21103 0.268165 0.788925 0.528514 0.528575Z" fill="#C5B1FE"/>
                        </svg>
                    </div>
                    <div className="team-filter-control-input">
                        Team
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528514 0.528575C0.788864 0.268226 1.21097 0.268226 1.47132 0.528575L4.99992 4.05717L8.52851 0.528575C8.78886 0.268226 9.21097 0.268226 9.47132 0.528575C9.73167 0.788925 9.73167 1.21103 9.47132 1.47138L5.47132 5.47138C5.21097 5.73173 4.78886 5.73173 4.52851 5.47138L0.528514 1.47138C0.268165 1.21103 0.268165 0.788925 0.528514 0.528575Z" fill="#C5B1FE"/>
                        </svg>
                    </div>
                    <div className="team-filter-control-input">
                        Country
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528514 0.528575C0.788864 0.268226 1.21097 0.268226 1.47132 0.528575L4.99992 4.05717L8.52851 0.528575C8.78886 0.268226 9.21097 0.268226 9.47132 0.528575C9.73167 0.788925 9.73167 1.21103 9.47132 1.47138L5.47132 5.47138C5.21097 5.73173 4.78886 5.73173 4.52851 5.47138L0.528514 1.47138C0.268165 1.21103 0.268165 0.788925 0.528514 0.528575Z" fill="#C5B1FE"/>
                        </svg>
                    </div>
                    <div className="team-filter-control-input">
                        Status
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528514 0.528575C0.788864 0.268226 1.21097 0.268226 1.47132 0.528575L4.99992 4.05717L8.52851 0.528575C8.78886 0.268226 9.21097 0.268226 9.47132 0.528575C9.73167 0.788925 9.73167 1.21103 9.47132 1.47138L5.47132 5.47138C5.21097 5.73173 4.78886 5.73173 4.52851 5.47138L0.528514 1.47138C0.268165 1.21103 0.268165 0.788925 0.528514 0.528575Z" fill="#C5B1FE"/>
                        </svg>
                    </div>
                    <div className="team-filter-control-reset">
                        Reset
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                        </svg>
                    </div>
                </div>
            </div>
            
            <div className="team-table-header">
                <div className="team-table-header-left">
                    4 members
                </div>
                <div className="team-table-header-right">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.666687C5.26362 0.666687 4.66667 1.26364 4.66667 2.00002H4C3.46957 2.00002 2.96086 2.21073 2.58579 2.58581C2.21071 2.96088 2 3.46959 2 4.00002V13.3334C2 13.8638 2.21071 14.3725 2.58579 14.7476C2.96086 15.1226 3.46957 15.3334 4 15.3334H12C12.5304 15.3334 13.0391 15.1226 13.4142 14.7476C13.7893 14.3725 14 13.8638 14 13.3334V4.00002C14 3.46959 13.7893 2.96088 13.4142 2.58581C13.0391 2.21073 12.5304 2.00002 12 2.00002H11.3333C11.3333 1.26364 10.7364 0.666687 10 0.666687H6ZM11.3333 3.33335C11.3333 4.06973 10.7364 4.66669 10 4.66669H6C5.26362 4.66669 4.66667 4.06973 4.66667 3.33335H4C3.82319 3.33335 3.65362 3.40359 3.5286 3.52862C3.40357 3.65364 3.33333 3.82321 3.33333 4.00002V13.3334C3.33333 13.5102 3.40357 13.6797 3.5286 13.8048C3.65362 13.9298 3.82319 14 4 14H12C12.1768 14 12.3464 13.9298 12.4714 13.8048C12.5964 13.6797 12.6667 13.5102 12.6667 13.3334V4.00002C12.6667 3.82321 12.5964 3.65364 12.4714 3.52862C12.3464 3.40359 12.1768 3.33335 12 3.33335H11.3333ZM6 2.66669V3.33335H10V2.66669V2.00002H6V2.66669Z" fill="#C5B1FE"/>
                    </svg>

                    <span>View as report</span>
                    
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                    </svg>

                </div>
            </div>
            
            <div className="team-table-list">
                <table>

                <tr>
                        <td className='team-table-list-header'>
                            <svg width="16" height="16" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                            </svg>
                             Member
                        </td>
                        
                        <td className='team-table-list-header col-table'>
                            <svg width="16" height="16" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                            </svg>
                            Type
                        </td>
                        
                        <td className='team-table-list-header col-table'>
                            <svg width="16" height="16" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                            </svg>
                            Project
                        </td>
                        
                        <td className='team-table-list-header col-table'>
                            <svg width="16" height="16" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                            </svg>
                            Team
                        </td>
                        
                        <td className='team-table-list-header col-table'>
                            <svg width="16" height="16" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                            </svg>
                            Country
                        </td>
                        
                        <td className='team-table-list-header team-table-list-contract col-table'>
                            <svg width="16" height="16" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.4714 0.528575C4.21106 0.268226 3.78894 0.268226 3.5286 0.528575L0.195262 3.86191C-0.0650874 4.12226 -0.0650874 4.54437 0.195262 4.80472C0.455612 5.06507 0.877722 5.06507 1.13807 4.80472L4 1.94279L6.86193 4.80472C7.12228 5.06507 7.54439 5.06507 7.80474 4.80472C8.06509 4.54437 8.06509 4.12226 7.80474 3.86191L4.4714 0.528575ZM7.80474 8.52858L4.4714 5.19524C4.21106 4.93489 3.78894 4.93489 3.5286 5.19524L0.195262 8.52858C-0.0650874 8.78893 -0.0650874 9.21103 0.195262 9.47138C0.455612 9.73173 0.877722 9.73173 1.13807 9.47138L4 6.60946L6.86193 9.47138C7.12228 9.73173 7.54439 9.73173 7.80474 9.47138C8.06509 9.21103 8.06509 8.78893 7.80474 8.52858Z" fill="#C5B1FE"/>
                            </svg>
                            Contract
                        </td>
                    </tr>

                    
                        <tr>
                        
                            <td>
                                <img className='user-image' src={User1} alt='user'/>
                                <div className="team-table-list-user ">
                                    <div className='team-table-list-name'>
                                        <NavLink to={'/talent'} >
                                            Giacomina Otaegui
                                        </NavLink>
                                    </div>
                                    
                                    <div className='team-table-list-post'>Cloud Security specialist </div>
                                </div>
                                
                            </td>
                            
                            <td className='team-table-list-type col-table'>
                                Employee
                            </td>
                            
                            <td className='team-table-list-project col-table'>
                                ASF
                            </td>
                            
                            <td className='team-table-list-team col-table'>
                                Marketing
                            </td>
                            
                            <td className='team-table-list-country col-table'>
                                Spain
                            </td>
                            
                            <td className='team-table-list-contract-disabled col-table'>
                                <span>TERMINATED</span> 
                            </td>
                        </tr>
                    
                    <tr>
                        <td>
                            <img className='user-image' src={User2} alt='user'/>
                            <div className="team-table-list-user">
                                <div className='team-table-list-name'>Tilda Ulrich</div>
                                <div className='team-table-list-post'>SEO</div>
                            </div>
                            
                        </td>
                        
                        <td className='team-table-list-type col-table'>
                            Employee
                        </td>
                        
                        <td className='team-table-list-project col-table'>
                            ASF
                        </td>
                        
                        <td className='team-table-list-team col-table'>
                            Development...
                        </td>
                        
                        <td className='team-table-list-country col-table'>
                            Spain
                        </td>
                        
                        <td className='team-table-list-contract-active col-table'>
                            <span>ACTIVE</span> 
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img className='user-image' src={User3} alt='user'/>
                            <div className="team-table-list-user">
                                <div className='team-table-list-name'>Sam Sauno</div>
                                <div className='team-table-list-post'>Fullstack</div>
                            </div>
                            
                        </td>
                        
                        <td className='team-table-list-type col-table'>
                            Contractor
                        </td>
                        
                        <td className='team-table-list-project col-table'>
                            DDT
                        </td>
                        
                        <td className='team-table-list-team col-table'>
                            Development...
                        </td>
                        
                        <td className='team-table-list-country col-table'>
                            Germany
                        </td>
                        
                        <td className='team-table-list-contract-active col-table'>
                            <span>ACTIVE</span> 
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img className='user-image' src={User4} alt='user'/>
                            <div className="team-table-list-user">
                                <div className='team-table-list-name'>Peter Stadnik</div>
                                <div className='team-table-list-post'>PR-specialist</div>
                            </div>
                            
                        </td>
                        
                        <td className='team-table-list-type col-table'>
                            Employee
                        </td>
                        
                        <td className='team-table-list-project col-table'>
                            My lovely Pro...
                        </td>
                        
                        <td className='team-table-list-team col-table'>
                            Development...
                        </td>
                        
                        <td className='team-table-list-country col-table'>
                            US
                        </td>
                        
                        <td className='team-table-list-contract-active col-table'>
                            <span>ACTIVE</span> 
                        </td>
                    </tr>

                </table>
            </div>
        </div>
    </div>
    
  );
}

export default Team;
