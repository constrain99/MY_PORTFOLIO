import { Html,useProgress } from "@react-three/drei"

const Loader = () => {
  const {progress} =useProgress();
  return (
    <Html>
      <span className="canvas-loder"></span>
      <p
        style={{
          fontsize:14,
          color:'#f1f1f1',
          fontWeight:800,
          marginTop:40
        }}
      >{progress.toFixed(2)}%plz wait</p>
    </Html>
  )
}

export default Loader
