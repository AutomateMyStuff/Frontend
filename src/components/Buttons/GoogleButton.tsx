import { signIn } from "next-auth/react"

import styles from "./index.module.scss"

export const GoogleButton = () => {
  return (
    <button
      onClick={() => {
        signIn("google")
      }}
      className={`${styles.btn_google}`}
    >
      Sign in with Google
    </button>
  )
}
