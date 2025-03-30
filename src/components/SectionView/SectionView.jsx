import { motion } from "framer-motion";
import styles from "./SectionView.module.css";
import DroppingText from "../DroppingText/DroppingText";

function SectionView({ moveX }) {
  return (
    <div className={styles.section_container}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        style={{ x: moveX }}
        className={styles.content_wrapper}
      >
        <DroppingText text="안녕하세요" startDelay={0} />
        <DroppingText text="퍼블리셔 한동희 입니다." startDelay={1} />
      </motion.div>
    </div>
  );
}

export default SectionView;
