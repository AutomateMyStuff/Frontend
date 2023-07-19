import { FC } from "react"
import { useSession, signOut } from "next-auth/react"
import Lottie from "lottie-react"

import confetti from "public/lotties/confetti.json"

import styles from "./index.module.scss"

export const SignedIn: FC = () => {
  const { data: session } = useSession()

  return (
    <div className={styles.signedin_container}>
      <div className={styles.signedin_content}>
        <h1>Signed In</h1>
        <p>
          You&apos;re signed in
          <br />
          as {session?.user?.name}
        </p>
      </div>
      <button onClick={() => signOut()} className={styles.btn_signout}>
        Sign out
      </button>
      <div className={styles.lottie_container}>
        <Lottie animationData={confetti} loop={false} />
      </div>
    </div>
  )
}
