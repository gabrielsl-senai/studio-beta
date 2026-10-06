import "./header.css"
function header(){
    return(
        <header class ="cabecalho">
        <span class="logo">Studio beta</span>
        <nav>
            <ul class="menu">
                <li><a href="#">Início</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
       </header>

    )
}
export default header