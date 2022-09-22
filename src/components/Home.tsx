import MyFetch from "./MyFetch";

interface articleDataProps{
    setNewsGlobal: function;
}

const Home = ({setNewsGlobal}:articleDataProps)=>{
return(
    <div className="d-flex flex-column position-abbsolute w-100 justify-content-center align-items-center">
    <div >
        <MyFetch setNewsGlobal={setNewsGlobal} /></div>
    </div>
)

}
export default Home