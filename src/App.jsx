
import './App.css'

function App() {

let cardinfo = {
  image: "https://www.google.com/imgres?q=profile%20picture&imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F14653174%2Fpexels-photo-14653174.jpeg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fsilhouette-of-a-boys-profile-against-sunset-sky-14653174%2F&docid=zbgYMzPRRJyjxM&tbnid=kn6HalGYPsx7QM&vet=12ahUKEwjOrtmRl9eLAxVsXvEDHU52Gk8QM3oECBwQAA..i&w=3712&h=3711&hcb=2&ved=2ahUKEwjOrtmRl9eLAxVsXvEDHU52Gk8QM3oECBwQAA"
  firstname :"barbare",
  lastname: "gogua"


}

  return (
    <>
    <div className="card">
      <img src="{cardinfo}" alt="" />
      <h4>{cardinfo.firstname}</h4>
      <h5>{cardinfo.lastname}</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates similique, repellat voluptate in nulla praesentium delectus sapiente quia impedit porro! Eius facere blanditiis iste soluta exercitationem consectetur minus amet iusto.git </p>
    </div>

    </>
  )
}

export default App
