import { useEffect } from "react"
import coffee from "../assets/icon-coffee.png"
import email from "../assets/icon-email.png"
import home from "../assets/icon-home.png"
import phone from "../assets/icon-phone.png"
import pin from "../assets/icon-pin.png"
import user from "../assets/icon-user.png"
import { useState } from "react"
import { useForm } from "react-hook-form"

const FormFranqueado = () => {

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const { register, handleSubmit, setValue } = useForm();


    async function buscarEstados() {
        const request = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
        const response = await request.json();
        if (response) {
            setEstados(response);
        }
    }
    
    async function buscarCidades(estadoId) {
        const request = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios?orderBy=nome`);
        const response = await request.json();
        if (response) {
            setCidades(response);
        }
    }

    function cadastrarLead(dados) {
        console.log(dados);

    }

    useEffect(() => {
        buscarEstados();
    }, [])


    return (
        <>
            <form onSubmit={handleSubmit(cadastrarLead)}>
                <div>
                    <img src={user} alt="" />
                    <input
                        type="text"
                        placeholder="Nome e sobrenome"
                        {...register("nome", { required: true })}
                    />
                </div>
                <div>
                    <img src={email} alt="" />
                    <input
                        type="text"
                        placeholder="email@exemplo.com"
                        {...register("email", { required: true })}
                    />
                </div>
                <div>
                    <img src={phone} alt="" />
                    <input
                        type="text"
                        placeholder="Telefone com DDD"
                        {...register("telefone", { required: true })}
                    />
                </div>
                <div>
                    <img src={pin} alt="" />
                    <select
                        onChange={(event) => {
                            setValue("estado", event.target.value);
                            buscarCidades(event.target.selectedOptions[0].attributes.estadoId.value);
                        }}
                    >
                        <option disabled selected>UF</option>
                        {
                            estados.map(estado => (
                                <option
                                    key={`estado-${estado.id}`}
                                    value={estado.nome}
                                    estadoId={estado.id}
                                >
                                    {estado.nome}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <img src={home} alt="" />
                    <select
                        onChange={(event) => setValue("cidade", event.target.value)}
                    >
                        <option disabled selected>Cidade</option>
                        {
                            cidades.map(cidade => (
                                <option
                                    key={`cidade-${cidade.id}`}
                                    value={cidade.nome}
                                >
                                    {cidade.nome}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <img src={coffee} alt="" />
                    <select
                        onChange={(event) => setValue("midia", event.target.value)}
                    >
                        <option disabled selected>Como conheceu a Tiamate?</option>
                        <option value="instagram">Instagram</option>
                        <option value="linkedin">Linkdin</option>
                        <option value="tv">TV</option>
                    </select>
                </div>
                <button>Enviar cadastro</button>
            </form>
        </>
    );
}

export default FormFranqueado;