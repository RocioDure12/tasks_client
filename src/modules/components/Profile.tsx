function Profile(){
    const avatar="https://us.123rf.com/450wm/ejang/ejang2307/ejang230700238/208814852-cerca-de-estrellas-de-mar-fondo-de-verano-con-espacio-de-copia-ai-generativa.jpg?ver=6"
    const description="estrella de mar"
    return(
        <img
            src={avatar}
            alt={description}
        />
    );
}

export default Profile