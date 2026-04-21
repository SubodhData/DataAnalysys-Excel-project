import React from 'react'
import styles from'./sidebar.module.css'
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LogoutIcon from '@mui/icons-material/Logout';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    console.log(location);
  return (
    <div className={styles.sidebar}>
        <div className={styles.sideBarIcon}>
            <ArticleIcon sx={{fontSize:54, marginBottom:2}}/>
            <div className={styles.sideBarTopContent}>Resume Screening</div>
        </div>
        <div className={styles.sideBarOptionBlock}>
            <Link to={'./dashboard'} className={[styles.sideBarOption, location.pathname === '/dashboard' ? styles.selectedOption:null].join(' ')}>
                <DashboardIcon sx={{fontSize:20, marginRight:1}}/>
                <div>Dashboard</div>
            </Link>
        </div>
        <div className={styles.sideBarOptionBlock}>
            <Link to={'./admin'} className={[styles.sideBarOption, location.pathname === '/admin' ? styles.selectedOption:null].join(' ')}>
                <SupervisorAccountIcon sx={{fontSize:20, marginRight:1}}/>
                <div>Admin</div>
            </Link>
        </div>
        <div className={styles.sideBarOptionBlock}>
            <Link to={'./history'} className={[styles.sideBarOption, location.pathname === '/history' ? styles.selectedOption:null].join(' ')}>
                <ManageSearchIcon sx={{fontSize:20, marginRight:1}}/>
                <div>History</div>
            </Link>
        </div>
        <div className={styles.sideBarOptionBlock}>
            <div className={styles.sideBarOption}>
                <LogoutIcon sx={{fontSize:20, marginRight:1}}/>
                <div>LogOut</div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar