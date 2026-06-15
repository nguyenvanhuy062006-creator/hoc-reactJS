export default function TabButton({children}){
    function handeClick(){
        alert("Nut bam duoc click");
    }
    return(
        <li><button onClick={handeClick}>{children}</button></li>
    );

}