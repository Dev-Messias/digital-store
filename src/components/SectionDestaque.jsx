import Container from "./Container";
import camisaStar from '../assets/camisaStar.png';
import tenisColecao from '../assets/tenisColecao.png';
import foneColecao from '../assets/foneColecao.png';
import CardColecao from "./CardColecao";

const itemCard = [
    {
        id: 1,
        titulo: 'Novo drop Supreme',
        desconto: '30',
        img: camisaStar
    },
    {
        id: 2,
        titulo: 'Coleção Adidas',
        desconto: '30',
        img: tenisColecao
    },
    {
        id: 3,
        titulo: 'Novo Beats Bass',
        desconto: '30',
        img: foneColecao
    }
]

function SectionDestaque() {
    return (
        <div className="w-full py-6  " >
            <Container>
                <div className="w-full flex flex-col gap-2" >
                    <div className="mt-10" >
                        <h4 className="text-gray-700 text-xl font-semibold mb-4" >Coleções em destaque</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >

                        {itemCard.map((item) => (

                            <CardColecao key={item.id} titulo={item.titulo} desconto={item.desconto} imagem={item.img} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SectionDestaque;