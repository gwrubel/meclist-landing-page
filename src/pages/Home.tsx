

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
                    <h2>Soluções</h2>
                    
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
        </>
    )
}