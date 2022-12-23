import React, { useEffect, useState, useContext} from "react";
import styles from "../../styles/foundational/Header.module.scss";
import Link from "next/dist/client/link";
import OptionsAccordion from "../OptionsAccordion";
import { UserContext } from "../../lib/context";
import { User, getAuth } from "firebase/auth";

const Header = (props) => {
  const {user, username} = useContext(UserContext);
  return (
    <div className={styles.navBar}>
      <div className={styles.headerTitles}>
        <Link href="/">
          <h1 tabIndex={0}>Top Pred</h1>
        </Link>
      <h2>Top Predecessor Builds</h2>
      </div>
      <OptionsAccordion
        options={[
          ["/", "Home"],
          [username ? "/account": "/login-form", username ? "Account": "Signup / log-in"],
        ]}
      />
    </div>
  );
};

export default Header;
