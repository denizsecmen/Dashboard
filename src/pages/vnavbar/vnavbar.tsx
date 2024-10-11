"use client"
import styles from './vnavbar.module.css';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext,useEffect } from 'react';
import context from '../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faMoneyBillTransfer, faEnvelope, faGear } from '@fortawesome/free-solid-svg-icons';
export default function Vnavbar() {
  let contexs = useContext(context);
  const [stat, setStat] = contexs as  [string, Dispatch<SetStateAction<string>>];
  return (
    <div className={styles.main}>
      <Image className={styles.image} width={100} height={100} src="/assets/user.png" alt="User Avatar" />
      <div className={styles.user}>John Doe</div>
      <div className={styles.slist}>
        <div className={styles.selection} onClick={() => setStat("Stats")}>
          <FontAwesomeIcon className={styles.i}  icon={faChartPie} /> Statistics
        </div>
        <div className={styles.selection} onClick={() => setStat("Transactions")}>
          <FontAwesomeIcon className={styles.i} icon={faMoneyBillTransfer} /> Transactions
        </div>
        <div className={styles.selection} onClick={() => setStat("Noti")}>
          <FontAwesomeIcon className={styles.i}  icon={faEnvelope} /> Notifications
        </div>
        <div className={styles.selection} onClick={() => setStat("Settings")}>
          <FontAwesomeIcon className={styles.i}  icon={faGear} /> Settings
        </div>
      </div>
    </div>

  );
}