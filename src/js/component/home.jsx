import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	//aqui va mi lógica
	//useState está pendiente del cambio de una variable
	// y si cambia la variable se recarga el componente
	// const [variable, funcion que cambia la variable] = useState(valor inicial de la variable)
	const [likes, setLikes] = useState(0)
	// voy a crear otro useState que revise si ya le he dado like a la publicacion y le voy a dar un false para que cuando comience el aplicativo isLike comience con un false
	const [isLikes, setIsLikes] = useState(false)
	return (
		<div className={`text-center ${isLikes === false ? "bg-warning" : "bg-info" }`}>
			{props.saludo}
			<h1>MeGusta {likes}</h1>
			{/* si isLike es false aparece el botón verde de dar like
			si isLike es true aparece el botón rojo de dar dislike */}

			{
				isLikes === false 
				? 
				<button className ="btn btn-success" onClick={() => {
					setLikes(likes + 1)
					setIsLikes(true)
				}}>Dar Likes</button>
				: 
				<button className ="btn btn-danger" onClick={() =>{
					setLikes(likes -1)
					setIsLikes(false)
				}}>Quitar Likes</button>
			}

			
		</div>
	);
};

export default Home;
