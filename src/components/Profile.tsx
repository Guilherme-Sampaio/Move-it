import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Guilherme-Sampaio.png" alt="Guilherme Sampaio"/>
      <div>
        <strong>Guilherme Sampaio</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Levei 1
        </p>
      </div>
    </div>
  )
}