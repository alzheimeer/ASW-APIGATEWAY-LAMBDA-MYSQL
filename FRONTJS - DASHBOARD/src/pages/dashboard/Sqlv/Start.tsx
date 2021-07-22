import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const Start = () => {
    let navigate = useNavigate();
    const responseGoogle = (response) => {
        //Imprimimos la respuesta que llega de google
        console.log(response);
        //sacamos de la respuesta los datos que necesitamos
        //el token, aunque tambien llega el nombre apellido y foto
        //con estos podriamos colocarlos de forma bonita en el sidebar
        console.log('Bearer Token', response.tokenId);
        console.log('Email', response.profileObj.email);
        console.log('Nombre', response.profileObj.givenName);
        console.log('Apellido', response.profileObj.familyName);
        console.log('Foto', response.profileObj.imageUrl);
        console.log('Access Token', response.profileObj.accessToken);
        //Mandamos a localStorage o cookies el token de google.
        localStorage.setItem('Bearer', response.tokenId);
        //Nos Dirigimos a Querys
        navigate('/querys');
      }
    return (
        <div>
            <GoogleLogin
                    clientId="192958602504-ckemkddjd5ujhhpfv4f1fnjhd1jnlgrk.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Start