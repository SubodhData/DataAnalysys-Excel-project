import React from 'react'
import styles from'./Dashboard.module.css'
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Skeleton from '@mui/material/Skeleton';

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.DashboardLeft}>
        <div className={styles.DashboardHeader}>
          <div className={styles.DashboardHeaderTitle}>Smart Resume Screening</div>
          <div className={styles.DashboardHeaderLargeTitle}>Resume Match Score</div>
        </div>
        <div className={styles.alertInfo}>
          <div><span>🔔</span>Important Instructions:</div>
          <div className={styles.Dashboardinstructions}>
            <div>📄 Please paste the job description in the job description field below </div>
            <div>&#128206; Only pdf format(.pdf) resumes are accepted </div>
          </div>
        </div>
        <div className={styles.DashboardUploadResume}>
          <div className={styles.DashboardUploadResumeBlock}>Upload your resume</div>
          <div className={styles.DashboardInputField}>
            <label htmlFor="inputField" className={styles.analyzeAIBtn}>Upload Resume</label>
            <input type="file" id="inputField" accept=".pdf"/>
          </div>
        </div>
        <div className={styles.JobDist}>
          <textarea className={styles.textarea} placeholder="Paste the job description here..." rows={10} cols={50}/>
          <div className={styles.analyzeBtn}>Analyze</div>
        </div>
      </div>
        <div className={styles.DashboardRight}>
          <div className={styles.DashboardRightTopCard}>
            <div>Analyze by AI</div>
            <img className={styles.ProfileImg} src="https://lh3.googleusercontent.com/a/ACg8ocIRTtjjCONgZBbnHVLJoukfVZh1FUdLOT7RX3aLlubtkfeVRGo=s288-c-no" alt="AI Analysis"/>
            <h3>Subodh Kumar</h3>
          </div>
          {/* <div className={styles.DashboardRightTopCard}>
            <div>Result</div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20}}>
              <h3>73%</h3>
              <CreditScoreIcon sx={{ fontSize: 22}} />
            </div>
            <div className={styles.feedback}>
              <h3>Feedback</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet adipisci minima nemo expedita. Eos suscipit nemo quos laborum inventore corrupti totam. Alias cumque labore eos distinctio amet deleniti perferendis consectetur.</p>
            </div>
          </div> */}
          <Skeleton variant="rectangular" sx={{borderRadius: '20px'}} width={220} height={220} animation="wave" />
        </div>
    </div>
  )
}

export default Dashboard