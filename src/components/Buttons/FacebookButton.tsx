import { signIn } from "next-auth/react"

import styles from "./index.module.scss"

export const FacebookButton = () => {
  return (
    <button
      onClick={() => {
        signIn("facebook")
      }}
      className={styles.btn_facebook}
    >
      Sign in with Facebook
    </button>
  )
}
