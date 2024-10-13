"use client"
import styles from './mains.module.css';
import { Dispatch, SetStateAction, useContext,useState } from 'react';
import context from '../context/context';
import Stats from '../stats/stats';
import Transaction from '../transaction/transaction';

export default function Mains() {
  let contexs = useContext(context);
  const [turn, chsatat] = contexs as  [string, Dispatch<SetStateAction<string>>];
  if (turn == "Stats") {
    return (
      <div className={styles.mains}>
        <Stats />
      </div>
    );
  } else if (turn == "Transactions") {
    return (
      <div className={styles.mains}>
        <Transaction />
      </div>
    );
  } else {
    return (
      <div className={styles.mains}>
      </div>
    );
  }
}
