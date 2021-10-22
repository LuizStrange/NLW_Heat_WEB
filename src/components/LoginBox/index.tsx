import { useContext, useState } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { authContext } from '../../contexts/auth';


import styles from './styles.module.scss';


export function LoginBox() {
    const { signInUrl } = useContext(authContext);

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entrem e Compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="25" />
                Entrar com GitHub
            </a>
        </div>
    )
}