import styles from './vnavbar.module.css';
import Image from 'next/image';
export default function Vnavbar() {
  return (
    <div className={styles.main}>
      <Image className={styles.image} width={100} height={100} src="/assets/user.png" alt="" />
      <div className={styles.user}>John Doe</div>
      <div className={styles.slist}>
        <div className={styles.selection}><i className="fa-solid fa-chart-pie"></i>Statistics</div>
        <div className={styles.selection}><i className="fa-solid fa-money-bill-transfer"></i>Transactions</div>
        <div className={styles.selection}><i className="fa-solid fa-envelope"></i>Notifications</div>
        <div className={styles.selection}><i className="fa-solid fa-gear"></i>Settings</div>
      </div>
    </div>
  );
}