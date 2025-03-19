import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import Logo from './components/Logo';
import higorImage from './assets/higor.jpg';
import backgroundImage from './assets/fundo.jpeg';

const PageBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
  image-rendering: -webkit-optimize-contrast; /* Improve image sharpness on webkit browsers */
  transform: translateZ(0); /* Hardware acceleration */
  will-change: transform; /* Hint for browser optimization */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(10, 10, 10, 0.85) 0%, rgba(5, 5, 5, 0.75) 100%);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: none; /* Remove blur for sharper image */
    z-index: -1;
  }
`;

const BackgroundPolygon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right, rgba(20, 20, 20, 0.7) 20%, rgba(30, 30, 30, 0.6) 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  z-index: -1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(135deg, rgba(15, 15, 15, 0) 0%, rgba(25, 25, 25, 0.2) 50%, rgba(15, 15, 15, 0) 100%);
    z-index: -1;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  
  @media (max-width: 480px) {
    padding: 0 0.75rem;
    justify-content: flex-start;
    padding-top: 6rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  max-width: 400px;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.3),
    0 5px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    max-width: 320px;
    margin-bottom: 1.75rem;
  }
  
  @media (max-width: 480px) {
    max-width: 280px;
    margin-bottom: 1.5rem;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
    z-index: 1;
    pointer-events: none;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.7s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
`;

const ButtonsContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  margin-top: 0;
  
  @media (max-width: 768px) {
    max-width: 320px;
  }
  
  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

const SocialButton = styled.a`
  display: block;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0.9rem 1.2rem;
  background-color: rgba(20, 20, 20, 0.5);
  font-weight: 400;
  font-size: 0.9rem;
  font-family: 'Cinzel', serif;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.8rem;
  border-radius: 3px;
  backdrop-filter: blur(5px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  text-decoration: none;

  @media (max-width: 480px) {
    padding: 1rem 1rem;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
  }

  &:hover {
    background-color: rgba(30, 30, 30, 0.7);
    transform: translateY(-3px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
    letter-spacing: 0.15em;
    
    @media (max-width: 480px) {
      letter-spacing: 0.12em;
    }
  }
  
  & > svg {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: currentColor;
  }
`;

const WhatsAppButton = styled(SocialButton)`
  background: linear-gradient(90deg, rgba(20, 20, 20, 0.5) 0%, rgba(37, 211, 102, 0.05) 100%);
  
  &:hover {
    background: linear-gradient(90deg, rgba(30, 30, 30, 0.7) 0%, rgba(37, 211, 102, 0.1) 100%);
  }
  
  svg {
    color: rgba(37, 211, 102, 0.8);
  }
`;

const InstagramButton = styled(SocialButton)`
  background: linear-gradient(90deg, rgba(20, 20, 20, 0.5) 0%, rgba(193, 53, 132, 0.05) 100%);
  
  &:hover {
    background: linear-gradient(90deg, rgba(30, 30, 30, 0.7) 0%, rgba(193, 53, 132, 0.1) 100%);
  }
  
  svg {
    color: rgba(193, 53, 132, 0.8);
  }
`;

const Footer = styled.footer`
  padding: 2rem 1rem;
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

const FooterQuote = styled.p`
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    br {
      display: none;
    }
  }
  
  &::before, &::after {
    content: '"';
    font-family: Georgia, serif;
    font-size: 1.2rem;
    color: rgba(212, 175, 55, 0.7);
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
  
  &::before {
    content: '©';
    margin-right: 0.3rem;
    color: rgba(212, 175, 55, 0.6);
  }
`;

const App: React.FC = () => {
  const phoneNumber = "5517992162807"; // Replace with actual phone number
  
  return (
    <ThemeProvider>
      <div className="min-h-screen text-white relative">
        <PageBackground />
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          <BackgroundPolygon />
          
          <ContentContainer>
            <motion.div 
              className="flex flex-col items-center justify-center text-center z-10 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Logo firstName="Higor" lastName="Nogueira" title="Visagista" />
              
              <ImageWrapper
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <img 
                  src={higorImage} 
                  alt="Higor Nogueira Visagista" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x500/1a1a1a/cccccc?text=Higor+Nogueira';
                  }}
                />
              </ImageWrapper>
              
              <ButtonsContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <WhatsAppButton 
                  href={`https://wa.me/${phoneNumber}?text=Olá,%20gostaria%20de%20agendar%20uma%20consultoria`}
                >
                  <FaWhatsapp size={18} />
                  CONSULTORIA
                </WhatsAppButton>
                
                <InstagramButton 
                  href="https://www.instagram.com/higornogueiravisagista"
                >
                  <FaInstagram size={18} />
                  INSTAGRAM
                </InstagramButton>
              </ButtonsContainer>
            </motion.div>
          </ContentContainer>
          
          <Footer>
            <FooterQuote>
              A harmonia entre cabelo, barba e traços do rosto <br />
              cria um visual autêntico e poderoso.
            </FooterQuote>
            <Copyright>
              {new Date().getFullYear()} Higor Nogueira Visagista. Todos os direitos reservados.
            </Copyright>
          </Footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
