import { signIn } from "next-auth/react"

import styles from "./index.module.scss"

export const GithubButton = () => {
  return (
    <button
      onClick={() => {
        signIn("github")
      }}
      className={`${styles.btn_github}`}
    >
      Sign in with Github
    </button>
  )
}
