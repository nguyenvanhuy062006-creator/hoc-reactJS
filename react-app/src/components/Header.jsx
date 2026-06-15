import logo from "../assets/hero.png"
import "../index.css"
let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
const welCome=[
  "Chào mừng bạn đến với thế giới ReactJS",
  "Rất vui khi bạn đến thế giới này",
  "Chúng ta sẽ được học các kiến thức thú vị về ReactJS",
];
function ranDomTitle(){
  return Math.floor(Math.random()*welCome.length)
}
function Header(){
  const title =welCome[ranDomTitle()]
  return (
   <>
   <section className="title">
        <div className="toto">
          <h1>{title}</h1>
          <img src={logo} atl="Tu hoc"/>
        </div>
        <p className="titi">
        Hôm nay là: <strong>{today}</strong>.Thời gian hiện tại{" "}<strong>{time}</strong>
        </p>
    </section>
   </>
  );
}
export default Header;