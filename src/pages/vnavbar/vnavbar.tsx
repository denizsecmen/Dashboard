"use client"
import styles from './vnavbar.module.css';
import Image from 'next/image';
import { Dispatch, SetStateAction, useContext,useEffect } from 'react';
import context from '../context/context';
export default function Vnavbar() {
  let contexs = useContext(context);
  const [stat, chsatat] = contexs as  [string, Dispatch<SetStateAction<string>>];
  return (
    <div className={styles.main}>
      <Image className={styles.image} width={100} height={100} src="/assets/user.png" alt="" />
      <div className={styles.user}>John Doe</div>
      <div className={styles.slist}>
        <div className={styles.selection} onClick={()=>chsatat("Stats")}><i className="fa-solid fa-chart-pie"></i>Statistics</div>
        <div className={styles.selection} onClick={()=>chsatat("Transactions") }><i className="fa-solid fa-money-bill-transfer"></i>Transactions</div>
        <div className={styles.selection} onClick={()=>chsatat("Noti")}><i className="fa-solid fa-envelope"></i>Notifications</div>
        <div className={styles.selection} onClick={()=>chsatat("Settings")}><i className="fa-solid fa-gear"></i>Settings</div>
      </div>
    </div>
  );
}