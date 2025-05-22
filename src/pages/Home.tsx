

import { useEffect, useState } from "react";
import logo from "../assets//icons/logo.svg";
import menu from "../assets/icons/menu.svg";
import close from "../assets/icons/close.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import HeroRectangleOne from "../assets/imgs/retangulo1.png";
import HeroRectangleTwo from "../assets/imgs/retangulo2.png";
import job from "../assets/icons/Job.svg";
import chart from "../assets/icons/chart.svg";
import bell from "../assets/icons/Bell.svg";
import "../styles/hero.css";
import "../styles/solution.css";
import CardCustom from "../components/CardCustom";
import '../styles/testimonials.css'
import CardCarrosel from "../components/CardCarrosel";
import DonoMecanica from "../assets/imgs/dono-mecanica.jpg";
import mecanico from "../assets/imgs/mecanico.jpg";
import cliente from "../assets/imgs/cliente.jpg";
import ChefeMecanica from "../assets/imgs/chefe-mecanica.jpg";
import Cliente2 from "../assets/imgs/cliente-02.jpg";
import Mecanico2 from "../assets/imgs/mecanico-02.jpg";
import '../styles/pricing.css'
import PricingCard from "../components/pricingCard";
import pc from "../assets/imgs/pc.svg";
import celular from "../assets/imgs/celular.svg";
import '../styles/functions.css';
import checkbox from '../assets/icons/checkbox.svg'


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);



    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={logo} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#hero">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#Funcionalidades">Funcionalidades</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>



                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

                <div className="content container ">
                    <p className="desktop-only">
                        Bem-vindos
                    </p>
                    <h1>Simplifique a gestão da sua oficina mecânica com o Meclist!</h1>
                    <p>
                        Automatize seus checklists, acompanhe serviços em tempo real e melhore a comunicação com seus clientes e mecânicos.
                    </p>
                    <div className="flex gap-1" id="hero-cta">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Saiba mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section className="container" id="solution">
                <header>
                    <span>
                        <p id="solution-title">Soluções</p>

                        <span className="desktop-only">
                            <h2 >sob medida para sua mecânica</h2>
                        </span>
                    </span>
                    <p>O <strong>MecList</strong> foi desenvolvido para tornar a inspeção veicular mais eficiente e confiável. Com um checklist digital, transparência para o cliente e dados estratégicos para a oficina, sua mecânica ganha mais controle e agilidade nos serviços.</p>
                </header>

                <section className="even-columns">

                    <CardCustom icon={job} title="Transparência Total" text="Garanta mais confiança com um checklist detalhado, onde o cliente pode visualizar todas as peças que precisam de troca e o histórico dos serviços já realizados." />
                    <CardCustom icon={chart} title="Gestão Inteligente" text="Acompanhe métricas e relatórios para otimizar o atendimento e a tomada de decisões." />
                    <CardCustom icon={bell} title="Comunicação Eficiente" text="Notifique seus clientes automaticamente sobre o status do veículo, agilizando aprovações e melhorando a experiência do atendimento." />


                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Quem usa, recomenda
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem trabalha com oficina sabe a importância de ter processos organizados, mais controle e transparência.
                        Confira abaixo os depoimentos de quem já usa o Meclist e aprovou a transformação na gestão da oficina.
                    </p>
                </header>

                <section className="carousel">
                    <div className="carousel-content">

                        <CardCarrosel
                            ImagemCliente={DonoMecanica}
                            comentario="O Meclist transformou a rotina da nossa oficina. Hoje conseguimos acompanhar o histórico de cada cliente com muito mais facilidade. Simplesmente indispensável!"
                            chaves={5}
                            nome="Carlos Andrade"
                            cargo="Proprietário da Andrade Motors"
                        />
                        <CardCarrosel
                            ImagemCliente={mecanico}
                            comentario="Com o Meclist ficou muito mais fácil organizar os checklists e registrar os serviços. Agora consigo mostrar ao cliente exatamente o que foi feito no carro."
                            chaves={4}
                            nome="Juliano Rocha"
                            cargo="Mecânico especializado"
                        />
                        <CardCarrosel
                            ImagemCliente={cliente}
                            comentario="Levei meu carro na oficina e recebi o checklist completo no celular. Achei incrível poder acompanhar tudo com fotos e detalhes. Transparência total!"
                            chaves={5}
                            nome="Fernando Lima"
                            cargo="Cliente do Meclist"
                        />

                        <CardCarrosel
                            ImagemCliente={ChefeMecanica}
                            comentario="O Meclist nos ajuda a manter toda a equipe alinhada. Cada serviço é registrado, e fica muito mais fácil delegar tarefas e acompanhar o andamento dos veículos na oficina."
                            chaves={5}
                            nome="Roberto Souza"
                            cargo="Chefe de Mecânica"
                        />
                        <CardCarrosel
                            ImagemCliente={Cliente2}
                            comentario="Fiquei muito satisfeito com o atendimento da oficina usando o Meclist. Saber exatamente quais peças precisavam de troca e receber tudo documentado me passou muita confiança."
                            chaves={5}
                            nome="Paulo Mendes"
                            cargo="Cliente do Meclist"
                        />
                        <CardCarrosel
                            ImagemCliente={Mecanico2}
                            comentario="Antes era tudo no papel, hoje com o Meclist eu registro os problemas, adiciono fotos e faço o checklist de forma muito mais rápida. O serviço ficou mais profissional."
                            chaves={4}
                            nome="Lucas Ferreira"
                            cargo="Mecânico"
                        />




                    </div>
                    <div className="carousel-content">
                        <CardCarrosel
                            ImagemCliente={DonoMecanica}
                            comentario="O Meclist transformou a rotina da nossa oficina. Hoje conseguimos acompanhar o histórico de cada cliente com muito mais facilidade. Simplesmente indispensável!"
                            chaves={5}
                            nome="Carlos Andrade"
                            cargo="Proprietário da Andrade Motors"
                        />
                        <CardCarrosel
                            ImagemCliente={mecanico}
                            comentario="Com o Meclist ficou muito mais fácil organizar os checklists e registrar os serviços. Agora consigo mostrar ao cliente exatamente o que foi feito no carro."
                            chaves={4}
                            nome="Juliano Rocha"
                            cargo="Mecânico especializado"
                        />
                        <CardCarrosel
                            ImagemCliente={cliente}
                            comentario="Levei meu carro na oficina e recebi o checklist completo no celular. Achei incrível poder acompanhar tudo com fotos e detalhes. Transparência total!"
                            chaves={5}
                            nome="Fernanda Lima"
                            cargo="Cliente do Meclist"
                        />

                        <CardCarrosel
                            ImagemCliente={ChefeMecanica}
                            comentario="O Meclist nos ajuda a manter toda a equipe alinhada. Cada serviço é registrado, e fica muito mais fácil delegar tarefas e acompanhar o andamento dos veículos na oficina."
                            chaves={5}
                            nome="Roberto Souza"
                            cargo="Chefe de Mecânica"
                        />
                        <CardCarrosel
                            ImagemCliente={Cliente2}
                            comentario="Fiquei muito satisfeito com o atendimento da oficina usando o Meclist. Saber exatamente quais peças precisavam de troca e receber tudo documentado me passou muita confiança."
                            chaves={5}
                            nome="Paulo Mendes"
                            cargo="Cliente do Meclist"
                        />
                        <CardCarrosel
                            ImagemCliente={Mecanico2}
                            comentario="Antes era tudo no papel, hoje com o Meclist eu registro os problemas, adiciono fotos e faço o checklist de forma muito mais rápida. O serviço ficou mais profissional."
                            chaves={4}
                            nome="Lucas Ferreira"
                            cargo="Mecânico"
                        />


                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <PricingCard
                        title="Básico"
                        text="Ideal para pequenas oficinas que estão começando a se organizar."
                        features={[
                            "Cadastro de até 50 veículos",
                            "Checklists ilimitados",
                            "Acesso para 1 administrador"
                        ]}
                        price="R$ 49,90"
                    />

                    <PricingCard
                        title="Premium"
                        text="Para oficinas que buscam automação total, controle e performance."
                        premium
                        bonus="1º MÊS COM DESCONTO"
                        features={[
                            "Cadastro ilimitado de veículos",
                            "Checklists ilimitados",
                            "Relatórios completos e exportação em PDF",
                            "Acesso para até 10 administradores"
                        ]}
                        price="R$ 149,90"
                    />

                    <PricingCard
                        title="Plus"
                        text="Perfeito para oficinas de médio porte que precisam de mais controle."
                        features={[
                            "Cadastro de até 200 veículos",
                            "Checklists ilimitados",
                            "Relatórios básicos de serviços",
                            "Acesso para até 3 usuários"
                        ]}
                        price="R$ 89,90"
                    />



                </section>
            </section>

            <section id="functions">
                <header className="container">
                    <span> <p className="desktop-only">Funcionalidades</p>
                    </span>
                    <h2>Checklist, Transparência e Gestão de dados</h2>
                    <p className="desktop-only">O <strong>MecList</strong> facilita a inspeção de veículos com um checklist detalhado e transparente para o cliente, enquanto a oficina acessa dados valiosos para otimizar a gestão e o acompanhamento dos serviços.</p>
                </header>
                <div className="content">
                    <div className="images">
                        <img src={pc} alt="Computador com o meclist" />
                        <img src={celular} alt="App do Mecânico" />
                    </div>
                    <div className="desktop-only">
                        <ul>
                            <li><img src={checkbox} alt="checkbox" /> Checklists detalhados</li>
                            <li><img src={checkbox} alt="checkbox" />Serviços e Ordens </li>
                            <li><img src={checkbox} alt="checkbox" /> Controle de Mecânicos</li>
                            <li><img src={checkbox} alt="checkbox" />Faturamento detalhado </li>
                            <li><img src={checkbox} alt="checkbox" />Transparência Total  </li>
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}