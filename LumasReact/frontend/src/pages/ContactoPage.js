const ContactoPage = (props) => {
    return (
        <div>
            <main class="holder contacto">
                <div>
                    <h2>Contacto Rapido</h2>
                    <form action="" method="" class="formulario">
                        <p>
                            
                            <label for="nombre">Nombre</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="telefono">Telefono</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name=""></textarea>
                        </p>
                        <p>
                            <input type="submit" name="Enviar" />
                        </p>
                    </form>
                </div>


                <div class="datos">
                    <h2>Otras vias de comunicacion</h2>
                    <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li>Telefono: 1525304686</li>
                        <li>Email: contacto@lumas.com.ar</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Skype</li>

                    </ul>
                </div>
            </main>
        </div>
    );
}
export default ContactoPage;